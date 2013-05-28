$(document).ready(function() {
  $('#tweet-form').on('submit', function(e){
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      type: 'post',
      url: '/post',
      data: $(this).serialize(),
      dataType: 'json'
    }).success(function(response){
      console.log(response);
      $('form').append("<p>Success</p>");
    }).fail(function(response){
      console.log(response);
      $('form').append("<p>Oops! Try again</p>");
    });
  });
});
