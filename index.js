require("dotenv").config();
const api = require("./src/api");
const dbSync = require('./src/bdSync');

dbSync();

api.listen(process.env.API_PORT, () => {
  console.log(`Started API at http://127.0.0.1:${process.env.API_PORT}`);
});
