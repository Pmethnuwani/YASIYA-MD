const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~IQgUBSRb#vy0FQHPshxjGhW42gEhKPDDyHnwGlezo6oLKA7E8UJ4'
};
