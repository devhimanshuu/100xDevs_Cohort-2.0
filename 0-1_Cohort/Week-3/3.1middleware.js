const express = require("express");

const fs = require("fs");
const users = require("ur data");
const app = express();
const PORT = 8000;

//middleware is here
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("hello from middleare-1");
  return res.json({ msg: "hello from middleware-1" });
  next();
});

//routers
app.get("/users", (req, res) => {
  const html = `<ul>
            ${users.map((users) => `<li>${users.first_name}</li>`).json}
    </ul>`;
});
app.listen(8000);
