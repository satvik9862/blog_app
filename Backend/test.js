const dotenv = require("dotenv");

// Load environment variables from config.env file
dotenv.config({ path: './Config/config.env' });

// Check if environment variables are loaded
console.log("Environment Variables: ", process.env.PORT);
