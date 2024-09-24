const dotenv = require('dotenv');
dotenv.config();

const mongoURI = process.env.MONGO_URL;

module.exports = {
    mongoURI,
    // other configurations
};