const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");
const usersRoute = require("./Routes/api/users");
const AuthRoute = require("./Routes/api/auth");
const postRoute = require("./Routes/api/post");
const profileRoute = require("./Routes/api/profile");

//Connect to database
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/users", usersRoute);
app.use("/api/post", postRoute);
app.use("/api/profile", profileRoute);
app.use("/api/auth", AuthRoute);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(PORT, (req, res) => {
  console.log(`Server Started on ${PORT}`);
});
