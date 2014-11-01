// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
/*$(document).ready(function () {
	var $speech = $('div.speech');
	
	$('#switcher-large').click(function () {
		console.log('ma');
		var num = parseFloat($speech.css('fontSize'));
		num = num*1.4;
		$speech.css('font-size', num + 'px');
		});
	});*/
//listing 4.4 adding minimizing function adding efficiency to our code with implicit iteration
/*$(document).ready(function () {
	var $speech = $('div.speech');
	
	$('#switcher button').click(function () {
	var num = parseFloat($speech.css('fontSize'));
	if (this.id == 'switcher-large') {
		num = num *1.4;
		} else if (this.id == 'switcher-small') {
			num = num /1.4;
			}
	$speech.css('font-size', num +'px');
	});
});*/
// listing 4.5 adding default size using switch instead of 'if' 'else' conditionals
/*$(document).ready(function () {
	var $speech = $('div.speech');
	var defaultSize = parseFloat($speech.css('fontSize'));
	$('#switcher button').click(function () {
	var num = parseFloat($speech.css('fontSize'));
	switch(this.id) {
		case 'switcher-large':
		num = num*1.4;
		break;
		case 'switcher-small':
		num /=1.4;
		break;
		default:
		num = defaultSize;
		}
	$speech.css('font-size',num);
	});
});*/
//listing 4.8-4.10 hide,show, fadeIn,fadeOut,slideDown,slideUp functions
/*$(document).ready(function () {
	$('p').eq(1).hide();
	$('a.more').click(function (event) {
		event.preventDefault();
//		$('p').eq(1).show('slow');
//		$('p').eq(1).fadeIn('slow');
		$('p').eq(1).slideDown('slow');
		$(this).hide();
		});
		});*/
//listing 4.11 & 4.12 modified + 4.13 using animate +4.14 with opacity toggle
$(document).ready(function () {
	var $para =$('p:eq(1)');
	$para.hide();
	$('a.more').click(function (event) {
		event.preventDefault();
		//$para.slideToggle('slow');
		$para.animate({height: 'toggle',opacity: 'toggle'},'slow');
		if ($(this).text()=='read more') {
		//$para.slideDown('slow');
		$(this).text('read less');
		} else {
			//$para.slideUp('slow');
			$(this).text('read more');
			}
		});
		});
//listing 4.15 adding animate to 4.5 instead of css
$(document).ready(function () {
	var $speech = $('div.speech');
	var defaultSize = parseFloat($speech.css('fontSize'));
	$('#switcher button').click(function () {
	var num = parseFloat($speech.css('fontSize'));
	switch(this.id) {
		case 'switcher-large':
		num = num*1.4;
		break;
		case 'switcher-small':
		num /=1.4;
		break;
		default:
		num = defaultSize;
		}
	//$speech.css('font-size',num);
	$speech.animate({'font-size': num + 'px'},'slow');
	});
});
//listing 4.16 4.17 adding position relative to move the switcher box to the left
/*$(document).ready(function () {
	$('div.label').click(function () {
	var $paraWidth = $('div.speech p').outerWidth();
	var $switcher = $(this).parent();
	var $switcherWidth = $switcher.outerWidth();
	$switcher.css({position: 'relative'}).animate({
		borderWidth: '5px',
		left: $paraWidth - $switcherWidth,
		height: '+=20px'}
		, 'slow');
	});
});*/
// queuing animation listing 4.18 & 4.19 adding slide and fade effects & 4.20 fading and moving simultaneous by 
// setting queue : false + 4.21
/*$(document).ready(function () {
	$('div.label').click(function () {
	var $paraWidth = $('div.speech p').outerWidth();
	var $switcher = $(this).parent();
	var $switcherWidth = $switcher.outerWidth();
	$switcher
		.css({position: 'relative'})
		.fadeTo('fast',0.1)
		.animate({left: $paraWidth - $switcherWidth},{duration:'slow',queue: false})
		.fadeTo('slow',1)
		.slideUp('slow')
		.css({backgroundColor:'#f00'})
		.slideDown('slow')
		.animate({borderWidth: '5px'},'slow')
		.animate({height: '+=20px'}, 'slow');
	});
});*/
/*
$(document).ready(function () {
	$('div.label').click(function () {
	var $paraWidth = $('div.speech p').outerWidth();
	var $switcher = $(this).parent();
	var $switcherWidth = $switcher.outerWidth();
	$switcher
		.css({position: 'relative'})
		.fadeTo('fast',0.1)
		.animate({left: $paraWidth - $switcherWidth},{duration:'slow',queue: false})
		.fadeTo('slow',1)
		.slideUp('slow')
		.queue(function (next) {
			$switcher.css({backgroundColor:'#f00'});
			next();
			})
		.slideDown('slow')
		.animate({borderWidth: '5px'},'slow')
		.animate({height: '+=20px'}, 'slow');
	});
});
*/
//listing 4.24
/*$(document).ready(function () {
	$('p').eq(2).css({'border': '1px solid #333'})
		.click(function () {
			$(this).slideUp().next().slideDown();
			});
	$('p:eq(3)').css({backgroundColor: '#999'}).hide();
	
});*/
//listing 4.26
/*$(document).ready(function () {
	$('p').eq(2).css({'border': '1px solid #333'})
		.click(function () {
			var $clickedIntem = $(this);
			$clickedIntem.next().slideDown('slow', function () {
				$clickedIntem.slideUp()});
			});
	$('p:eq(3)').css({backgroundColor: '#999'}).hide();
	
});*/
//listing 4.27 using a callback function in slideDown() instead of queue()

$(document).ready(function () {
	$('div.label').click(function () {
	var $paraWidth = $('div.speech p').outerWidth();
	var $switcher = $(this).parent();
	var $switcherWidth = $switcher.outerWidth();
	$switcher
		.css({position: 'relative'})
		.fadeTo('fast',0.1)
		.animate({left: $paraWidth - $switcherWidth},{duration:'slow',queue: false})
		.fadeTo('slow',1)
		.slideUp('slow')
		.slideDown('slow',function (next) {
			$switcher.css({backgroundColor:'#f00'});})
		.animate({borderWidth: '5px'},'slow')
		.animate({height: '+=20px'}, 'slow');
	});
});
// exercises for chapter 4
$(document).ready(function () {
	$('body').fadeIn(3000);
	$('p').hover(function () {
		$(this).css({background:'yellow'});
		},function () {
			$(this).css({background:'white'});	
			});	
	$('h2').click(function () {
		//console.log('ma');
		$(this).fadeTo('slow',.25).animate({marginLeft:'+=20px'},'slow',function () {
			//console.log('ba');
			$('.speech').fadeTo('slow',.5);
			});
		});
	$(document).keyup(function (event) {
		var key = event.which;
		
		//console.log(key);
		switch(key) {	
		case 37:
		//move to left
		console.log('left');
		$('div#switcher').animate({marginLeft:'-=20px'},'slow');
		break
		case 39:
		//move right
		console.log('right');
		$('div#switcher').animate({marginLeft:'+=20px'});
		break
		case 38:
		//move up
		console.log('up');
		$('div#switcher').animate({marginTop:'-=20px'});
		break
		case 40:
		console.log('down');
		$('div#switcher').animate({marginTop:'+=20px'});
		break
		}
		});
	});
