/* Assignment
you need to create 4 routers (4 things that the hospital can do)
1.GET - User can check how many kidneys they have and their health
2.POST - user can add a new kidney
3.PUT - user can replace a kidney , make it healthy
4.DELETE - user can remove a kidney 
*/
const express = require("express");
const app = express();
var users = [
  {
    name: "John",
    Kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.use(express.json());
app.get("/", function (req, res) {
  const johnkidneys = users[0].Kidneys;
  const numberOfKidneys = johnkidneys.length;
  let numberOfHelathyKidneys = 0;
  for (let i = 0; i < johnkidneys.length; i++) {
    if (johnkidneys[i].healthy) {
      numberOfHelathyKidneys = numberOfHelathyKidneys + 1;
    }
  }
  const numberOfUnHelathyKidneys = numberOfKidneys - numberOfHelathyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHelathyKidneys,
    numberOfUnHelathyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].Kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i <= users[0].Kidneys.length; i++) {
    users[0].Kidneys.healthy = true;
  }
  res.json({});
});

//removing all the unhealthy kidneys
app.delete("/", function (req, res) {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "done",
  });
});

app.listen(3005);
