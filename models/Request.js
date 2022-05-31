const { Schema, model } = require('mongoose');



const Request = model('Request', RequestSchema);

module.exports = Request;
