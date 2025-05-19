import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const CosmeticSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
});
const Cosmetics = mongoose.model("Cosmetics", CosmeticSchema);
app.get("/", async (req, res) => {
  const cosmetics = await Cosmetics.find();
  res.send(cosmetics);
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const cosmetic = await Cosmetics.findById(id);
  res.send(cosmetic);
});
app.post("/", async (req, res) => {
  const { body } = req;
  const cosmetic = await Cosmetics.create(body);
  res.send("Created!");
});
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const cosmetic = await Cosmetics.findByIdAndUpdate(id,body);
  res.send("Updated!");
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const cosmetic = await Cosmetics.findByIdAndDelete(id)
  res.send("Deleted!");
});
mongoose
  .connect("mongodb+srv://aynurahbf206:aynur206@cluster0.z1kpoya.mongodb.net/")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Not connected"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
