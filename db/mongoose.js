const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://admin:admin123@ds237072.mlab.com:37072/search-app", {useNewUrlParser: true});

module.exports = {mongoose};
