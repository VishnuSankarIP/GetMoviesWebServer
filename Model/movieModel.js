
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: Number,
    title: String,
    year: String,
    genre: String,
    banner_image: String
});

const movies = mongoose.model('movies', movieSchema);

module.exports = movies;
