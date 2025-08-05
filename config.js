const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~ZcRWjCaS#QP_sQInhTGh4g-NOO2Pehm9m6NwNM1r9mJFvyELxv2c'
};
