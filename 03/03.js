// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
/*
$(document).ready(function () {
	$('#switcher-default').addClass('selected')
	.on('click',function () {
		$('body').removeClass('large');
		$('body').removeClass('narrow');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
		});
	$('#switcher-large').on('click',function () {
		$('body').addClass('large');
		$('body').removeClass('narrow');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
		});
	
	$('#switcher-narrow').on('click',function () {
		$('body').removeClass('large');
		$('body').addClass('narrow');
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
		});
	});
	*/
	/*Eficient code (implicit iterarion, behavior queuing, chaining*/
/*$(document).ready(function () {
	$('#switcher-default').addClass('selected')
	.on('click',function () {
		$('body').removeClass('large').removeClass('narrow');		
		});
	$('#switcher-large').on('click',function () {
		$('body').addClass('large').removeClass('narrow');
		});
	
	$('#switcher-narrow').on('click',function () {
		$('body').removeClass('large').addClass('narrow');
		});
		$('#switcher button').on('click',function () {
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
		});
	});*/
	
/*more eficiency (refactoring)*/
	
/*$(document).ready(function () {
	$('#switcher-default').addClass('selected')
	.on('click',function () {
		$('body').removeClass();		
		});
	$('#switcher-large').on('click',function () {
		$('body').removeClass().addClass('large');
		});
	
	$('#switcher-narrow').on('click',function () {
		$('body').removeClass().addClass('narrow');
		});
		$('#switcher button').on('click',function () {
		$('#switcher button').removeClass();
		$(this).addClass('selected');
		});
	});*/
	
	/*More refactoring for eficiency*/
	/*$(document).ready(function () {
	$('#switcher-default').addClass('selected');
	$('#switcher button').on('click',function () {
		$('body').removeClass();
		$('#switcher button').removeClass();
		$(this).addClass('selected');	
		});
	$('#switcher-large').on('click',function () {
		$('body').addClass('large');
		});
	
	$('#switcher-narrow').on('click',function () {
		$('body').addClass('narrow');
		});
		
	});*/
	
//	More eficiency using variable and string spliting + more implicit iteration
/*
$(document).ready(function () {
	$('#switcher-default').addClass('selected');
	$('#switcher button').on('click', function () {
		$('#switcher button').removeClass();
		$(this).addClass('selected');
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);	
		});
	});*/
	
// new function to hide buttons	
/*$(document).ready(function () { 
	$('#switcher').click(function (event) {
		$('#switcher button').toggleClass('hidden');})
	.hover( function (){
		$(this).addClass('hover');
	}, function () {
		$(this).removeClass('hover');});
			
	});*/
	
//Event targeting
/*$(document).ready(function () { 
	$('#switcher').click(function (event) {
		if (event.target==this) {
			$('#switcher button').toggleClass('hidden');
		}
	})
	.hover( function (){
		$(this).addClass('hover');
	}, function () {
		$(this).removeClass('hover');});			
});*/

// Stoping event propagation
/*
$(document).ready(function () { 
	$('#switcher').click(function (event) {
		$('#switcher button').toggleClass('hidden')})
	.hover( function (){
		$(this).addClass('hover');
	}, function () {
		$(this).removeClass('hover');});	
		
});*/
/*	
$(document).ready(function () {
	$('#switcher-default').addClass('selected');
	$('#switcher button').on('click', function (event) {
		$('#switcher button').removeClass();
		$(this).addClass('selected');
		var bodyClass = this.id.split('-')[1];
		$('body').removeClass().addClass(bodyClass);
		event.stopPropagation()	
		});
	});	
	*/
	
//Stop event propagation (event bubling) using conditional and .target
/*
$(document).ready(function () { 
	$('#switcher').click(function (event) {
		if ($(event.target).is('button')) {
			var bodyClass = event.target.id.split('-')[1];
			$('body').removeClass().addClass(bodyClass);
			$('#switcher button').removeClass();
			$(event.target).addClass('selected');
			event.stopPropagation();
			}
		});
	});
*/
// Combining all code to avoid repetition 
/*
$(document).ready(function () {
	$('#switcher-default').addClass('selected');
	//console.log('165');
	$('#switcher').click(function (event) {
		if ($(event.target).is('button')) {
			var bodyClass = event.target.id.split('-')[1];
			//alert(bodyClass);
			$('body').removeClass().addClass(bodyClass);
			$('#switcher button').removeClass();
			$(event.target).addClass('selected');
			//event.stopPropagation();
			} else {
				//alert('else');
			$('#switcher button').toggleClass('hidden');
			}
		});
	});*/
	
//listing 3.18 switcher not expanding when switcher large or switcher narrow activated
//listing 3.18 hover function
/*$(document).ready(function () {
	$('#switcher').hover(function () {
		$(this).addClass('hover');
		}, function () {
		$(this).removeClass('hover');
		});
	});*/
//main document on listing 3.18
/*$(document).ready(function () {
	$('#switcher').click(function (event) {
		if (!$(event.target).is('button')) {
			$('#switcher button').toggleClass('hidden');
			}
		});
	$('#switcher-narrow , #switcher-large').click(function () {
		$('#switcher').off('click');
		});
	});*/
/*$(document).ready(function () {
	$('#switcher-default').addClass('selected');
	
	$('#switcher').click(function (event) {
		
		if ($(event.target).is('button')) {
			var bodyClass = event.target.id.split('-')[1];
			
			$('body').removeClass().addClass(bodyClass);
			$('#switcher button').removeClass();
			$(event.target).addClass('selected');
			//console.log(bodyClass);
			}
		});
	});*/
//listing 3.19
//main document on listing 3.19 (others are the same as in 3.19) giving event namespaces 
/*$(document).ready(function () {
	$('#switcher').on('click.collapse',function (event) {
		if (!$(event.target).is('button')) {
			$('#switcher button').toggleClass('hidden');
			}
		});
	$('#switcher-narrow , #switcher-large').click(function () {
		$('#switcher').off('click.collapse');
		});
	});*/
//listing 3.20,3.21 rebinding events

/*$(document).ready(function () {
	//console.log('ma');
	var toggleSwitcher = function (event) {
		if (!$(event.target).is('button')) {
			$('#switcher button').toggleClass('hidden');
			}
		};
	$('#switcher').on('click.collapse',toggleSwitcher);
	//removing and rebinding event handlers listing 3.21
	$('#switcher-narrow , #switcher-large').on('click', function () {
		$('#switcher').off('click.collapse');
		});
	$('#switcher-default').on('click', function () {
		$('#switcher').on('click.collapse',toggleSwitcher);
		});
		
	});*/
	
//listing 3.22 correcting extra bounding on toggleSwicher function
// (every even click on default makes toggleSwitcher  unworkable)
/*$(document).ready(function () {
	//console.log('ma');
	var toggleSwitcher = function (event) {
		if (!$(event.target).is('button')) {
			$('#switcher button').toggleClass('hidden');
			}
		};
	$('#switcher').on('click',toggleSwitcher);
	$('#switcher button').click(function () {
		$('#switcher').off('click',toggleSwitcher);
		
		if (this.id == 'switcher-default') {
			$('#switcher').on('click',toggleSwitcher);
		}
	});
});
*/
/*$(document).ready( function () {
	//$('#switcher').trigger('click');//listing 3.23
	$('#switcher').click(); //listing 3.24
	});*/
//listing 3.25 adding keyboard events
/*
$(document).ready(function () {
	var triggers = {
		D: 'default',
		N: 'narrow',
		L: 'large'
		};
		$(document).keyup( function (event) {
			var key = String.fromCharCode(event.which);
			if (key in triggers) {
				$('#switcher-' + triggers[key]).click();
				}
			});
		});
		*/
//refactoring all code in one document.ready
$(document).ready( function () {
	$('#switcher').hover( function () {
		$(this).addClass('hover');
		}, function () {
		$(this).removeClass('hover');
		});
		//hiding buttons
	var toggleSwitcher = function (event) {
	if (!$(event.target).is('button')) {
		$('#switcher button').toggleClass('hidden');
		}
		};
	$('#switcher').on('click',toggleSwitcher);
	//selecting default button
	$('#switcher-default').addClass('selected');
	//disabling tooggleSwitcher
	var setBodyClass = function (className) {
		$('#switcher').off('click',toggleSwitcher);
		//var buttonId = this.id;
		//Adding bodyClass
		//var bodyClass = buttonId.split('-')[1];
		$('body').removeClass().addClass(className);
		$('#switcher button').removeClass();
		$('#switcher-'+className).addClass('selected');
		
		if (className == 'default') {
			$('#switcher').on('click',toggleSwitcher);
			}
		};
	$('#switcher button').click(function () {
			var bodyClass = this.id.split('-')[1];
			setBodyClass(bodyClass);
			});
	var triggers = {
			D: 'default',
			L: 'large',
			N: 'narrow'		
		};
	$(document).keyup(function (event) {
		var key = String.fromCharCode(event.which);
		//console.log(event.which);
		if (key in triggers) {
			setBodyClass(triggers[key])
			};
	});	
		
	});
//exercices for chapter 3
$(document).ready(function () {
	var hovering = function () {
		$(this).addClass('hover');
		};
	var unhovering = function () {
			$(this).removeClass('hover');
			};
	$('div.author, h3.chapter-title').hover(hovering, unhovering);		
	$('div.author').click(function () {
		$(this).toggleClass('selected');
		});
	$('h3.chapter-title').dblclick(function () {
		//alert('mama');
		$(this).siblings().toggleClass('hidden');
		});
		var elemWithClass = $('*[class]');
		console.log((elemWithClass).length);
		/*for (e = 0; e<elemWithClass.length; e++) {
			console.log(elemWithClass[e]);
			};*/
		var e = 0;
		$(document).keyup(function (event) {
			//console.log(event.which);
			if (event.which==39) {
				console.log(elemWithClass[e]);
				$(elemWithClass[e]).addClass('hover')
				e++;
				}
			});
		$('*').mousedown(function (event) {
			 	var beginning = event.pageY;
				console.log('beginning='+beginning);
			})
			.mouseup(function (event) {
				var ending = event.pageY;
				console.log('ending='+ending);
			});
		$( "*", document.body ).click(function( event ) {
			var offset = $( this ).offset();
			event.stopPropagation();
			console.log(offset.top);
			});
	});

jQuery(document).ready(function ($) { 
    var $chapter_p = $('.chapter p');
    var chapter_p_class = $chapter_p.attr('class')
    $chapter_p.attr({ class: chapter_p_class + ' inhabitants' });
});