// Function to handle successful responses
export const setSuccess = (data, response) => {
  // Set status to 200 (OK) and send the provided data as JSON in the response
    response.status(200).json(data);
};
// Function to handle error responses
export const setError = (response, error) => {
  // Check if the response object is valid
    if (response && response.status) {
        // Set status to 500 (Internal Server Error) and send a structured error message
      return response.status(500).json({
        message: "Error adding coin",
        error: error,
      });
    } else {
       // If the response object is invalid, log an error for diagnostics
      console.error("Invalid response object", response);
    }
  };
