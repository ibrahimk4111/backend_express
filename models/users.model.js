const { v4: uuidv4} = require("uuid")
const users = [
  {
    id: uuidv4(),
    name: "Ibrahim Khalil",
    email: "ibrahimk4@gmail.com",
    age: 25,
  },
  {
    id: uuidv4(),
    name: "Shamim",
    email: "shamim4@gmail.com",
    age: 30,
  },
];

module.exports = users