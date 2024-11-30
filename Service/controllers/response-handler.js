// // Function to handle successful responses
// export const setSuccess = (data, response) => {
//   // Set status to 200 (OK) and send the provided data as JSON in the response
//     response.status(200).json(data);
// };
// // Function to handle error responses
// export const setError = (response, error) => {
//   // Check if the response object is valid
//     if (response && response.status) {
//         // Set status to 500 (Internal Server Error) and send a structured error message
//       return response.status(500).json({
//         message: "Error adding coin",
//         error: error,
//       });
//     } else {
//        // If the response object is invalid, log an error for diagnostics
//       console.error("Invalid response object", response);
//     }
//   };

  // Function to handle successful responses
export const setSuccess = (data, response) => {
  // Set status to 200 (OK) and send the provided data as JSON in the response
  response.status(200).json(data);
};

// Function to handle error responses
export const setError = (response, error, statusCode=500) => {
  console.log('Sending error:', error.message, statusCode);
  // Check if the response object is valid
  if (response && response.status) {
    // Determine appropriate error status and message
    const errorMessage = {
      400: "Bad Request",
      401: "Unauthorized",
      403: "Forbidden",
      404: "Not Found",
      409: "Conflict",
    }[statusCode] || "Internal Server Error";

    // Set the response status and send the structured error message
    return response.status(statusCode).json({
      message: errorMessage,
      error: error || "An error occurred",
    });
  } else {
    // If the response object is invalid, log an error for diagnostics
    console.error("Invalid response object", response);
  }
};
