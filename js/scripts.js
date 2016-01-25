// Example document ready function and form submit function w/ event handler to prevent default

$(document).ready(function() {

  $("form").submit(function(event){

    event.preventDefault();
  });

});
