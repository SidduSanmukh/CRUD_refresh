const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const userModel = require("./models/user");
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { name, email, image_url } = req.body;
  try {
    await userModel.create({
      name: name,
      email: email,
      image_url: image_url,
    });
    res.redirect("/read");
  } catch (error) {
    console.log("user Creation error-->", error);
  }
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

app.get("/update/:id", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.id });
  res.render("update", { user });
});

app.post("/update/:id", async (req, res) => {
  let { name, email, image_url } = req.body;
  await userModel.findByIdAndUpdate(
    req.params.id,
    { name, email, image_url },
    { new: true }
  );
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  await userModel.findByIdAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port ", process.env.PORT);
});
