// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.


//listing 5.1 & 5.2 , 5.3 adding ID to each link, 5.4 selecting only wikipedia links
// 5.5 making every title different by adding (this).text inside each title

$(document).ready(function () {
	$('div.chapter a[href*="wikipedia"]').attr({rel:'external', 
	title:function () {
		return 'Learn more at '+$(this).text()+' wikipedia';
		},
	id: function (index, oldValue) {
	return 'wikilink-'+index;
	}
	});
});

//listing 5.6-5.8 inserting DOM elements
/*
$(document).ready(function () {
	$('<a href="#top">back to top</a>').insertAfter('div.chapter p');
	$('<a id ="top"></a>').prependTo('body');
	});
*/
//listing 5.9 5.10 adding an ordered list of footnotes (inplicit iteration)
/*
$(document).ready(function () {
	$('span.footnote').insertBefore('#footer')
		.wrapAll('<ol id = "notes"></ol>')
		.wrap('<li></li>');
	});
*/
//listing 5.11 explicit iteration 5.12 making signs  where footnotes where so it can be clear what each footnote explains
/*
$(document).ready(function () {
	var $notes = $('<ol id = "notes"><ol>').insertBefore('#footer');
	$('span.footnote').each(function (index) {
		$('<sup>'+(index+1)+'</sup>').insertBefore(this);
		$(this).appendTo($notes).wrap('<li></li>');
	});
});
*/
//listing 5.13 using inverted insertion methods to exploit chaining to perform multiple actions at the same time
//listin 5.14 using an array and join function on .before
/*
$(document).ready(function () {
	var $notes = $('<ol id = "notes"><ol>').insertBefore('#footer');
	$('span.footnote').each(function (index) {
		$(this) //.before('<sup>'+(index+1)+'</sup>')
			.before(['<sup>',index+1,'</sup>'].join(''))
			.appendTo($notes)
			.wrap('<li></li>');
	});
});
*/
//listing 5.15 making links from indexes in text to footnotes
//listing 5.16 making links from footnotes to context

$(document).ready(function () {
	var $notes = $('<ol id = "notes"><ol>').insertBefore('#footer');
	$('span.footnote').each(function (indexfoot) {
		var num = indexfoot+1;
		var anchorLink=['<a href="#footnote-',num,'"id ="context-',num,'"class="context">','<sup>',num,'</sup>','</a>']
			.join('');
		//console.log(num);
		//console.log(anchorLink);
		$(this) 
			.before(anchorLink)
			.appendTo($notes)
			.append(['&nbsp; (<a href="#context-',num,'">context</a>)'].join(''))
			.wrap('<li id = "footnote-'+num+'"></li>');
	});
});

//listing 5.18 & 5.19 substituting text inside span.drop with ellipsis (...), 5.20 removing bold text with text method

$(document).ready(function () {
	$('span.pull-quote').each(function () {
		var $pullParent = $(this).parent('p');
		$pullParent.css('position','relative');
		$(this).clone().addClass('pulled')
			.find('span.drop')
				.html('&hellip;')
			.end()
			.text($(this).text())
			.prependTo($pullParent);
		});
	});

//exercise for chapter 5

$(document).ready(function () {
	$('div.chapter p').each(function (eachP) {
		//console.log(eachP);
		if (eachP>2) {
			$(this).after('<a href="#top">back to top</a>');};
			});
	$('<a id ="top"></a>').prependTo('body');
	$('div.chapter a[href="#top"]').click(function () {
		$(this).after('<p><b>You were here</b></p>');	
		});
	var b = 0;
	$('#f-author').click(function () {
		if (b == 0) {
			$(this).wrap('<b></b>');
			b=1;
			} else {
				$(this).unwrap();
				b=0;
				};
		});
	$('div.chapter p').attr({class:'inhabitants'});
	});
