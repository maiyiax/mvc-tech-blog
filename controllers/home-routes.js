// This file will contain all of the user-facing routes, such as the homepage and login page

const sequelize = require('../config/connection');
const { User } = require('../models');
const router = require('express').Router();

// root route
router.get('/', (req, res) => {
    res.render('hello');
})

module.exports = router;