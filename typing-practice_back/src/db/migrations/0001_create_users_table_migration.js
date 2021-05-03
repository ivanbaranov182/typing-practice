const sql = `
  CREATE TABLE users (
    id SERIAL,
    firstName VARCHAR ( 100 ) NOT NULL,
    lastName VARCHAR ( 100 ) NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
    token VARCHAR ( 255 ) UNIQUE NOT NULL,
    allowextraemails BOOLEAN,
    createdAt TIMESTAMPTZ,
    updatedAt TIMESTAMPTZ
  )
`;

module.exports = {
  generateSql: () => sql,
};
