$( ".content-col" ).hover(
  function() {
    $( this ).addClass( "focused" );
    $(".image").css('display','none');

  }, function() {
  	$(".image").css('display','block');
    $( this ).removeClass( "not-focused" );
  }
);


$(".first-col.content-col").click( function() {
	console.log("clicked");
});