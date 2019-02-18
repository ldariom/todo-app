const jsonServer = require('json-server');
const server = jsonServer.create();
const http = require('http');
const fs = require('fs');
const util = require('util');
const cors = require('cors');
const corsOptions =  {
  origin: 'http://localhost:4200'
};
const faker = require('faker');

const prom = reset();

prom.then(data => {

  const router = jsonServer.router('server/db.json');
  const middlewares = jsonServer.defaults();

  server.use(cors(corsOptions));
  server.use(middlewares);
  server.use(jsonServer.bodyParser);

  server.use(router);
  server.listen(3002, () => {
  console.log('JSON Server is running');
  });

});

function generateTodos() {

  const todos = [];
  for (let id = 1; id < 10; id++) {
    const word = faker.random.word();
    const state = faker.random.boolean();
    todos.push({
      'id': id,
      'title': word,
      'state': state,
    });
  }
  return { 'todos': todos };
}

function reset() {

  const data = generateTodos();

  fs.writeFile('server/db.json', '', function() { console.log('done'); });
    return new Promise((resolve, reject) => {
      fs.writeFile('server/db.json', JSON.stringify(data), 'utf8', function (err) {
      resolve(data);
    });
  });

}
