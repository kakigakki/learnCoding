//利用request和cheerio进行网络爬虫
//需要在node环境执行

const cheerio = require("cheerio");
const request = require("request");
const URL = "https://www.codewars.com/users/leaderboard";

class User {
  constructor(name, clan, honor) {
    this.name = name;
    this.clan = clan;
    this.honor = +honor.replace(",", "");
  }
}

function solution() {
  return new Promise(function(resolve, reject) {
    let leaderboard = { position: {} };
    request(URL, (err, res, body) => {
      if (err) reject(err);
      let $ = cheerio.load(body);
      $(".leaderboard table tr")
        .slice(1)
        .each(function(index, item) {
          const name = $(item).data("username");
          const clan = $(item).children().eq(2).text();
          const honor = $(item).children().eq(3).text();
          let user = new User(name, clan, honor);
          leaderboard.position[index + 1] = user;
        });
      resolve(leaderboard);
    });
  });
}
solution().then((res) => console.log(res.position[1].honor));