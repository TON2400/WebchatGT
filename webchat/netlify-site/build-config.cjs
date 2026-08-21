const fs = require("fs");

const required = ["SUPABASE_URL", "SUPABASE_ANON_KEY"];
const missing = required.filter((key) => !process.env[key]);

if (missing.length) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const config = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
};

fs.writeFileSync(
  "config.js",
  `window.APP_CONFIG = ${JSON.stringify(config, null, 2)};\n`,
  "utf8"
);

console.log("Generated config.js");
