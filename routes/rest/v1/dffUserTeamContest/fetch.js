
// const { ConflictError } = require("../../../../lib/core/apiError")
const DffUserTeamsContestRepo = require("../../../../database/mongoose/repositories/DffUserTeamsContestRepo")
const { SuccessResponse } = require("../../../../lib/core/apiResponse")
// const asyncHandler = require("../../../../lib/core/asyncHandler")
// const DffUserTeamContestHistoryRepo = require("../../../../database/mongoose/repositories/DffUserTeamContestHistoryRepo")
module.exports = {
  /**
   * @api {get} /dffService/v1/userTeamContest?userTeamContestId=60895b1652a2406b74bdeb22 Get User Team Contest By Id
   * @apiDescription Fetch a Particular TeamContest By _id in query param.
   * @apiName getDffUserTeamContestById.
   * @apiGroup dffUserTeamContest
   * @apiVersion  1.0.0
   * @apiPermission Authenticated
   * @apiPermission All
   *
   * @apiHeader {String} Authorization  Bearer Access token.
   *
   *
   * @apiSuccess (200) {json} name description
   *
   * @apiParamExample  {json} Request-Example:
   * {
      userTeamId:60b087da4f44b6710db8e7be
   * }
   *
   * @apiSuccessExample {json} Success-Response:
    {
    "statusCode": "10000",
    "message": "user Team Fetched",
    "data": {
        "items": [
            {
                "_teamFormation": {
                    "_id": "5aa11f9c164f1ddfdbbc75d6",
                    "formation_name": "4-2-3-1",
                    "formation_photo": "formation-1520594977153.png",
                    "formationPhoto": "https://s3.amazonaws.com/realfantasyteams/uploads/formations/formation-1520594977153.png",
                    "id": "5aa11f9c164f1ddfdbbc75d6"
                },
                "totalTeamPoint": 0,
                "isActive": true,
                "dffSeasonGameStatus": "pre-match",
                "dffContestType": "dff_regular",
                "_id": "60b087da4f44b6710db8e7be",
                "leagueId": 5,
                "season": 2020,
                "gameId": "g2197699",
                "teamPlayerTotalBudget": 85,
                "_user": "60b0873b658540589b3162de",
                "teamName": "TEAMA_25",
                "_prizeZone": "5c933901efe36e2c90cb021d",
                "_dffSeason": {
                    "maxPlayerPerClub": 6,
                    "isActive": true,
                    "isFeatured": false,
                    "_id": "60a21122482934775b6223ea",
                    "name": "DFF REGULAR",
                    "description": "Make you fantasy team today",
                    "prizeZones": [
                        {
                            "isActive": true,
                            "_id": "60afadc74f44b6710db8e6da",
                            "_prizeZone": "5c933901efe36e2c90cb021d"
                        },
                        {
                            "isActive": true,
                            "_id": "60afadc74f44b6710db8e6db",
                            "_prizeZone": "5c9338bdefe36e2c90caf9ea"
                        }
                    ],
                    "starPlayerDetails": [
                        {
                            "_id": "60afadc74f44b6710db8e6d8",
                            "levelName": "One",
                            "levelNo": 1,
                            "pointFactor": 1.5,
                            "maxPlayerAllowedPerTeam": 1
                        },
                        {
                            "_id": "60afadc74f44b6710db8e6d9",
                            "levelName": "Two",
                            "levelNo": 2,
                            "pointFactor": 3,
                            "maxPlayerAllowedPerTeam": 1
                        }
                    ],
                    "season": 2020,
                    "defaultTeamBudget": 85,
                    "createdAt": "2021-05-17T06:45:54.542Z",
                    "updatedAt": "2021-05-27T14:33:43.762Z",
                    "customId": "2020",
                    "_updatedBy": "608272e5a3340faee4f26687",
                    "id": "60a21122482934775b6223ea"
                },
                "_dffLeagueSeasonGame": {
                    "homeTeam": {
                        "totalGoals": 0,
                        "teamRef": "t43",
                        "codeName": "MCI",
                        "international": 0,
                        "isWonderLeague": 0,
                        "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png",
                        "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                        "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                        "season": 2020,
                        "status": 1,
                        "teamId": 2030,
                        "teamName": "Manchester City",
                        "country": null
                    },
                    "awayTeam": {
                        "totalGoals": 0,
                        "teamRef": "t8",
                        "codeName": "CHE",
                        "international": 0,
                        "isWonderLeague": 0,
                        "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png",
                        "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                        "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                        "season": 2020,
                        "status": 1,
                        "teamId": 2023,
                        "teamName": "Chelsea",
                        "country": null
                    },
                    "timings": {
                        "minutes": 97,
                        "state": "second_half_stop"
                    },
                    "simulation": {
                        "originalGameId": "g2197699",
                        "willSimulateAt": "2021-07-14T08:15:00.000Z",
                        "actualGameTime": "2021-05-29T19:00:00.000Z",
                        "transferCloseBefore": 1,
                        "willCoverIn": 3
                    },
                    "_id": "60ab3646174a20547cd334c5",
                    "transferCloseAt": 1622189018741,
                    "editTeam": false,
                    "id": "60ab3646174a20547cd334c5"
                },
                "_createdBy": "60b0873b658540589b3162de",
                "_updatedBy": "60b0873b658540589b3162de",
                "teamPlayers": [
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7d5",
                        "apiPosition": "AM",
                        "displayPosition": 10,
                        "fieldPosition": "AM",
                        "firstName": "Riyad",
                        "isLeader": false,
                        "lastName": "Mahrez",
                        "opponentTeamName": "Chelsea",
                        "opponentTeamRef": "t8",
                        "opponentTeamShortCode": "CHE",
                        "playerPrice": 8,
                        "playerRef": "p103025",
                        "teamRef": "t43",
                        "x": 3,
                        "y": 8
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7d6",
                        "apiPosition": "AM",
                        "displayPosition": 9,
                        "fieldPosition": "AM",
                        "firstName": "Adrián",
                        "isLeader": false,
                        "lastName": "Bernabé",
                        "opponentTeamName": "Chelsea",
                        "opponentTeamRef": "t8",
                        "opponentTeamShortCode": "CHE",
                        "playerPrice": 3.5,
                        "playerRef": "p449926",
                        "teamRef": "t43",
                        "x": 3,
                        "y": 4
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7d7",
                        "apiPosition": "AM",
                        "displayPosition": 8,
                        "fieldPosition": "AM",
                        "firstName": "Callum",
                        "isLeader": false,
                        "lastName": "Hudson-Odoi",
                        "opponentTeamName": "Manchester City",
                        "opponentTeamRef": "t43",
                        "opponentTeamShortCode": "MCI",
                        "playerPrice": 6,
                        "playerRef": "p209046",
                        "teamRef": "t8",
                        "x": 3,
                        "y": 0
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7d8",
                        "apiPosition": "AM",
                        "displayPosition": 7,
                        "fieldPosition": "AM",
                        "firstName": "Felix",
                        "isLeader": true,
                        "lastName": "Nmecha",
                        "opponentTeamName": "Chelsea",
                        "opponentTeamRef": "t8",
                        "opponentTeamShortCode": "CHE",
                        "playerPrice": 3.5,
                        "playerRef": "p219265",
                        "teamRef": "t43",
                        "x": 5,
                        "y": 2
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7d9",
                        "apiPosition": "FB",
                        "displayPosition": 5,
                        "fieldPosition": "FB",
                        "firstName": "Oleksandr",
                        "isLeader": false,
                        "lastName": "Zinchenko",
                        "opponentTeamName": "Chelsea",
                        "opponentTeamRef": "t8",
                        "opponentTeamShortCode": "CHE",
                        "playerPrice": 6.5,
                        "playerRef": "p206325",
                        "teamRef": "t43",
                        "x": 8,
                        "y": 8
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "knownName": null,
                        "starLevel": 1,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7da",
                        "apiPosition": "FB",
                        "displayPosition": 4,
                        "fieldPosition": "FB",
                        "firstName": "Reece",
                        "isLeader": false,
                        "lastName": "James",
                        "opponentTeamName": "Manchester City",
                        "opponentTeamRef": "t43",
                        "opponentTeamShortCode": "MCI",
                        "playerPrice": 6,
                        "playerRef": "p225796",
                        "teamRef": "t8",
                        "x": 8,
                        "y": 0
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7db",
                        "apiPosition": "CB",
                        "displayPosition": 3,
                        "fieldPosition": "CB",
                        "firstName": "Andreas",
                        "isLeader": false,
                        "lastName": "Christensen",
                        "opponentTeamName": "Manchester City",
                        "opponentTeamRef": "t43",
                        "opponentTeamShortCode": "MCI",
                        "playerPrice": 6.5,
                        "playerRef": "p135363",
                        "teamRef": "t8",
                        "x": 9,
                        "y": 6
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "knownName": "Rúben Dias",
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7dc",
                        "apiPosition": "CB",
                        "displayPosition": 2,
                        "fieldPosition": "CB",
                        "firstName": "Rúben Santos",
                        "isLeader": false,
                        "lastName": "Gato Alves Dias",
                        "opponentTeamName": "Chelsea",
                        "opponentTeamRef": "t8",
                        "opponentTeamShortCode": "CHE",
                        "playerPrice": 7.5,
                        "playerRef": "p171314",
                        "teamRef": "t43",
                        "x": 9,
                        "y": 2
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7dd",
                        "apiPosition": "GK",
                        "displayPosition": 1,
                        "fieldPosition": "GK",
                        "firstName": "Nathan",
                        "isLeader": false,
                        "lastName": "Baxter",
                        "opponentTeamName": "Manchester City",
                        "opponentTeamRef": "t43",
                        "opponentTeamShortCode": "MCI",
                        "playerPrice": 3.5,
                        "playerRef": "p200415",
                        "teamRef": "t8",
                        "x": 11,
                        "y": 4
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "knownName": null,
                        "starLevel": 2,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7de",
                        "apiPosition": "CF",
                        "displayPosition": 11,
                        "fieldPosition": "CF",
                        "firstName": "Olivier",
                        "isLeader": false,
                        "lastName": "Giroud",
                        "opponentTeamName": "Manchester City",
                        "opponentTeamRef": "t43",
                        "opponentTeamShortCode": "MCI",
                        "playerPrice": 6.5,
                        "playerRef": "p44346",
                        "teamRef": "t8",
                        "x": 0,
                        "y": 4
                    },
                    {
                        "urls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t43.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t43.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t43.png"
                        },
                        "opponentTeamUrls": {
                            "gkJerseyUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/gk_jersey/t8.png",
                            "kitUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/jersey/t8.png",
                            "logoUrl": "https://s3.amazonaws.com/realfantasyteams/uploads/team_logo/t8.png"
                        },
                        "knownName": null,
                        "starLevel": 0,
                        "totalPoint": 0,
                        "_id": "60b087ec4f44b6710db8e7df",
                        "apiPosition": "CM",
                        "displayPosition": 6,
                        "fieldPosition": "CM",
                        "firstName": "Tommy",
                        "isLeader": false,
                        "lastName": "Doyle",
                        "opponentTeamName": "Chelsea",
                        "opponentTeamRef": "t8",
                        "opponentTeamShortCode": "CHE",
                        "playerPrice": 3.5,
                        "playerRef": "p220394",
                        "teamRef": "t43",
                        "x": 6,
                        "y": 5
                    }
                ],
                "createdAt": "2021-05-28T06:04:10.082Z",
                "updatedAt": "2021-05-28T06:04:29.224Z",
                "customId": "2020-5-g2197699",
                "teamConfirmingTime": "2021-05-28T06:04:29.224Z",
                "id": "60b087da4f44b6710db8e7be",
                "userRftc": 20
            }
        ]
    }
}
  *
  *
  */
//   getUserTeamContestById: asyncHandler(async (req, res) => {
//     const { userTeamContestId } = req.query
//     const { user } = req
//     let userTeamContest = await DffUserTeamsContestRepo.findById(userTeamContestId)
//     // if (!userTeamContest) {
//     //   userTeamContest = await DffUserTeamContestHistoryRepo.findById(userTeamContestId)
//     // }
//     // // TODO Multilingual support
//     // if (!userTeamContest) throw ConflictError("user team contest notfound")
//     const team = { ...userTeamContest, userRftc: user.rtf_credit }
//     // TODO Multilingual support
//     return SuccessResponse(res, "user Team Contest Fetched", team)
//   }),
  getUserTeamContests: async(req, res) => {
      try{
    // const { userTeamContestId } = req.query
    // const { user } = req
    // let userTeamContest = await DffUserTeamsContestRepo.findById(userTeamContestId)
    // if (!userTeamContest) {
    //   userTeamContest = await DffUserTeamContestHistoryRepo.findById(userTeamContestId)
    // }
    // // TODO Multilingual support
    // if (!userTeamContest) throw ConflictError("user team contest notfound")
    const team = await DffUserTeamsContestRepo.find()
    const tempTeam = [{
        _id: "dhhs23nce4343cjdhd345",
        name: "teamA",
        performance: "23ser"
    }]
    console.log("team", tempTeam)
    return tempTeam
    // TODO Multilingual support
    // return SuccessResponse(res, "user Team Contests list", team)
      }catch(err){
          console.log(err)
      }

  }
}
