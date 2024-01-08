const { parsed: myEnv } = require('dotenv').config();

module.exports = {
  env: {
    ...myEnv,
  },
};
