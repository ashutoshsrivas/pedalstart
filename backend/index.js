const express = require("express");
const app = express();
const mysql = require("mysql2");
taskRoute = require("./routes/tasks");
colabRoute = require("./routes/colab");
commentsRoute = require("./routes/comments");

const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/task", taskRoute);
app.use("/api/colab", colabRoute);
app.use("/api/comments", commentsRoute);

app.listen(8080, () => {
  console.log("Server running at port 8080\n");
});
