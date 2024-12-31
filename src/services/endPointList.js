
const listEndpoints = require("express-list-endpoints");
const fs = require("fs");


const endpointsList = (app) => {
  const endpoints = listEndpoints(app).flatMap((endpoint) => {
    return endpoint.methods.map((method) => `${method} ${endpoint.path}`);
  });

  fs.writeFileSync("endpoints.json", JSON.stringify(endpoints, null, 2));
};

module.exports = endpointsList;