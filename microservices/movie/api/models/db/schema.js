const mongoose = require('mongoose');
const movieDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    rating: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    showTimings: {
        type: Array,
        required: false
    },
    releaseDate: {
        type: String,
        required: false
    },
    showEndDate: {
        type: String,
        required: false
    },
    trailerUrl: {
        type: String,
        required: false
    },
    posterUrl: {
        type: String,
        required: false
    },
    cast: [{
        name: {
            type: String,
            required: false
        },
        photourl: {
            type: String,
            required: false
        },
        role: {
            type: String,
            required: false
        }
    }],
    budget: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    censorCertificate: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Movie", movieDetailsSchema, 'movie');
