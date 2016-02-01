// wi.sh simple web springboard
/*  inspired by Darwin, a hackathon project that I once 
 	worked on with some friends
*/

/*


A quicker homepage

quick shortcut INPUTS:

google -> google.com   /    google
9gag   -> 9gag.com     /    9





//TODO for VER 0.25           status         expected by

Add duckduckgo support        /done          NA
Add yahoo support             /postponed     tentative
Add bing Support              /done          NA
Add Weather request support   /postponed     ver 0.3
Add Dict/Thesaurus Support    /done          NA

Scrap Google support          /done          tentative: will be added when google is functioning again

*/
$( document ).ready(function() {
    $('#helpdocs').hide();
});


$(document).keypress(function(event){

	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13' && $("#search").is(":focus") ){
		//alert('query received by script');

		var input = $('#search').val();

		
		//quick in->out


		if ( input == "google" || input == "Google" ) {
			window.location.href = "http://www.google.com/"	;
		} else if (input == "9gag" || input =="9") {
			window.location.href = "http://www.9gag.com/";	
		} else if (input == "chs" || input == "chs.fuhsd.org") {
			window.location.href = "http://www.chs.fuhsd.org";
		} else if(input == "codingbat" || input == "codingbat.com") {
			window.location.href = "http://www.codingbat.com";
		} else if(input == "messenger" || input == "messenger.com") {
			window.location.href = "http://www.messenger.com";
		} else if(input == "inbox" || input == "inbox.google.com") {
			window.location.href = "http://inbox.google.com";
		} else if(input == "drive" || input == "drive.google.com") {
			window.location.href = "http://drive.google.com";
		}


		//more inputs


		else if( input.indexOf("-g ") == 0 ) {
			input = input.substring(3);
			input = input.split(' ').join('+');
			window.location.href = "https://www.google.com/search?hl=en&q=" + input;
		}else if( input.indexOf("-walf ") == 0 ) {
			input = input.substring(6);
			input = input.split('+').join('%2B');
			input = input.split(' ').join('+');
			window.location.href = "http://www.wolframalpha.com/input/?i=" + input;
		}else if( input.indexOf("-ddg ") == 0 ) {
			input = input.substring(5);
			input = input.split('+').join('%2B');
			input = input.split(' ').join('+');
			window.location.href = "https://duckduckgo.com/?q=" + input;
		}else if( input.indexOf("-def ") == 0 ) {
			input = input.substring(5);
			input = input.split(' ').join('+');
			window.location.href = "http://dictionary.reference.com/browse/" + input + "?s=t";
		}else if( input.indexOf("-bing ") == 0 ) {
			input = input.substring(6);
			input = input.split('+').join('%2B');
			input = input.split(' ').join('+');
			window.location.href = "https://www.bing.com/search?q=" + input;
		}


		else {
			input = input.split(' ').join('+');
			window.location.href = "https://duckduckgo.com/?q=" + input;
		}

	}
	
});

//var count = 1;





$('#slider').click(function() {

    	$('#notifications').animate({
            top:"0px"
        });
        
});
$('#upButton').click(function() {

    	$('#notifications').animate({
            top:"-100%"
        });
        
});
$('#messengerLink').click(function() {

    	window.location.href="http://www.messenger.com";
        
});
$('#inboxLink').click(function() {

    	window.location.href="http://inbox.google.com";
        
});

$('#downDocsButton').click(function() {

    	
        $('#helpdocs').hide(400);
        
});
$('#helpy').click(function() {

		$('#helpdocs').show(400);
        
});

