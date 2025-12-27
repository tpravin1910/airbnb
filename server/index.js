require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectWithDB = require("./config/db");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2;

// connect with database
connectWithDB();

// cloudinary configuration
cloudinary.config({
  cloud_name: 'dlbgxf0of',
  api_key: '964637236998599',
  api_secret: '4AQYI4JRoG4qYOY6fMVfzmUPz_A'
});

const app = express();

// For handling cookies
app.use(cookieParser());