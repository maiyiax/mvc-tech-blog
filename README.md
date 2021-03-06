# mvc-tech-blog

## Purpose

Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developer' posts as well. The app should follow the MVD paradigm in its architectural structure, using Handlebars.js as the templating language, Sequilize as the ORM and the express-session npm package for authentication.

![application](/public/images/application.gif)

## User Story

AS a developer who writes about tech <br>
I WANT a CMS-style blog site <br>
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Table of Contents
* [Installation](#installation)
* [Dependencies](#dependencies)
* [Screenshot](#screenshot)

## Installation

To run this application locally, clone the repository. Run `npm install` to install the dependencies listed below. Also use the list of dependencies for reference if some modules don't automatically install. You will also need access to mysql2. Once the database is created and the information is seeded, run the application by entering `npm run`. The application can then be opened in localhost.

The application can also be used at the deployed site [Heroku](https://salty-dusk-80859.herokuapp.com/).

## Dependencies

- [bcrypt](https://www.npmjs.com/package/bcrypt) `npm install bcrypt`
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) `npm install connect-session-sequelize`
- [dotenv](https://www.npmjs.com/package/dotenv) `npm install dotenv`
- [express](https://www.npmjs.com/package/express) `npm install express`
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) `npm install express-handlebars`
- [express-session](https://www.npmjs.com/package/express-session) `npm install express-session`
- [mysql2](https://www.npmjs.com/package/mysql2) `npm install --save mysql2`
- [sequelize](https://www.npmjs.com/package/sequelize) `npm i sequelize`

## Screenshot

- Homepage view

<br>

![](./public/images/homepage.PNG)

<br>

- User Dashboard View

<br>

![](./public/images/dashboard.png)

<br>

- Edit a Post

<br>

![](./public/images/edit-post.PNG)
