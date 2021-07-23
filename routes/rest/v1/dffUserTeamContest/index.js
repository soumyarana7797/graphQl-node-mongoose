// import
const express = require("express")
// const { appOauth } = require("../../../../lib/core/auth/appOauth")
// const updateUserInReq = require("../../../../middleware/updateUserInReq")
// const { validator } = require("../../../../lib/helper/validation")
const { createUserTeamContest } = require("./create")
// const { updateDffUserTeam } = require("./update")
// const { getUserTeamContestById } = require("./fetch")
// const {
//   createUserTeamContestValidator
// } = require("./schema")
// const { ownCustomerDetails, customerById, customerListWithFilter } = require("./fetch")


//----------------------------------------------------
//               S C H E M A     M I D D L E W A R E
//----------------------------------------------------
// const hasCreateUserTeamContestSchema = validator(createUserTeamContestValidator)
// const hasUpdateTeamSchema = validator(updateTeamValidator)
// const hasTeamIdSchema = validator(teamIdValidator, ValidationSource.PARAM)
// const hasTeamIdInQuerySchema = validator(teamIdValidator, ValidationSource.QUERY)

//----------------------------------------------------
//                                      R O U T E S
//----------------------------------------------------
const router = express.Router()

/*-------------------------------------------------------------------------*/
// Authenticated
// router.use(appOauth.oauth.authorise(), updateUserInReq)
/*-------------------------------------------------------------------------*/

router.post("/", createUserTeamContest)
// router.get("/:id", getUserTeamContestById)


// const auth = router
module.exports = router
