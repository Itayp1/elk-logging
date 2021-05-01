"use strict";
const moment = require("moment"); // require

const { ELASTIC_ADDRESS, ELASTIC_PASSWORD, ELASTIC_USERNAME, ENV, SERVICE_NAME, INDEX } = require("./config");
const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: ELASTIC_ADDRESS,
  auth: {
    username: ELASTIC_USERNAME,
    password: ELASTIC_PASSWORD,
  },
});

async function logging(msg, log_level = "info") {
  await client.index({
    index: INDEX,
    body: {
      service_name: SERVICE_NAME,
      env: ENV,
      msg: msg + "iiiiiiiiiiiiii",
      log_level: log_level,
      date: moment().format("yyyy-MM-DDTHH:mm:ss"),
    },
  });
}

module.exports = logging;
