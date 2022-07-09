import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send("APi is running...");
});

app.get('/api/notes', (req, res) => {
  res.json("TODO");
});

app.get('/api/notes/:id', (req, res) => {
  // const note = notes.find((note) => note._id === req.params.id);
  // res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server started on PORT 5000!'));