const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kaki', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", function() {
    console.log("连接成功");
})