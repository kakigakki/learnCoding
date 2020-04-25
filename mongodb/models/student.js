/* 创建一个student model的生成模块 */
const mong = require("mongoose")
var Schema = mong.Schema
var s = new Schema({
    name: String,
    age: Number,
    birthday: { type: Date, default: Date.now },
    address: String
})
var model = mong.model("student", s)
module.exports = model