const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'jdoe',
        password: 'fakepw123'
    },
    {
        username: 'bxue',
        password: 'blank123'
    },
    {
        username: 'llingzi',
        password: 'fillin123'
    },
    {
        username: 'ecullen',
        password: 'nopw123'
    },
    {
        username: 'twilson',
        password: 'hello123'
    },
    {
        username: 'mbyul',
        password: 'make123'
    },
    {
        username: 'blee',
        password: 'pw123'
    },
    {
        username: 'jblock',
        password: 'newpw123'
    },
    {
        username: 'bswan',
        password: 'noneed123'
    },
    {
        username: 'jbucco',
        password: 'pwpwpw123'
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;