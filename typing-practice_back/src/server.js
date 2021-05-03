require("dotenv").config();
const app = require("./app");
const sequelize = require("./models/index");
const PORT = process.env.PORT || 5000;

async function assertDatabaseConnectionOk() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  app.listen(PORT, () => {
    console.log(`Server start at: http://localhost:${PORT}`);
  });

  // ERROR HANDLER
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
  });
}

init();
