// const DffUserTeamRepo = require("../../../../database/mongoose/repositories/DffUserTeamsRepo")
// const DffUserTeamsContestRepo = require("../../../../database/mongoose/repositories/DffUserTeamsContestRepo")
// const DffContestsRepo = require("../../../../database/mongoose/repositories/DffContestsRepo")
// // const UserRepo = require("../../../../database/mongoose/repositories/UserRepo")
// const { CreatedResponse, ConflictResponse } = require("../../../../lib/core/apiResponse")
// const { ConflictError, NotFoundError } = require("../../../../lib/core/apiError")
// const { MessageTokens } = require("../../../../lib/helper/declaration")

// const asyncHandler = require("../../../../lib/core/asyncHandler")
// const logger = require("../../../../lib/core/logger")


module.exports = {
  /**
   *
   * @api {post} dffService/v1/userTeamContest Create User Team Contest
   * @apiDescription Create user Team Contest.
   * @apiName createDffUserTeamContest.
   * @apiGroup dffUserTeamContest
   * @apiVersion  1.0.0
   * @apiPermission Authenticated
   * @apiPermission All
   *
   * @apiHeader {String} Authorization  Bearer Access token.
   *
   *
   * @apiSuccess (201) {json}  created
   *
   * @apiParamExample  {json} Request-Example:
{
    "userTeamId":"60dda6abbc88d632e05b2279",
    "contestId": "60dc5a400d028f5040ef0e7f"
}
   *
   * @apiSuccessExample {json} Success-Response:
    {
    "statusCode": "10000",
    "message": "team_created",
    "data": {
        "items": [
            {
                "_teamFormation": "5a2e52df3c7fe83f95d149b5",
                "totalTeamPoint": 0,
                "isActive": true,
                "dffSeasonGameStatus": "pre-match",
                "_id": "60deb6754e409a56540bfc02",
                "_dffUserTeam": "60ddb0d13e5adf52409ae868",
                "leagueId": 22,
                "season": 2020,
                "gameId": "g2125190",
                "teamPlayerTotalBudget": 100,
                "_user": "609275ddea230756a8fc051a",
                "teamName": "Shankar 2",
                "_dffSeason": "60dc55400d028f5040ef0e7a",
                "_dffLeagueSeasonGame": "60dc62287ed2953d041fed51",
                "teamPlayers": [
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae869",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t160.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t160.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t160.png"
                        },
                        "apiPosition": "AM",
                        "displayPosition": "AM",
                        "fieldPosition": 10,
                        "firstName": "Chang-Hoon",
                        "isLeader": false,
                        "lastName": "Kwon",
                        "playerPrice": 3.5,
                        "playerRef": "p154770",
                        "teamRef": "t160",
                        "x": 1,
                        "y": 2
                    },
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae86a",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t160.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t160.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t160.png"
                        },
                        "apiPosition": "AM",
                        "displayPosition": "AM",
                        "fieldPosition": 9,
                        "firstName": "Mohamed",
                        "isLeader": false,
                        "lastName": "Dräger",
                        "playerPrice": 3.5,
                        "playerRef": "p173399",
                        "teamRef": "t160",
                        "x": 3,
                        "y": 8
                    },
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae86b",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t159.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t159.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t159.png"
                        },
                        "apiPosition": "AM",
                        "displayPosition": "AM",
                        "fieldPosition": 8,
                        "firstName": "Ajdin",
                        "isLeader": true,
                        "lastName": "Hrustic",
                        "playerPrice": 3.5,
                        "playerRef": "p247333",
                        "teamRef": "t159",
                        "x": 3,
                        "y": 4
                    },
                    {
                        "knownName": null,
                        "starLevel": 1,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae86c",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t160.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t160.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t160.png"
                        },
                        "apiPosition": "AM",
                        "displayPosition": "AM",
                        "fieldPosition": 8,
                        "firstName": "Marco",
                        "isLeader": false,
                        "lastName": "Terrazzino",
                        "playerPrice": 3.5,
                        "playerRef": "p55949",
                        "teamRef": "t160",
                        "x": 3,
                        "y": 0
                    },
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae86d",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t160.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t160.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t160.png"
                        },
                        "apiPosition": "FB",
                        "displayPosition": "FB",
                        "fieldPosition": 5,
                        "firstName": "Gian-Luca",
                        "isLeader": false,
                        "lastName": "Itter",
                        "playerPrice": 3.5,
                        "playerRef": "p219879",
                        "teamRef": "t160",
                        "x": 8,
                        "y": 8
                    },
                    {
                        "knownName": null,
                        "starLevel": 2,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae86e",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t159.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t159.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t159.png"
                        },
                        "apiPosition": "FB",
                        "displayPosition": "FB",
                        "fieldPosition": 4,
                        "firstName": "Jetro",
                        "isLeader": false,
                        "lastName": "Willems",
                        "playerPrice": 3.5,
                        "playerRef": "p92159",
                        "teamRef": "t159",
                        "x": 8,
                        "y": 0
                    },
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae86f",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t159.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t159.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t159.png"
                        },
                        "apiPosition": "CB",
                        "displayPosition": "CB",
                        "fieldPosition": 3,
                        "firstName": "Lucas",
                        "isLeader": false,
                        "lastName": "Silva Melo",
                        "playerPrice": 3.5,
                        "playerRef": "p470615",
                        "teamRef": "t159",
                        "x": 9,
                        "y": 6
                    },
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae870",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t159.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t159.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t159.png"
                        },
                        "apiPosition": "CB",
                        "displayPosition": "CB",
                        "fieldPosition": 2,
                        "firstName": "David",
                        "isLeader": false,
                        "lastName": "Abraham",
                        "playerPrice": 3.5,
                        "playerRef": "p52026",
                        "teamRef": "t159",
                        "x": 9,
                        "y": 2
                    },
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae871",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t159.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t159.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t159.png"
                        },
                        "apiPosition": "GK",
                        "displayPosition": "GK",
                        "fieldPosition": 1,
                        "firstName": "Felix",
                        "isLeader": false,
                        "lastName": "Wiedwald",
                        "playerPrice": 3.5,
                        "playerRef": "p66880",
                        "teamRef": "t159",
                        "x": 11,
                        "y": 4
                    },
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae872",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t160.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t160.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t160.png"
                        },
                        "apiPosition": "CF",
                        "displayPosition": "CF",
                        "fieldPosition": 11,
                        "firstName": "Lucas",
                        "isLeader": false,
                        "lastName": "Höler",
                        "playerPrice": 6,
                        "playerRef": "p192401",
                        "teamRef": "t160",
                        "x": 0,
                        "y": 6
                    },
                    {
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60ddb0d13e5adf52409ae873",
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t160.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t160.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t160.png"
                        },
                        "apiPosition": "CM",
                        "displayPosition": "CM",
                        "fieldPosition": 6,
                        "firstName": "Amir",
                        "isLeader": false,
                        "lastName": "Abrashi",
                        "playerPrice": 3.5,
                        "playerRef": "p84360",
                        "teamRef": "t160",
                        "x": 6,
                        "y": 4
                    }
                ],
                "_dffContest": "60dc5a400d028f5040ef0e7f",
                "_createdBy": "609275ddea230756a8fc051a",
                "customId": "2020-22-g2125190",
                "_updatedBy": "609275ddea230756a8fc051a",
                "createdAt": "2021-07-02T06:47:17.065Z",
                "updatedAt": "2021-07-02T06:47:17.065Z",
                "instanceId": "1t01jpe-5",
                "id": "60deb6754e409a56540bfc02"
            }
        ]
    }
}
  *
  * @apiParamExample  {json} Request-Example(teamName Exists in this contest):
{
    "userTeamId":"60dda6abbc88d632e05b2279",
    "contestId": "60dc5a400d028f5040ef0e7f"
}
  *  @apiSuccessExample {json} Conflict-Response:
    {
    "statusCode": "10000",
    "message": "You already have team in this contest"
  }
  *
  */

//   createUserTeamContest: asyncHandler(async (req, res) => {
//     const { userTeamId, contestId } = req.body
//     const { user } = req
//     const contest = await DffContestsRepo.findOneByFilter({ _id: contestId })
//     if (!contest) throw ConflictError("Contest does not exists")

//     const { maximumUserTeamEntries } = contest.config
//     const userTeam = await DffUserTeamRepo.findOneWithPlayers({ _id: userTeamId, isActive: true })
//     if (!userTeam) throw ConflictError("User Team not found")

//     const teamsInContest = await DffUserTeamsContestRepo
//       .find({
//         gameId: userTeam.gameId,
//         _dffContest: contestId,
//         _user: user._id
//       })
//     if (teamsInContest.length >= maximumUserTeamEntries) {
//       throw ConflictError("You already have team in this contest")
//     }
//     const teamObject = userTeam
//     teamObject._dffUserTeam = userTeam._id
//     teamObject._dffContest = contestId
//     delete teamObject._id
//     delete teamObject.createdAt
//     delete teamObject.updatedAt
//     const userTeamContest = await DffUserTeamsContestRepo.create(teamObject)

//     return CreatedResponse(res, MessageTokens.team_created, userTeamContest)
//   }),

  createUserTeamContest: (req, res) => {

    return "hello"
  }

}
