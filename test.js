var makeItRain = function () {
    // clear out everything
    $('.rain').empty();
  
    var increment = 0;
    var drops = "";
    var backDrops = "";
  
    while (increment < 100) {
      var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      increment += randoFiver;
  
  
      var randomColor = getRandomColor(); // Added line for random color
  
      // add in a new raindrop with an SVG heart
      drops +=
        '<div class="drop rotate" style="left: ' +
        increment +
        '%; bottom: ' +
        (randoFiver + randoFiver - 1 + 100) +
        '%; animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;">' +
        '<div class="stem" style="animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;"></div>' +
        '<img class="svg" src="./noun-lily-172671.svg" alt="heart" style="fill: ' +
        randomColor +
        ';">' +
        '</div>';
  
      backDrops +=
        '<div class="drop rotate" style="right: ' +
        increment +
        '%; bottom: ' +
        (randoFiver + randoFiver - 1 + 100) +
        '%; animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;">' +
        '<div class="stem" style="animation-delay: 0.' +
        randoHundo +
        's; animation-duration: 0.5' +
        randoHundo +
        's;"></div>' +
        '<img class="svg" src="./noun-lily-172671.svg" alt="heart" style="fill: ' +
        randomColor +
        ';">' +
        '</div>';
    }
  
    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  };
  
  $('.splat-toggle.toggle').on('click', function() {
    $('body').toggleClass('splat-toggle');
    $('.splat-toggle.toggle').toggleClass('active');
    makeItRain();
  });
  
  $('.back-row-toggle.toggle').on('click', function() {
    $('body').toggleClass('back-row-toggle');
    $('.back-row-toggle.toggle').toggleClass('active');
    makeItRain();
  });
  
  $('.single-toggle.toggle').on('click', function() {
    $('body').toggleClass('single-toggle');
    $('.single-toggle.toggle').toggleClass('active');
    makeItRain();
  });
  function getRandomColor() {
              const letters = '0123456789ABCDEF';
              let color = '#';
              for (let i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
          }
  
          function changeColors() {
              const container = document.getElementById('ascii-heart-container');
              const text = container.innerText;
  
              let coloredText = '';
  
              for (const char of text) {
                  if (char === '*') {
                      coloredText += `<span style="color: ${getRandomColor()}">${char}</span>`;
                  } else {
                      coloredText += `<span style="color: white">${char}</span>`;
                  }
              }
  
              container.innerHTML = coloredText;
          }
  
          setInterval(changeColors, 1000);
  makeItRain();
  
  