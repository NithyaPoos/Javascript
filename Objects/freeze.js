const config = { env: "prod" };
Object.freeze(config);
config.env = "dev"; // ❌ No effect
console.log(config.env); // "prod"
