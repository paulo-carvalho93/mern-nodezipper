import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("APi is running...");
});

app.get('/api/notes', (req, res) => {
  // res.json(notes);
});

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server started on PORT 5000!'));