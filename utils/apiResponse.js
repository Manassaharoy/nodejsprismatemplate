function apiResponse(success, data, error = null) {
    if (success) {
      return {
        success: true,
        data: data,
        isError: false,
        error: {
          code: null,
          message: null,
        },
      };
    } else {
      return {
        success: false,
        data: null,
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
  