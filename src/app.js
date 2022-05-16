const path = require("path");
const express = require("express");

const app = express();

const publicDirName = path.join(__dirname, `/../public`);
const viewsPath = path.join(__dirname, "../templates");

// Set up handlebars engine
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicDirName));

app.get("", (req, res) => {
  res.render("index", { title: "Weather App", name: "Srijith" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Srijith" });
});

app.get("/help", (req, res) => {
  res.render("help", { help: "This is the help message set up dynamically" });
});

app.get("/weather", (req, res) => {
  res.send({ location: `hell`, forecast: `Always hot` });
});

app.listen(3000, () => {
  console.log(`Server is up on port 3000`);
});
