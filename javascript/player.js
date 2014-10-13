var player;
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });

  var restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", function() {
    player.seekTo(0);
  });  

  var playGP = document.getElementById("play-gp");
  playGP.addEventListener("click", function () {
    player.loadVideoById('QqJikglZUWo');
    player.playVideo();
    $('#play-gp').css('background', 'purple');
    $('#play-os').css('background', '477DCA');
    $('#play-fr').css('background', '477DCA');
  });

  var playOS = document.getElementById("play-os");
  playOS.addEventListener("click", function () {
    player.loadVideoById('MLrC7e3vSv8');
    player.playVideo();
    $('#play-os').css('background', 'purple');
    $('#play-gp').css('background', '477DCA');
    $('#play-fr').css('background', '477DCA');
  });

  var playFR = document.getElementById("play-fr");
  playFR.addEventListener("click", function () {
    player.loadVideoById('mpkxwAu8bqM');
    player.playVideo();
    $('#play-fr').css('background', 'purple');
    $('#play-gp').css('background', '477DCA');
    $('#play-os').css('background', '477DCA');
  });
}


