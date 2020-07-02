const router = require('koa-router')()
const Person = require("../db/models/person.js")

router.prefix('/users')

router.get('/', function(ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post("/addPerson", async function(ctx) {
  //创建model的实例,然后通过save()来插入数据
  const person = new Person({ name: ctx.request.body.name, age: ctx.request.body.age })
  let code
  try {
    await person.save()
    code = 0
  } catch (e) {
    code = -1
  }
  console.log(code);
})

router.post("/getPerson", async function(ctx) {
  const result = await Person.findOne({ name: ctx.request.body.name })
  const results = await Person.find({ name: ctx.request.body.name })
  ctx.body = {
    result,
    results
  }
})

router.post("/updatePerson", async function(ctx) {
  const result = await Person.where({ name: ctx.request.body.name }).update({
    age: ctx.request.body.age
  })

  ctx.body = {
    result
  }
})

router.post("/deletePerson", async function(ctx) {
  const result = await Person.where({ name: ctx.request.body.name }).remove()
  ctx.body = {
    result
  }
})

module.exports = router