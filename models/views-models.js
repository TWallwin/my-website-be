const db = require("../db/connection");
exports.fetchViews = () => {
  return db.query("SELECT * FROM views;").then((data) => {
    console.log(data.rows);
    return data.rows;
  });
};
exports.addViews = () => {
  return db
    .query(
      "INSERT INTO views (view_id, created_at) VALUES (DEFAULT, DEFAULT) RETURNING *;",
    )
    .then((data) => data.rows[0]);
};
