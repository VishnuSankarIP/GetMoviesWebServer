require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./Router/router');
require('./DB/connection');


const movieServer = express();

movieServer.use(cors());
movieServer.use(express.json());

// Routes
movieServer.use(router);

const PORT = process.env.PORT || 3000;

// Start the server
movieServer.listen(PORT, () => {
    console.log(`movie server started at port ${PORT}`);
});
// Default route
movieServer.get("/", (req, res) => {
    res.status(200).send(`<h1>Movie server started and waiting for client request</h1>`);
});
