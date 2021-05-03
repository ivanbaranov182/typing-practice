require("dotenv").config();
const { createDb, migrate } = require("postgres-migrations");
const path = require("path");

const init = async () => {
  const dbConfig = {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    omitNull: true
  };

  await createDb(
    process.env.DB_NAME,
    {
      ...dbConfig,
      defaultDatabase: "postgres",
    },
    { timestamps: true }
  );

  await migrate(dbConfig, path.join(__dirname, "migrations"));
};

init();
