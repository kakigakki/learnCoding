const router = require("koa-router")();

router.get("/", async(ctx, next) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
  });
});

router.get("/string", async(ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async(ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

router.get("/testAwait", async(ctx) => {
  const a = new Date();
  console.log(a);
  const b = await new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("await b");
      reslove("b");
    }, 1000);
  });
  const c = new Date();
  console.log(c);
});

module.exports = router;