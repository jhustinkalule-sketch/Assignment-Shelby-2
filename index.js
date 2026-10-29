const express = require("express");
require("dotenv").config({ path: "./.env" });
require("./Database/db"); // Automatically triggers database connection

const userAuthRouter = require("./routes/userAuth.route");
const paymentRouter = require("./routes/paymentIntegrate.route");
const menuRouter = require("./routes/menu.route");
const cartRouter = require("./routes/cart.route");
const searchRouter = require("./routes/serach.route");
const landingRouter = require("./routes/landing.route");

const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
server.use(helmet());
server.use(express.json());

// Register Routes
server.use("/api/auth", userAuthRouter);
server.use("/api/payment", paymentRouter);
server.use("/api/menu", menuRouter);
server.use("/api/cart", cartRouter);
server.use("/api/search", searchRouter);
server.use("/", landingRouter);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});