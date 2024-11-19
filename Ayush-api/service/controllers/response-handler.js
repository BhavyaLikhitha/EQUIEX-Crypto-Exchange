export const setSuccess = (data, response) => {
  response.status(200).json({
    status: "success",
    data,
  });
};

export const setError = (error, response, statusCode = 500) => {
  const errorResponse = {
    code: error.code || "ServerError",
    message: error.message || "An unexpected error occurred.",
    details: error.details || [],
  };

  response.status(statusCode).json(errorResponse);
};
