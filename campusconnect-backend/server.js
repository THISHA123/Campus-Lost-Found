const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/claims", require("./routes/claimRoutes"));
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
  app.listen(process.env.PORT || 5000, () =>
    console.log("Server running")
  );
})
.catch(err => console.log(err));