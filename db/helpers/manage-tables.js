const db = require("../connection");

const createTables = () => {
  return db.query(`
    CREATE TABLE views (
        view_id SERIAL PRIMARY KEY,
        created_at TIMESTAMP DEFAULT NOW()
        );`);
};
const dropTables = () => {
  return db.query(`DROP TABLE IF EXISTS views;`);
};
module.exports = { createTables, dropTables };
