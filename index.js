require("dotenv").config();
const express = require("express");
const FaucetRoutes = require("./routes/FaucetRoutes");

const app = express();

const PORT = 3333;

app.set("port", PORT);

app.use(express.json());

app.use(FaucetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
