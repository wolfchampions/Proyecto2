const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
});

app.use("/api", require("./routes/routes"));
app.use("/api/juegos", require("./routes/VideoJuegos"));
// app.get("/", (req, res) => {
//   res.send("Hola ahora");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("El servidor esta funcionando en el puerto %s", PORT);
});
