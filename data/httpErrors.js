const HttpErrors = {
  400: {
    code: 400,
    message: "Bad Request",
  },
  401: {
    code: 401,
    message: "Unauthorized",
  },
  403: {
    code: 403,
    message: "Forbidden",
  },
  404: {
    code: 404,
    message: "Not Found",
  },
  405: {
    code: 405,
    message: "Method Not Allowed",
  },
  500: {
    code: 500,
    message: "Internal Server Error",
  },
  503: {
    code: 503,
    message: "Service Unavailable",
  }
};

module.exports = HttpErrors;
