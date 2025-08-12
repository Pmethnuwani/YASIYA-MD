const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~ixYHjD5I#K_uI-EN8Iun9amaAAUW7ge-5eIojKNL9dM-06Upxx8E'
};
