const mongoose = require("mongoose")
// const { ConflictError } = require("../../../lib/core/apiError")
// const logger = require("../../../lib/core/logger")
const { model, Schema } = mongoose
const DOCUMENT_NAME = "DffUserTeamContest"
// const contestModel = require("./dffContest")
// const dffLeagueSessionGameModel = require("./dffLeagueSeasonGames")

const COLLECTION_NAME = "dff_user_team_contests"

const schema = new Schema({
  _dffUserTeam: {
    type: Schema.Types.ObjectId,
    ref: "dffUserTeam"
  },
  season: {
    type: Number
  },
  leagueId: {
    type: Number
  },
  gameId: {
    type: String,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  teamName: {
    type: String,
  },
  totalTeamPoint: {
    type: Number,
    default: 0
  },
  // isActive == Team Confirm
  isActive: {
    type: Boolean,
    default: true
  },
  // teamPlayerTotalBudget: {
  //   type: Number
  // },
  // chargedRftc: {
  //   type: Number
  // },
  _dffSeason: {
    type: Schema.Types.ObjectId,
    ref: "DffSeasonLeague"
  },
  _dffLeagueSeasonGame: {
    type: Schema.Types.ObjectId,
    ref: "DffLeagueSeasonGame"
  },
  dffSeasonGameStatus: {
    type: String,
    enum: [
      "pre-match",
      "to-be-decided",
      "ended",
      "in-progress",
      "rescheduled",
      "cancelled"
    ],
    default: "pre-match"
  },
  _dffContest: {
    type: Schema.Types.ObjectId,
    ref: "DffContest"
  },
  instanceId: {
    type: String,
  },
  customId: {
    type: String
  },
  _createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  _updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, { versionKey: false, timestamps: true })

schema.set("toJSON", { virtuals: true })
schema.set("toObject", { virtuals: true })

module.exports = model(DOCUMENT_NAME, schema, COLLECTION_NAME)
