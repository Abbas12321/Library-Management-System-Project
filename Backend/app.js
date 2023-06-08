const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(express.json());
mongoose.connect(
  'mongodb://0.0.0.0:27017/library',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected");
  }
);

const userauthRoute = require("./routes/auth.route");
const adminauthRoute = require("./routes/auth.route");

const userRoute = require("./routes/user.route");
const adminRoute = require("./routes/admin.route");
const librarianRoute = require("./routes/librarian.route");
const bookRoute = require("./routes/book.route");
const issueBookRoute = require("./routes/issuebook.route");

app.use(cors({ credentials: true, origin: "http://localhost:4200" }));
app.use("/api/usersauth/", userauthRoute);
app.use("/api/adminsauth/", adminauthRoute);
app.use("/api/users/", userRoute);
app.use("/api/admins/", adminRoute);
app.use("/api/books/", bookRoute);
app.use("/api/issuebooks/", issueBookRoute);
app.use("/api/librarians/", librarianRoute);


app.get("/", (req, res) => {
  res.send("library management system");
});
const port = process.env.PORT || 3000
app.listen(port, () => console.log("Listening to port no 3000"));
