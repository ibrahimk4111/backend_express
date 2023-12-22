const { v4: uuidv4 } = require("uuid");
const path = require("path");
const users = require("../models/users.model");

// get users form
exports.getUsersForm = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

// get users
exports.getUsers = (req, res) => {
  res.status(200).json({users});
};

// post users or create new user
exports.createUsers = (req, res) => {
  // getting value from frontend
  const name = req.body.name;
  const email = req.body.email;
  const age = Number(req.body.age);

  // create json using datas and push them into users array
  const user = {
    id: uuidv4(),
    name,
    email,
    age,
  };
  users.push(user);
  res.status(201).json({users});
};

// update user's data
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  const age = Number(req.body.age);
  users
    .filter((user) => user.id === userId)
    .map((filteredUser) => {
      filteredUser.name = name;
      filteredUser.email = email;
      filteredUser.age = age;
    });
  res.status(200).json({users});
};

