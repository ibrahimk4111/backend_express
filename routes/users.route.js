const express = require('express');
const { getUsers, postUsers, getUsersForm } = require('../controller/users.controller');
const router = express.Router()


// get users router
router.get("/", getUsersForm);

router.get("/users", getUsers);

// post users router
router.post("/users", postUsers);


module.exports = router