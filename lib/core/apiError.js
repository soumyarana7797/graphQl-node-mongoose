const { environment } = require("../../config")

const {
  NotFoundResponse,
  InternalErrorResponse,
  BadRequestResponse,
  ForbiddenResponse,
  AuthFailureResponse,
  AccessTokenErrorResponse,
  ConflictResponse
} = require("./apiResponse")
//----------------------------------------
//                      P R O T E C T E D
//----------------------------------------
const ErrorType = {
  BAD_TOKEN: "BadTokenError",
  CONFLICT: "ConflictError",
  TOKEN_EXPIRED: "TokenExpiredError",
  UNAUTHORIZED: "AuthFailureError",
  ACCESS_TOKEN: "AccessTokenError",
  INTERNAL: "InternalError",
  NOT_FOUND: "NotFoundError",
  NO_ENTRY: "NoEntryError",
  NO_DATA: "NoDataError",
  BAD_REQUEST: "BadRequestError",
  FORBIDDEN: "ForbiddenError"
}

// _wrap: will wrap the err object with custom type & message
const _wrap = (type, message = "caught error") => {
  const errorMessage = message
  const error = Error(errorMessage)
  error.type = type
  return error
}

const _case = (err, res) => {
  switch (err.type) {
    case ErrorType.BAD_TOKEN:
    case ErrorType.TOKEN_EXPIRED:
    case ErrorType.UNAUTHORIZED:
      return AuthFailureResponse(res, err.message)
    case ErrorType.ACCESS_TOKEN:
      return AccessTokenErrorResponse(res, err.message)
    case ErrorType.INTERNAL:
      return InternalErrorResponse(res, err.message)
    case ErrorType.NOT_FOUND:
    case ErrorType.NO_ENTRY:
    case ErrorType.NO_DATA:
      return NotFoundResponse(res, err.message)
    case ErrorType.BAD_REQUEST:
      return BadRequestResponse(res, err.message)
    case ErrorType.CONFLICT:
      return ConflictResponse(res, err.message)
    case ErrorType.FORBIDDEN:
      return ForbiddenResponse(res, err.message)

    default: {
      let { message } = err
      // Do not send failure message in production as it may send sensitive data
      if (environment !== "development") message = "Something wrong happened."
      return InternalErrorResponse(res, message)
    }
  }
}

module.exports = {
  ApiError: {
    // handle: A dedicated transporter of Error response
    handle: _case,
    // hasSupport: a array list of handled error, use to check the incoming error is intentionally triggered or not
    hasSupport: it => !!Object.values(ErrorType).includes(it)
  },

  ForbiddenError: (message, meta) => _wrap(ErrorType.FORBIDDEN, message || "Permission denied", meta),

  NotFoundError: message => _wrap(ErrorType.NOT_FOUND, message || "Not Found"),

  InternalError: (message, err, meta) => _wrap(ErrorType.INTERNAL, message || "Internal Error", err, meta),

  AuthFailureError: (message, meta) => _wrap(ErrorType.UNAUTHORIZED, message || "Invalid Credentials", meta),

  BadRequestError: (message, meta) => _wrap(ErrorType.BAD_REQUEST, message || "Bad Request", meta),

  ConflictError: (message, meta) => _wrap(ErrorType.CONFLICT, message || "Resource Conflicted", meta),

  NoEntryError: (message, meta) => _wrap(ErrorType.NO_ENTRY, message || "Entry don't exists", meta),

  BadTokenError: (message, meta) => _wrap(ErrorType.BAD_TOKEN, message || "Token is not valid", meta),

  TokenExpiredError: (message, meta) => _wrap(ErrorType.TOKEN_EXPIRED, message || "Token is expired", meta),

  NoDataError: (message, meta) => _wrap(ErrorType.NO_DATA, message || "No data available", meta),

  AccessTokenError: (message, meta) => _wrap(ErrorType.ACCESS_TOKEN, message || "Invalid access token", meta),
}
