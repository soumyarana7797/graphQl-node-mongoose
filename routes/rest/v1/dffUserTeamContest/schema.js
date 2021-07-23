const Joi = require("joi")
const { JoiObjectId } = require("../../../../lib/helper/validation")


module.exports = {
  teamIdValidator: Joi.object().keys({
    userTeamId: JoiObjectId().required()
  }),
  createUserTeamContestValidator: Joi.object().keys({
    userTeamId: JoiObjectId().required(),
    contestId: JoiObjectId().required()
  })


}
