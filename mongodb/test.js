const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kaki', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", function() {
        console.log("连接成功");
    })
    //创建一个Schema构造函数
var Schema = mongoose.Schema
    //创建一个Schema实例，自定义约束
var firstSchema = new Schema({
        name: String,
        age: String,
        birthday: { type: Date, default: Date.now },
        gender: String
    })
    //创建一个Model集合
var firstModel = mongoose.model("students", firstSchema)
    //为student集合中插入文档。
    // firstModel.create({
    //     name: "kaki",
    //     age: "23",
    //     gender: "man"
    // }, function() {
    //     console.log("插入成功");
    // })

//查询
// firstModel.find({ name: 'kaki' }, function(err, docs) {
//     console.log(docs.toString());
// });

//创建一个doc,doc属于自己创建的model的实例
var firstDoc = new firstModel({
    name: "kaki2",
    age: "24",
    gender: "lady"
})
firstDoc.save(function(err) {
    console.log("插入成功");
})