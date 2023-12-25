const express = require('express');
const { getUsers, getUsersForm, createUsers, updateUser, deleteUser, getEditForm } = require('../controller/users.controller');
const router = express.Router()


// get users form router
router.get("/", getUsersForm);

// get users edit router
router.get("/edit/:id", getEditForm);

// get users router
router.get("/users", getUsers);

// post or create users router
router.post("/users", createUsers);

// update users router
router.put("/users/:id", updateUser)

// delete user
router.delete("/users/:id", deleteUser)

module.exports = router