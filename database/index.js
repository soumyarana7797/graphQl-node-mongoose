// import config
const { mongoCred, redisCred } = require("../config.js")

// pull all database initiative functions
const { mongo } = require("./mongoose")
// const { redis } = require("./redis")

// Trigger and initiate the databases
mongo(mongoCred)
// redis(redisCred)