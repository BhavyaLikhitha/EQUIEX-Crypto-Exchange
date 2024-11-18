export const setSuccess = (data, response) => {
    response.status(200).json(data);
};

export const setError = (response, error) => {
    if (response && response.status) {
      return response.status(500).json({
        message: "Error adding coin",
        error: error,
      });
    } else {
      console.error("Invalid response object", response);
    }
  };
