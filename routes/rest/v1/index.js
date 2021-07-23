const express = require("express")
const router = express.Router()
// const reqSetMeta = require("../../../middleware/reqSetMeta")
// const reqSetLanguage = require("../../../middleware/reqSetLanguage")


const dffUserTeamContest = require("./dffUserTeamContest")



// IMPORTANT: multilingual support: seed res.prototype.setMeta() to supply message dynamic dataPart
// router.use(reqSetMeta)
// router.use(reqSetLanguage)
// POINT_BLANK_API: To check several functionality supplied to the architectural engine `core`

router.use("/userTeamContest", dffUserTeamContest)


module.exports = router
