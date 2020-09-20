const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
let wins = 0
let botWins = 0

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/img/spock.png'){
    fs.readFile('img/spock.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/img/lizard.png'){
    fs.readFile('img/lizard.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/img/scissors.png'){
    fs.readFile('img/scissors.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/img/paper.png'){
    fs.readFile('img/paper.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/img/rock.png'){
    fs.readFile('img/rock.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }

  else if (page == "/api") {
        if ('guess' in params) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            let winner
            let move = params[['guess']]
            let bot = ['rock','paper','scissors','lizard','spock'][Math.floor(Math.random()*5)]
            let playerMove = ['rock','paper','scissors','lizard','spock'][move]
            switch(true){
              case (playerMove===bot): winner = 'tie'; break;
              case (playerMove==='rock')&&(bot==='scissors'||bot==='lizard'): winner = 'Player'; break;
              case (playerMove==='rock')&&(bot==='paper'||bot==='spock'): winner = 'Bot'; break;
              case (playerMove==='paper')&&(bot==='rock'||bot==='spock'): winner = 'Player'; break;
              case (playerMove==='paper')&&(bot==='scissors'||bot==='lizard'): winner = 'Bot'; break;
              case (playerMove==='scissors')&&(bot==='paper'||bot==='lizard'): ; winner = 'Player'; break;
              case (playerMove==='scissors')&&(bot==='rock'||bot==='spock'): ; winner = 'Bot'; break;
              case (playerMove==='lizard')&&(bot==='paper'||bot==='spock'): ; winner = 'Player'; break;
              case (playerMove==='lizard')&&(bot==='rock'||bot==='scissors'): ; winner = 'Bot'; break;
              case (playerMove==='spock')&&(bot==='scissors'||bot==='rock'): ; winner = 'Player'; break;
              case (playerMove==='spock')&&(bot==='paper'||bot==='lizard'): ; winner = 'Bot'; break;
            }
switch(winner){
  case 'Bot': botWins++; break;
  case 'Player': wins++; break;
}
            const obj = {
                yourMove: playerMove,
                botMove: bot,
                whoWon: winner,
                winCount: wins,
                botwinCount: botWins
            }
            res.end(JSON.stringify(obj));
        }
    }

  else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8001);
