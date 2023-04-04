function apiResponse(success, successCode, error = null) {
    if (success) {
      return {
        success: true,
        successCode: successCode,
        isError: false,
        error: {
          code: null,
          message: null,
        },
      };
    } else {
      return {
        success: false,
        successCode: null,
        isError: true,
        error: {
          code: error.code || null,
          message: error.message || null,
        },
      };
    }
  }
  
  module.exports = {
    apiResponse,
  };
  