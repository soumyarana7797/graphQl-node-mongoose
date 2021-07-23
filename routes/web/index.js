const express = require("express")
const asyncHandler = require("../../lib/core/asyncHandler")
const { SuccessMsgResponse } = require("../../lib/core/apiResponse")
const router = express.Router()

router.get("/", asyncHandler(async (req, res) => SuccessMsgResponse(res, "service is running")))

module.exports = router
