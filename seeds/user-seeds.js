const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'jdoe',
        email: 'jdoe@email.com',
        password: 'fakepw123'
    },
    {
        username: 'bxue',
        email: 'bxue@email.com',
        password: 'blank123'
    },
    {
        username: 'llingzi',
        email: 'llingzi@email.com',
        password: 'fillin123'
    },
    {
        username: 'ecullen',
        email: 'ecullen@email.com',
        password: 'nopw123'
    },
    {
        username: 'twilson',
        email: 'twilson@email.com',
        password: 'hello123'
    },
    {
        username: 'mbyul',
        email: 'mbyul@email.com',
        password: 'make123'
    },
    {
        username: 'blee',
        email: 'blee@email.com',
        password: 'pw123'
    },
    {
        username: 'jblock',
        email: 'jblock@email.com',
        password: 'newpw123'
    },
    {
        username: 'bswan',
        email: 'bswan@email.com',
        password: 'noneed123'
    },
    {
        username: 'jbucco',
        email: 'jbucco@email.com',
        password: 'pwpwpw123'
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;