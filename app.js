const express = require('express');
const helmet = require('helmet');
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const path = require("path")
// const apolloServer = require('./initGraphQLServer')
// import { PORT, NODE_ENV } from './config/config';
// import { httpsRedirect, wwwRedirect } from './lib/http-redirect';

// const app = express();

// app.enable('trust proxy');
// app.use(helmet());

// redirects should be ideally setup in reverse proxy like nignx
// if (NODE_ENV === 'production') {
//   app.use('/*', httpsRedirect());

//   app.get('/*', wwwRedirect());

// }



// ----------------------------sankarda---------------------------------


// const logger = require("./lib/core/logger")
// const {
//   masterSchedulerIs, corsUrl,
//   environment, traceStackForAllError
// } = require("./config")

let corsUrl = "*"
let environment = "development"

// require("./database") // initialize database
// const {
//   NotFoundError, ApiError,
//   InternalError, BadRequestError,
//   AuthFailureError
// } = require("./lib/core/apiError")
const apiRouterV1 = require("./routes/rest/v1")
// const webRouterV1 = require("./routes/web")

// important here "__dirname is only defined in scripts. It's not available in REPL"
// const __dirname = path.resolve()
// // logger.debug(__dirname)

// Uncaught Exception Error
// process.on("uncaughtException", (e) => {
//   logger.error(e)
// })

const app = express()

if (environment !== undefined && environment !== "development") {
  app.use(helmet())
}
// Response send Logger Middleware setup, It will just console not saved in logs
// later will modify somehow to track all response time route-wise so can analyse the server api min speed
app.use(morgan("dev"))

// Body Parser setup
app.use(bodyParser.json({ limit: "10mb" }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }))

// Access Control Allow Origin setup
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }))

// GraphQL server setup
// apolloServer.applyMiddleware({ app, path: '/graphql' });

// View Engine setup
// app.set("views", path.join(__dirname, "views"))
// app.set("view engine", "ejs")

// Public Folder setup
app.use(express.static(path.join(__dirname, "public")))
// app.use("/", (req, res, next) => {
//   // logger.debug(req.body)
//   // logger.debug(req.headers)
//   next()
// })
// Routes
// add dffService for micro-service host
app.use("/dffService/v1", apiRouterV1)
// app.use("/dffService/", webRouterV1)

// Send Path not found error
// app.use((req, res, next) => {
//   next(NotFoundError())
// })

// Middleware Error Handler
// log each every error but take the stack if it's an Internal error
// otherwise clear the error stack
// eslint-disable-next-line no-unused-vars, consistent-return
// app.use((err, req, res, next) => {
//   // for safe side extra try-catch block
//   try {
//     // set locals, only providing error in development
//     res.locals.message = err.message
//     res.locals.error = req.app.get("env") === "development" ? err : {}
//     // PATCH: 401, 400, 500, 503 only
//     // TODO: Old authenticated & authorization system mixed up
//     if (err.code && err.name === "OAuth2Error") {
//       switch (err.code) {
//         case 400: return ApiError.handle(BadRequestError(err.error_description), res)
//         case 401: return ApiError.handle(AuthFailureError(err.error_description), res)
//         case 500:
//         case 503:
//         default: return ApiError.handle(err, res)
//       }
//     }

//     // All intentional error handler including Internal Error
//     if (ApiError.hasSupport(err.type)) {
//       if (!traceStackForAllError) {
//         // eslint-disable-next-line no-param-reassign
//         err.stack = "Error: Stack is cleared\n    at app.js:91"
//       }
//       console.error(err)
//     //   logger.error(err)
//       return ApiError.handle(err, res)
//     }

//     // if (environment === "development") {
//     //   logger.error(err)
//     //   return res.status(500).send(err.message)
//     // }

//     // though asyncHandler it can be an error without any type, force an InternalError then
//     console.error(err)

//     // logger.error(err)
//     ApiError.handle(InternalError(err.message), res)
//   } catch (error) {
//     // catch here means something went really wrong, do a special action here
//     // as this try catch is not required here
//     console.error(err)

//     // logger.error(error)
//     ApiError.handle(error, res)
//   }
// })

// Agenda
// if (masterSchedulerIs === "ON") {
//   // eslint-disable-next-line global-require
//   const agenda = require("./lib/agenda")
//   agenda.on("ready", async () => {
//     logger.info("Agenda starting ⏳")
//     await agenda.start()
//     logger.info("Agenda started 🙂")
//     await agenda.cleanup() // async
//   })
//   // eslint-disable-next-line no-inner-declarations
//   async function graceful() {
//     await agenda.stop()
//     logger.info("Agenda stopped 😴")
//     process.exit(0)
//   }

//   process.on("SIGTERM", graceful)
//   process.on("SIGINT", graceful)
//   // agenda.start()
// } else {
//   logger.info("Agenda Stopped from .env & config")
// }

module.exports = app
