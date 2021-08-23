const DffUserTeamContest = require("../models/dffUserTeamContest")


const DffUserTeamRepo = {
  findByFilter: async filter => DffUserTeamContest.findOne(filter)
    .lean()
    .exec(),

  find: async filter => DffUserTeamContest.find(filter)
    .lean()
    .exec(),
  countDocuments: async filter => DffUserTeamContest.count(filter)
    .lean()
    .exec(),

  findOne: async filter => DffUserTeamContest.findOne(filter)
    .populate({
      path: "_dffLeagueSeasonGame",
      select: "homeTeam awayTeam gameDate stat gameStartDateTime"
    })
    .select("-teamPlayers")
    .exec(),

  findById: async id => DffUserTeamContest.findOne({ _id: id })
    .populate({
      path: "_teamFormation",
      select: "formation_name formation_photo formationPhoto"
    })
    .populate("_dffSeason")
    .populate({
      path: "_dffLeagueSeasonGame",
      select: "editTeam transferCloseAt homeTeamLogoUrl awayTeamLogoUrl homeTeam awayTeam dffContests"
    })
    .lean()
    .exec(),

  findName: async nameFilter => DffUserTeamContest.find(nameFilter).select("teamName").lean().exec(),

  // agenda exclusive
  findUserTeamsWithFilters: async (filter = {}) => DffUserTeamContest.aggregate([
    {
      $match: filter
    },
    { $sort: { totalTeamPoint: -1 } },
    { $group: { _id: null, count: { $sum: 1 }, data: { $push: "$$ROOT" } } },
    { $unwind: { path: "$data", includeArrayIndex: "myRank" } },
    {
      $addFields: {
        "data.stat.myRank": { $add: ["$myRank", 1] },
        "data.stat.totalTeamCount": "$count"
      }
    },
    { $replaceRoot: { newRoot: "$data" } },
    {
      $project:
      {
        _id: 1,
        season: 1,
        leagueId: 1,
        gameId: 1,
        _user: 1,
        teamName: 1,
        _teamFormation: 1,
        _prizeZone: 1,
        teamPlayers: 1,
        totalTeamPoint: 1,
        isActive: 1,
        teamPlayerTotalBudget: 1,
        chargedRftc: 1,
        _dffSeason: 1,
        _dffLeagueSeasonGame: 1,
        dffSeasonGameStatus: 1,
        timeConfirmingTime: 1,
        _dffContests: 1,
        dffContestType: 1,
        customId: 1,
        stat: 1,
        _createdBy: 1,
        _updatedBy: 1
      }
    }
  ]),

  // repo function current leader Board call
  findCurrentLeaderBoard: async (filter = {}) => DffUserTeamContest
    .find(filter)
    .populate({
      path: "_dffLeagueSeasonGame",
      select: "homeTeam awayTeam gameDate gameStartDateTime"
    })
    .select("-teamPlayers")
    .sort({ _id: -1 })
    .lean()
    .exec(),

  // repo function for history leader board call
  findForLeaderBoard: async (filter = {}) => DffUserTeamContest
    .find(filter)
    .populate({
      path: "_dffLeagueSeasonGame",
      select: "homeTeam awayTeam gameDate gameStartDateTime"
    })
    .select("-teamPlayers")
    .sort({ _id: -1 })
    .lean()
    .exec(),

  // repo function for top 10 history
  findTopTen: async (filter = {}) => DffUserTeamContest
    .find(filter)
    .populate({
      path: "_dffLeagueSeasonGame",
      select: "homeTeam awayTeam gameDate gameStartDateTime"
    })
    .select("-teamPlayers")
    .sort({ totalTeamPoint: -1 })
    .limit(10)
    .exec(),
  // repo function for top 10 current
  findCurrentTopTen: async (filter = {}) => DffUserTeamContest
    .find(filter)
    .populate({
      path: "_dffLeagueSeasonGame",
      select: "homeTeam awayTeam gameDate gameStartDateTime stat"
    })
    .select("-teamPlayers")
    .sort({ totalTeamPoint: -1 })
    .limit(10)
    .exec(),

  // opta feed point calculation
  findWithFilters: async filter => DffUserTeamContest
    .find(filter)
    .populate({
      path: "_dffSeason",
      select: "starPlayerDetails"
    })
    .lean()
    .exec(),

  // to create user team
  create: async ({
    _dffUserTeam, season, gameId, _user, teamName, leagueId,
    _prizeZone, _dffLeagueSeasonGame, dffContestType, _teamFormation,
    _createdBy, _updatedBy, teamPlayerTotalBudget,
    _dffSeason, teamPlayers, _dffContest, customId, dffSeasonGameStatus
  }) => DffUserTeamContest.create({
    _dffUserTeam,
    _teamFormation,
    leagueId,
    season,
    gameId,
    teamPlayerTotalBudget,
    _user,
    teamName,
    _prizeZone,
    _dffSeason,
    _dffLeagueSeasonGame,
    dffContestType,
    dffSeasonGameStatus,
    teamPlayers,
    _dffContest,
    _createdBy,
    customId,
    _updatedBy
  }),

  // to update the user Team
  updateById: async (_id, dffUserTeam) => {
    await DffUserTeamContest
      .updateOne(
        { _id },
        { $set: { ...dffUserTeam } }
      ).lean().exec()
    return dffUserTeam
  },

  updateByFilter: async (filter, dffUserTeam) => {
    await DffUserTeamContest
      .updateOne(
        { ...filter },
        { $set: { ...dffUserTeam } }
      ).lean().exec()
    return dffUserTeam
  },

  // exclusive for agenda calling
  delateUserTeamsWithFilter: async filter => DffUserTeamContest
    .deleteMany(filter).exec()

}

module.exports = DffUserTeamRepo
