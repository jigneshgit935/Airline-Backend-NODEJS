const express = require("express");

const { ServerConfig } = require("./config");

const apiRoutes = require("./routes/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log("Successfully started server on port " + ServerConfig.PORT);
  // Logger.info("Successfully started the server", {});
});
