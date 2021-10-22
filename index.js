const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
const users = [
  {
    id: "0",
    name: "jahid",
    email: "jahid78784@gmail.com",
    passsion: "programmer",
  },
  {
    id: "1",
    name: "supti",
    email: "samiyajahansupti@gmail.com",
    passsion: "speaker",
  },
  {
    id: "2",
    name: "jani na",
    email: "janina@gmail.com",
    passsion: "mone nai",
  },
  {
    id: "3",
    name: "jani koitam na",
    email: "koitamna@gmail.com",
    passsion: "eita o jani koitam na",
  },
];
app.get("/users", (req, res) => {
  const searchResult = req.query.search;
  console.log(searchResult);
  if (searchResult) {
    const user = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(searchResult)
    );
    res.send(user);
  } else {
    res.send(users);
  }
});
app.get("/users/:id", (req, res) => {
  const reqId = req.params.id;
  const user = users.find((user) => reqId == user.id);
  res.send(user);
});
/* app.get("/users?search", (req, res) => {
  const querrySearch = req.query.search;
  console.log(querrySearch);
}); */
app.post("/users", (req, res) => {
  console.log("post hitted ", req.body);
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  //   res.send(JSON.stringify(newUser));
  res.json(newUser);
});
app.listen(port, () => {
  console.log("listening from port", port);
});
