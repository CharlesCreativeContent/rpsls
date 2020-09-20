let rPSLS = {
  buttons: document.querySelectorAll('button'),
  play: e=>{
      fetch(`/api?guess=${e.target.value}`)
          .then(response => response.json())
          .then((data) => {
              console.log(data);
              switch(data.botMove){
                  case 'rock': document.getElementById('botChoice').src='img/rock.png'; break;
                  case 'paper': document.getElementById('botChoice').src=' img/paper.png'; break;
                  case 'scissors': document.getElementById('botChoice').src='img/scissors.png'; break;
                  case 'lizard': document.getElementById('botChoice').src='img/lizard.png'; break;
                  case 'spock': document.getElementById('botChoice').src='img/spock.png'; break;
              }
              switch(data.yourMove){
                  case 'rock': document.getElementById('myChoice').src='img/rock.png'; break;
                  case 'paper': document.getElementById('myChoice').src='img/paper.png'; break;
                  case 'scissors': document.getElementById('myChoice').src='img/scissors.png'; break;
                  case 'lizard': document.getElementById('myChoice').src='img/lizard.png'; break;
                  case 'spock': document.getElementById('myChoice').src='img/spock.png'; break;
              }
              switch(data.whoWon){
                  case 'Player': document.querySelector('h2').innerHTML = data.whoWon+' won!'; break;
                  case 'Bot': document.querySelector('h2').innerHTML = data.whoWon+' won!'; break;
                  case "tie": document.querySelector('h2').innerHTML = 'It is a '+data.whoWon+'!'; break;
              }
              document.querySelectorAll('span')[1].innerHTML = data.botwinCount
              document.querySelectorAll('span')[0].innerHTML = data.winCount
          });

  },
  loadListeners: ()=>{
    rPSLS.buttons.forEach(x=>x.addEventListener('click', rPSLS.play))
  },

}

rPSLS.loadListeners()
