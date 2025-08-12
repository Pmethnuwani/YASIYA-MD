const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~3shUyTbJ#IQIQMXSSX9C-Spn1YW2SE7fhs4kGkrkG6kp_vL9VsyE'
};
