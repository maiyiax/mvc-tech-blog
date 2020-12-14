const { Comment } = require('../models');

const commentdata =  [
    {
        comment_text: 'Platea dictumst quisque sagittis purus',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Tellus at urna condimentum mattis pellentesque id nibh tortor',
        user_id: 4,
        post_id: 2
    },
    {
        comment_text: 'Sapien faucibus et molestie ac feugiat sed',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'Quis imperdiet massa tincidunt nunc',
        user_id: 8,
        post_id: 4
    },
    {
        comment_text: 'Odio tempor orci dapibus ultrices in iaculis nunc',
        user_id: 9,
        post_id: 5
    },
    {
        comment_text: 'Tristique senectus et netus et. Dolor purus non enim praesent',
        user_id: 2,
        post_id: 6
    },
    {
        comment_text: 'Blandit cursus risus at ultrices mi tempus imperdiet',
        user_id: 10,
        post_id: 7
    },
    {
        comment_text: 'Aliquam sem et tortor consequat id porta nibh venenatis',
        user_id: 5,
        post_id: 8
    },
    {
        comment_text: 'Tempus imperdiet nulla malesuada pellentesque',
        user_id: 6,
        post_id: 9
    },
    {
        comment_text: 'Enim praesent elementum facilisis leo vel fringilla est ullamcorper',
        user_id: 7,
        post_id: 10
    },
    {
        comment_text: 'Viverra maecenas accumsan lacus vel facilisis volutpat',
        user_id: 8,
        post_id: 11
    },
    {
        comment_text: 'Dignissim convallis aenean et tortor at risus',
        user_id: 1,
        post_id: 12
    },
    {
        comment_text: 'Ut venenatis tellus in metus',
        user_id: 9,
        post_id: 4
    },
    {
        comment_text: 'Cursus in hac habitasse platea',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Etiam erat velit scelerisque in dictum non consectetur',
        user_id: 8,
        post_id: 5
    },
    {
        comment_text: 'Odio ut sem nulla pharetra diam sit amet nisl',
        user_id: 7,
        post_id: 6
    },
    {
        comment_text: 'Cursus risus at ultrices mi tempus',
        user_id: 4,
        post_id: 7
    },
    {
        comment_text: 'Neque gravida in fermentum et sollicitudin ac',
        user_id: 1,
        post_id: 8
    },
    {
        comment_text: 'Et malesuada fames ac turpis egestas sed tempus',
        user_id: 9,
        post_id: 9
    },
    {
        comment_text: 'Etiam non quam lacus suspendisse faucibus',
        user_id: 10,
        post_id: 11
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;