const app = require("./app.js");

const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  if (err) throw err;
  console.log(`Listening on ${PORT}...`);
});
