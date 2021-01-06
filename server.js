// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

// Require express session module
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'This Secret',
    cookie: { maxage: 600000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Set up te express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false })
    .then(() => {
        app.listen(PORT, () =>
            console.log(`App listening on PORT ${PORT}!`));
    });