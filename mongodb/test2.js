/* 调用数据库连接 */
require("./mongon-connection")
    /* 生成student模型的模块 */
var stuModel = require("./models/student")
stuModel.create({
    name: "KAKI",
    age: 23,
    address: "china"
}, function(err) {
    if (!err) {
        console.log("success");
    }
})