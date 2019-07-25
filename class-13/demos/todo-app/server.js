'use strict'

/**
 * Bootstrap app with dependencies
 * express
 * pg
 * method override
 */
const express = require('express');
const pg = require('pg');
const methodOverride = require('method-override');

/**
 * configure app
 * setting port
 * configuring env variables
 * using middleware
 * Configure database
 */
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', (err) => console.log(err));


app.use(express.urlencoded({ extended: true })); //parsing request bodies??
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.use(methodOverride((request, response) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    let method = request.body._method;
    delete request.body._method;
    return method;
  }
}))

app.listen(PORT, () => console.log('App listening on port : ', PORT));

/**
 * Configure routes
 */
app.get('/', getTasks);
app.put('/task/:taskId', updateTask);
// app.get('/task/:taskId', getOneTask);
app.get('*', notFound);

/**
 * Models 
 */

function Task(params) {
  this.id = params.id
  this.title = params.title;
  this.description = params.description;
  this.status = params.status;
  this.category = params.category;
}

/**
* create route handers
*/
function getTasks(request, response) {
  // query my database and return my tasks!
  let SQL = `SELECT * FROM tasks;`;
  return client.query(SQL)
    .then(results => {
      const tasks = results.rows.map(row => new Task(row));
      response.render('index', { tasks });
    })
    .catch(error => response.send(error));
}

function updateTask(request, response) {
  let { title, description, category, status } = request.body;
  let SQL = `UPDATE tasks SET title=$1, description=$2, category=$3, status=$4 WHERE id=$5`;
  let values = [title, description, category, status, request.params.taskId];
  return client.query(SQL, values)
    .then(results => {
      response.redirect('/');
    })
    .catch(error => response.send(error));
}

function notFound(request, response) {
  response.status(404).send('This route does not exist');
}
