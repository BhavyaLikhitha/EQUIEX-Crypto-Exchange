export const successResponse = (res, data, message = "Success") => {
    res.status(200).json({ success: true, message, data });
};

export const errorResponse = (res, error, statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        message: error.message || "Internal Server Error",
        error,
    });
};