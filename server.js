const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// initialize express
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// const routes
const lipaNaMpesaRoutes = require("./routes/route.lipanampesa.js");
app.use("/api", lipaNaMpesaRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
