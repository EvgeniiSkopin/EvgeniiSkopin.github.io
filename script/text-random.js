$(document).ready(function(){
  let originalText = $('.rand-text').text();
$('.rand-text').mouseenter(function() {
      let text = '';
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%$';

      for(let i=0; i < $('.rand-text').text().length; i++)
      {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      $('.rand-text').text( text );

      setTimeout(updateText, 100);

      
  });

  function updateText(){
    $('.rand-text').text( originalText );
  }
  // $('.rand-text').mouseleave(function() {
  //     $('.rand-text').text( originalText );
  // });
})