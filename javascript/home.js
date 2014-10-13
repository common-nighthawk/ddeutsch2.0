var counter = 0;
var playing = false;

$(document).ready(function () {
  $( ".name" ).keyup(function() {
    var greeting = "hello, my name is "
    var myName = "daniel deutsch"
    var userName = ($( ".name" ).text()).toLowerCase();

    if (userName.length > 0) {
      $( ".hello-text" ).html(greeting + userName + ".");
    } else {
      $( ".hello-text" ).html(greeting + myName + ".");
    }
  });

  setInterval(checkDance, 1000);

  $('#hidden-img-1').click(function(){
    $('#hidden-img-1').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/9/9c/Ruby_on_Rails_logo.jpg');
  });
  $('#hidden-img-2').click(function(){
    $('#hidden-img-2').attr('src', 'http://www.mapdigital.com/images/logo_map_wht.gif');
  });
  $('#hidden-img-3').click(function(){
    $('#hidden-img-3').attr('src', 'http://i.imgur.com/ef6E1pt.png');
  });
  $('#hidden-img-4').click(function(){
    $('#hidden-img-4').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/100px-Ruby_logo.svg.png');
  });
  $('#hidden-img-5').click(function(){
    $('#hidden-img-5').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png');
  });
  $('#hidden-img-6').click(function(){
    $('#hidden-img-6').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wiktionary_small.svg/350px-Wiktionary_small.svg.png');
  });
  $('#hidden-img-7').click(function(){
    $('#hidden-img-7').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/64px-Boostrap_logo.svg.png');
  });
  $('#hidden-img-8').click(function(){
    $('#hidden-img-8').attr('src', 'https://lh6.googleusercontent.com/-DtPuPzooNEY/AAAAAAAAAAI/AAAAAAAAAdY/slojHTFUsLU/photo.jpg?sz=48');
  });
  $('#hidden-img-9').click(function(){
    $('#hidden-img-9').attr('src', 'http://www.cloudyn.com/wp-content/uploads/2014/09/Servers-Server-Farm-Engine-Room.jpg');
  });                
  $('#hidden-img-10').click(function(){
    $('#hidden-img-10').attr('src', 'http://ecx.images-amazon.com/images/I/51T3cvB1GiL._AA160_.jpg');
  });
  $('#hidden-img-11').click(function(){
    $('#hidden-img-11').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/250px-UPenn_shield_with_banner.svg.png');
  });
  $('#hidden-img-12').click(function(){
    $('#hidden-img-12').attr('src', 'http://video.mit.edu/assets/img/channels/header/20120127120941.jpg');
  });
  $('#hidden-img-13').click(function(){
    $('#hidden-img-13').attr('src', 'https://www.stub-stopper.com/wp-content/uploads/2014/09/TIME-Magazine-Stubbed-Toe.png');
  });
  $('#hidden-img-14').click(function(){
    $('#hidden-img-14').attr('src', 'http://img1.imagesbn.com/pImages/nook/nook07/mediakit/29_nookhdplus_Nook_logo_thumb.jpg');
  });
  $('#hidden-img-15').click(function(){
    $('#hidden-img-15').attr('src', 'http://www.bootcamps.in/wp-content/products/thumb/4439c6be4c1f22319796687be7f971c7.jpg');
  });
  $('#hidden-img-16').click(function(){
    $('#hidden-img-16').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/360px-Yale_University_Shield_1.svg.png');
  });
  $('#hidden-img-17').click(function(){
    $('#hidden-img-17').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_Postdlf.jpg/1280px-Brooklyn_Bridge_Postdlf.jpg');
  });
  $('#hidden-img-18').click(function(){
    $('#hidden-img-18').attr('src', 'http://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Cloud_Gate_%28The_Bean%29_from_east%27.jpg/337px-Cloud_Gate_%28The_Bean%29_from_east%27.jpg');
  });
  $('#hidden-img-19').click(function(){
    $('#hidden-img-19').attr('src', 'https://c4.staticflickr.com/8/7332/9632169602_4b5af7c332.jpg');
  });
  $('#hidden-img-20').click(function(){
    $('#hidden-img-20').attr('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wiktionary_small.svg/350px-Wiktionary_small.svg.png');
  });    

                  


});

function headerDance() {
  if (counter % 2 === 0) {
    $('.boxes .box:nth-child(even)').css('height', '1.5em')
    $('.boxes .box:nth-child(odd)').css('height', '3em')
  } else {
    $('.boxes .box:nth-child(odd)').css('height', '1.5em')
    $('.boxes .box:nth-child(even)').css('height', '3em')
  }
    counter ++
}

function checkDance() {
  playing = player.getPlayerState() === 1;
  if (playing) { setInterval(headerDance(), 1000); }
}