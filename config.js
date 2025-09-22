const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~ABZHnDDQ#y1VDqgM3jz2htgqHAh7-OE2dzLPokpFpnS1GAUrYCcE'
};
