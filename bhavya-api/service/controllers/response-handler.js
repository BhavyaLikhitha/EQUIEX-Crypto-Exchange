export const setSucess = (data, response) => {
    response.status(200).json(data);
};

export const setError = (error, response) => {
    response.status(500).json({
        code: "ServerError",
        message: error.message,
    });
};
