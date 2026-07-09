let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.latest = 5000;
console.log(config);

delete config.browser;
console.log(config);

