import express from "express";
import bodyParser from "body-parser";
import { usersRoutes } from "./routes/usersRoutes";

const routes = {
  users: require("./routes/usersRoutes"),
};

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// CORS
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// SECURITY
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send(`
  <h2>Hello, Sequelize + Express!</h2>
  <p>Make sure you have executed <b>npm run setup-example-db</b> once to have a populated example database. Otherwise, you will get <i>'no such table'</i> errors.</p>
  <p>Try some routes, such as <a href='/api/users'>/api/users</a> or <a href='/api/orchestras?includeInstruments'>/api/orchestras?includeInstruments</a>!</p>
  <p>To experiment with POST/PUT/DELETE requests, use a tool for creating HTTP requests such as <a href='https://github.com/jakubroztocil/httpie#readme'>HTTPie</a>, <a href='https://www.postman.com/downloads/'>Postman</a>, or even <a href='https://en.wikipedia.org/wiki/CURL'>the curl command</a>, or write some JS code for it with <a href='https://github.com/sindresorhus/got#readme'>got</a>, <a href='https://github.com/sindresorhus/ky#readme'>ky</a> or <a href='https://github.com/axios/axios#readme'>axios</a>.</p>
`);
});

usersRoutes(app);

module.exports = app;
