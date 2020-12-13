// This file will contain all of the user-facing routes, such as the homepage and login page

const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const router = require('express').Router();

// root route
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            // add sequelize literal
        ]
    })
})

module.exports = router;