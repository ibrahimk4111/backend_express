const express = require('express');
const { getUsers, getUsersForm, createUsers, updateUser, deleteUser } = require('../controller/users.controller');
const router = express.Router()


// get users router
router.get("/", getUsersForm);

router.get("/users", getUsers);

// post or create users router
router.post("/users", createUsers);

// update users router
router.put("/users/:id", updateUser)

// delete user
router.delete("/users/:id", deleteUser)

module.exports = router