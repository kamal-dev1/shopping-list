// Dependencies
const express = require("express");
const cors = require("cors");

// Routes
const taskRoutes = require("./routes/task.routes");

// Global config
const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
