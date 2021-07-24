
const fs = require("fs")
const dotenv = require("dotenv")
// dotenv.config({ silent: process.env.NODE_ENV === 'production' });
dotenv.config()

const config = {}

//-----------------------------------------------------
//                                            C O R E
//-----------------------------------------------------
config.projectName = process.env.PROJECT_NAME || "Sankar_skeleton"
config.environment = process.env.NODE_ENV || "development"
config.port = process.env.PORT || "3005"

config.secret = process.env.SECRET || "nothing can be secret"
// config.keys = {
//   private: fs.readFileSync("./keys/private.pem"),
//   public: fs.readFileSync("./keys/public.pem")
// }
config.saltRound = Number(process.env.SALT_ROUNDS) || 10

//-----------------------------------------------------
//                                          T O K E N
//-----------------------------------------------------

config.tokenInfo = {
  accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_DAYS, 10),
  // eslint-disable-next-line max-len
  refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_DAYS, 10),
  issuer: process.env.TOKEN_ISSUER,
}

//-----------------------------------------------------
//                           A L L    D A T A B A S E
//-----------------------------------------------------

config.mongoCred = {
  name: process.env.MONGO_DB_NAME,
  connectionUri: process.env.MONGODB_CONNECTION_STRING
}
config.redisCred = {
  // name: process.env.REDIS_DB_NAME,
  // in redis db name is 0 to 15 integer value
  connectionUri: process.env.REDIS_CONNECTION_STRING
}

//-----------------------------------------------------
//                                              U R L
//-----------------------------------------------------
config.corsUrl = process.env.CORS_URL || "*"
config.siteUrl = process.env.SITE_URL || "http://localhost:3000"
config.frontEndLogin = process.env.FRONTEND_LOGIN_URL || "http://localhost:3000"
config.signupInvitationBase = process.env.INVITATION_SIGNUP_URL || "http://localhost:3000"
config.notificationUrl = process.env.NOTIFICATION_URL || "http://localhost:3002/noti/sendToTopic"

//-----------------------------------------------------
//                                  S M T P    M A I L
//-----------------------------------------------------
config.smtp = {
  sender: process.env.SMTP_FROM_ADDRESS,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_AUTH_USER,
    pass: process.env.SMTP_AUTH_PASSWORD
  }
}

config.logDirectory = process.env.LOG_DIR
config.logPersistentDayCount = process.env.LOGGER_FILES_PERSISTENT_DAY_COUNT
// eslint-disable-next-line max-len
config.traceStackForAllError = Number(process.env.TRACE_STACK_FOR_ALL_TYPE_OF_ERROR)
// eslint-disable-next-line max-len
config.fileStoreMaxCount = Number(process.env.STORE_MAXIMUM_FILE_COUNT_OF_EACH_FEED_TYPE)
config.storeXmlFeedFile = Number(process.env.STORE_XML_FEED_FILE)
// eslint-disable-next-line max-len
config.storeXmlConvertedJsonFeedFile = Number(process.env.STORE_XML_CONVERTED_JSON_FEED_FILE)

config.transferCloseTime = Number(process.env.TEAM_EDIT_CLOSED_BEFORE || 20)
config.defaultTeamBudget = Number(process.env.SEASON_BUDGET)

//-------------------------------------------------------------
//                                                  S L A C K
//-------------------------------------------------------------

config.slackToken = process.env.SLACK_BOT_AUTH_TOKEN
config.slackChannel = process.env.SLACK_CRON_BOT_CHANNEL
config.slackBaseUri = process.env.SLACK_BASE_URI
config.slackFilePath = process.env.SLACK_BASE_FILE_PATH

//-------------------------------------------------------------
//                                               A G E N D A
//-------------------------------------------------------------

config.masterSchedulerIs = process.env.SCHEDULER_MASTER_STATE || "OFF"
config.cleaningSchedulerIs = process.env.SCHEDULER_CLEANER_STATE || "OFF"
config.cleaningSchedulerTime = process.env.SCHEDULER_TIME_FOR_CLEANER || 12

//----------------------------------------------------------------------
//                                               S I M U L A T O R
//----------------------------------------------------------------------

config.gameSimulatorIs = process.env.SIMULATOR_MODE || "OFF"
config.gameSimulatorFeedPath = process.env.SIMULATOR_FEED_SEND_AT || `http://localhost:${config.port}/dffservice/v1/feed`

//----------------------------------------------------------------------
//                                               B A S E  U R L S
//----------------------------------------------------------------------
config.teamBaseUrl = process.env.TEAM_URL
config.kitUrl = process.env.KIT_URL
config.gkJerseyUrl = process.env.GK_JERSEY_URL
config.leagueBaseUrl = process.env.LEAGUE_URL || "https://s3.amazonaws.com/realfantasyteams/uploads/league/"


module.exports = config
