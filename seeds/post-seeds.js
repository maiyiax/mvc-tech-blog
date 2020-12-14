const { Post } = require('../models');

const postdata = [
    {
        title: 'Lorem Ipsum',
        post_url: 'https://www.lipsum.com',
        user_id: 1
    },
    {
        title: 'consectetur adipiscing elit',
        post_url: 'https://loremipsum.io',
        user_id: 2
    },
    {
        title: 'sed do eiusmod tempor',
        post_url: 'https://sequelize.org',
        user_id: 3
    },
    {
        title: 'incididunt ut labore et dolore',
        post_url: 'https://www.google.com/',
        user_id: 4
    },
    {
        title: 'magna aliqua',
        post_url: 'https://www.yahoo.com/?guccounter=1',
        user_id: 5
    },
    {
        title: ' Ut enim ad minim veniam',
        post_url: 'https://www.aol.com/',
        user_id: 6
    },
    {
        title: 'quis nostrud exercitation ullamco',
        post_url: 'https://www.facebook.com/',
        user_id: 7
    },
    {
        title: 'laboris nisi ut aliquip',
        post_url: 'https://www.ask.com/?o=1567',
        user_id: 8
    },
    {
        title: 'ex ea commodo consequat',
        post_url: 'https://www.youtube.com/',
        user_id: 9
    },
    {
        title: 'Duis aute irure',
        post_url: 'https://twitter.com/',
        user_id: 10
    },
    {
        title: 'dolor in reprehenderit',
        post_url: 'https://myspace.com/',
        user_id: 2
    },
    {
        title: 'voluptate velit esse cillum',
        post_url: 'https://www.instagram.com/',
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;