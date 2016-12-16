$(document).ready(function ( ){
	var quote = "";
	var author = "";
	$("body").css("height",$(window).height());
	$("#load_more").on("click", function() {
	   $("#load_more").addClass("animated rotateInDownLeft"); 
      	$.getJSON("https://raw.githubusercontent.com/kiyaGu/ranQuotes/master/quote_ara.json", function(json) {
       	var html = "";
		var quoteId = Math.floor(Math.random() * (7));// to randomly generate out of the 0 - 150 quotes
        json.quotes.filter(function(val){
			if(val.id == quoteId){
				var keys = Object.keys(val);
				$(function(){
					    quote = val.quote;
					    author = val.author;
    					$( "#quote" ).css("display", "block" );
					    $( "#quote" ).addClass("animated rollIn");					    
					    setTimeout(function() {//to remove the animation for the next click
                                 $( "#quote" ).removeClass("animated rollIn");
							     $("#load_more").removeClass("animated rotateInDownLeft"); 
						         }, 2000);
      					$("#typed").typed({
        						strings: ["<span class='main-quote'><sup><i class='fa fa-quote-left' aria-hidden='true'></i></sup><em> "+ val.quote + " </em><sup><i class='fa fa-quote-right'></i></sup></span><br><br><cite class='text-center text-danger text-right'> <i class='fa fa-user text-info' aria-hidden='true'></i>   - "+val.author+"</cite>&nbsp;"],
        						typeSpeed: 30
      							});					
  							});	
			      }           
           });

         });
    });
	$(".btn-twitter").on("click", function(){
		var textToTweet = "Hi I am tweeting from here";
 		if (quote.length > 140) {
 			alert('Tweet should be less than 140 Chars');

 			} 
		else {
  			var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent('@freecodecamp "' + quote+' - '+author);
 				window.open(twtLink,'_blank');
 			}
	});
});

