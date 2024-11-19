// Setting Sucess Reponse with data
export const successResponse = (res, data, message = "Success") => {
    res.status(200).json({ success: true, message, data });
};
// Setting Error response with data
export const errorResponse = (res, error, statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        message: error.message || "Internal Server Error",
        error,
    });
};