require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectWithDB = require('./config/db');
const cloudinary = require("cloudinary").v2;
const cookieSession = require("cookie-session")
const cookieParser = require("cookie-parser")

// connect with the database
connectWithDB();

//cloudinary configurations
cloudinary.config({ 
        cloud_name: 'ddavglvca', 
        api_key: '769968911162481', 
        api_secret: 'nVTeIHdgL2WNCnDFJyleld2g6Es' // Click 'View API Keys' above to copy your API secret
});

const app = express();

// For handling cookies
app.use(cookieParser());

//Initialize cookie-session middleware
app.use(
    cookieSession({
        name:"session",
        maxAge:process.env.COOKIE_TIME * 24 * 60 * 60 * 1000,
        keys: [process.env.SESSION_SECERET],
        secure: true,
        sameSite: "none",
        httpOnly: true
    })
);
    app.json(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use("/", require("./routes"));

app.listen(process.env.PORT || 8000, (err) => {
    if (err) {
        console.log("Error is there while connecting the server")
    }
    console.log('server is runniing onto the port no. ${process.env.PORT}');
});

module.exports = app;
