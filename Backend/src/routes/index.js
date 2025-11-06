import { Router } from "express";

import { userRouter } from "./userRoutes.js";
import { authRouter } from "./authRoutes.js";
import { medicationRouter } from "./medicationRoutes.js";

const apiRouter = Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/med", medicationRouter);

export { apiRouter };

