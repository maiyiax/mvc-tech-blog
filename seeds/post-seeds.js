const { Post } = require('../models');

const postdata = [
    {
        title: 'Lorem Ipsum',
        blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim cras. Interdum posuere lorem ipsum dolor sit amet consectetur. Amet massa vitae tortor condimentum. Euismod nisi porta lorem mollis aliquam ut porttitor. Malesuada fames ac turpis egestas sed tempus urna et pharetra. ',
        user_id: 1
    },
    {
        title: 'consectetur adipiscing elit',
        blog: 'Cursus vitae congue mauris rhoncus aenean vel elit. Nam at lectus urna duis. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Quisque non tellus orci ac auctor augue. Consectetur lorem donec massa sapien. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. ',
        user_id: 2
    },
    {
        title: 'sed do eiusmod tempor',
        blog: 'Ac placerat vestibulum lectus mauris ultrices eros in cursus. Diam ut venenatis tellus in metus vulputate. Risus commodo viverra maecenas accumsan lacus vel. Est ante in nibh mauris cursus mattis molestie. Mattis molestie a iaculis at erat. ',
        user_id: 3
    },
    {
        title: 'incididunt ut labore et dolore',
        blog: 'Vel risus commodo viverra maecenas accumsan lacus vel. Placerat orci nulla pellentesque dignissim enim. Molestie at elementum eu facilisis sed odio morbi. Et tortor at risus viverra. Nibh tellus molestie nunc non blandit massa. ',
        user_id: 4
    },
    {
        title: 'magna aliqua',
        blog: 'Quam elementum pulvinar etiam non quam. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Tellus molestie nunc non blandit massa enim nec. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. ',
        user_id: 5
    },
    {
        title: ' Ut enim ad minim veniam',
        blog: 'Mi quis hendrerit dolor magna eget. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Vitae et leo duis ut diam quam nulla porttitor massa. Elementum nibh tellus molestie nunc non blandit massa enim nec. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Egestas tellus rutrum tellus pellentesque.  ',
        user_id: 6
    },
    {
        title: 'quis nostrud exercitation ullamco',
        blog: 'Non blandit massa enim nec dui. Mattis pellentesque id nibh tortor id aliquet lectus. Orci a scelerisque purus semper eget. Sit amet nulla facilisi morbi tempus. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Tortor aliquam nulla facilisi cras. At varius vel pharetra vel turpis nunc eget. ',
        user_id: 7
    },
    {
        title: 'laboris nisi ut aliquip',
        blog: 'Et tortor at risus viverra adipiscing at. Malesuada pellentesque elit eget gravida cum sociis natoque. Morbi quis commodo odio aenean sed adipiscing diam donec. Feugiat in ante metus dictum at tempor commodo ullamcorper. Morbi enim nunc faucibus a pellentesque sit amet porttitor.',
        user_id: 8
    },
    {
        title: 'ex ea commodo consequat',
        blog: 'Ullamcorper malesuada proin libero nunc consequat interdum varius. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Commodo elit at imperdiet dui accumsan sit amet. Elementum facilisis leo vel fringilla est.',
        user_id: 9
    },
    {
        title: 'Duis aute irure',
        blog: 'Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Et tortor at risus viverra adipiscing at in tellus. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Sed augue lacus viverra vitae congue eu consequat ac felis. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Ullamcorper morbi tincidunt ornare massa eget egestas purus. ',
        user_id: 10
    },
    {
        title: 'dolor in reprehenderit',
        blog: ' Phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Non blandit massa enim nec dui nunc mattis enim ut. Eget mauris pharetra et ultrices neque. Amet risus nullam eget felis eget nunc lobortis mattis. Gravida rutrum quisque non tellus orci ac. Et molestie ac feugiat sed lectus vestibulum. Interdum varius sit amet mattis vulputate. Integer malesuada nunc vel risus commodo viverra.',
        user_id: 2
    },
    {
        title: 'voluptate velit esse cillum',
        blog: 'In metus vulputate eu scelerisque felis imperdiet. Scelerisque in dictum non consectetur a. Dignissim sodales ut eu sem integer vitae justo eget. Sit amet purus gravida quis blandit. Vitae aliquet nec ullamcorper sit amet. Sed viverra ipsum nunc aliquet bibendum enim. ',
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;