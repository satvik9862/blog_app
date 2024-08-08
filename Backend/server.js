
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const IndexRoute = require("./Routers/index");
const connectDatabase = require("./Helpers/database/connectDatabase");
const customErrorHandler = require("./Middlewares/Errors/customErrorHandler");

// Load environment variables from config.env file
dotenv.config({ path: './Config/config.env' });

// Verify if environment variables are loaded
// console.log("NODE_ENV:", process.env.NODE_ENV);
// console.log("PORT:", process.env.PORT);

connectDatabase();

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your Elastic IP
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());
// app.use(cors());

app.use("/", IndexRoute);

app.use(customErrorHandler);

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} : ${process.env.NODE_ENV}`);
});

// Debug statement to log all environment variables
console.log(process.env);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});
