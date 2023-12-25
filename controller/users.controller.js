const { v4: uuidv4 } = require("uuid");
const path = require("path");
const users = require("../models/users.model");

// get users form
exports.getUsersForm = (req, res) => {
  res.sendFile(path.join(__dirname, "/../views/index.html"));
};

// get users edit form
exports.getEditForm = (req, res) => {
  const userId = req.params.id
  const foundedUserId = users.filter(user => user.id === userId)
  // res.status(200).json(foundedUserId)
  res.sendFile(path.join(__dirname, "/../views/editUser.html"));
};

// get users
exports.getUsers = (req, res) => {
  res.status(200).json(users);
};


// post users or create new user
exports.createUsers = (req, res) => {
  const user = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    age: Number(req.body.age),
  };
  users.push(user);
  // res.status(201).json(users);
  res.sendFile(path.join(__dirname, "/../views/index.html"));
  res.status(301).redirect("/");
};

// update user's data
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  users
    .filter((user) => user.id === userId)
    .map((filteredUser) => {
      filteredUser.name = req.body.name;
      filteredUser.email = req.body.email;
      filteredUser.age = Number(req.body.age);
    });
  res.status(200).json(users);
};

// delete user
exports.deleteUser = (req, res) => {
  try {
    const userId = req.params.id;
    const founddUser = users.find((user) => user.id === userId);
    const indexOfFoundedUser = users.indexOf(founddUser);
    users.splice(indexOfFoundedUser, 1);
    // res.status(200).json(users);
    res.sendFile(path.join(__dirname + "/../views/index.html"));
    res.status(301).redirect("/");
  } catch (error) {
    res.status(500).json("server error");
  }
};
