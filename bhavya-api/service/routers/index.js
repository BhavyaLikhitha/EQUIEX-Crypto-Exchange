import personRouter from "./person-router.js";

const initializeRoutes = (app) => {
    app.use('/persons', personRouter);
};

export default initializeRoutes;
