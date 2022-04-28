const format = require("pg-format");

const db = require("../connection");

const { dropTables, createTables } = require("../helpers/manage-tables");

const seed = async (viewData) => {
  await dropTables();
  await createTables();
  const insertViewDataString = format(
    "INSERT INTO views (created_at) VALUES %L RETURNING *;",
    viewData.map(({ created_at }) => [new Date(created_at)]),
  );

  await db.query(insertViewDataString);
};
module.exports = seed;
