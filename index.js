import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user-router.js";
import multer from "multer";
import { nanoid } from "nanoid";
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());

const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://binderiya:Binderiya12.mongo@cluster0.ae6mc34.mongodb.net/green";

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.error("Could not connect to MongoD"));

app.get("/", (req, res) => {
  res.send("<h1>Hello MongoDB from NodesJS</h1>");
});

app.post("/", (req, res) => {
  res.send("<h1>Hello MongoDB from NodesJS</h1>");
});

// app.post("/files", upload.single("image"), function (req, res) {
//   res.json(req.file);
// });
app.post("/files", upload.array("image", 12), function (req, res) {
  res.json(req.files);
  console.log("files", req.files);
});

app.use("/static", express.static("uploads"));

app.use("/users", userRoutes);
app.listen(8080, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
