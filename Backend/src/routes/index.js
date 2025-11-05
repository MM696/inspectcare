import { Router } from "express";

import { userRouter } from "./userRoutes.js";
import { authRouter } from "./authRoutes.js";

const apiRouter = Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/auth", authRouter);

export { apiRouter };

