import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectToDb } from "./models/indexConnect.js";
import { userRouter } from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// * User Routes

app.use("/api/v1/users", userRouter);

connectToDb()
  .then(() => {
    const PORT = 3111;
    app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
