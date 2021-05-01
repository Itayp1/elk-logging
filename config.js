const config = {
  SERVICE_NAME: process.env.SERVICE_NAME,
  ENV: process.env.ENV,
  ELASTIC_ADDRESS: process.env.ELASTIC_ADDRESS,
  ELASTIC_USERNAME: process.env.ELASTIC_USERNAME,
  ELASTIC_PASSWORD: process.env.ELASTIC_PASSWORD,
  INDEX: process.env.INDEX || "kubernates",
};
Object.values(config).forEach((env, index) => {
  if (env == undefined) {
    throw new Error(`missing env variables in elastic config :${Object.keys(config)[index]}`);
  }
});

module.exports = config;
