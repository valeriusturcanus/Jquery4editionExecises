// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready( function () {
	$("#selected-plays > li").addClass("horizontal");
	$("#selected-plays li:not(.horizontal)").addClass("sub-level");
	$("a[href^='mailto:']").addClass("mailto");
	$("a[href$='.pdf']").addClass("pdflink");
	$("a[href^='http'][href*='henry']").addClass("henrylink");
	$('tr:nth-child(2n+1)').addClass('alt');
//	$('td:contains(Henry)').parent().children().addClass('highlight');
	$('a').filter(function () {
//		console.log(this.hostname);		
		return this.hostname != location.hostname;
		}).addClass('external');
	$('td:contains(Henry)')
	.parent()
	.find('td:eq(1)').addClass('highlight')
	.end().find('td:eq(0)').addClass('highlight');
	$('li>ul>li').children().children().addClass('special');	
	$('td:nth-child(3)').addClass('year');
	$('tr:contains(Tragedy):first').addClass('special');
	$('li>a').parent().addClass('afterlink');
	$("li>a[href$='pdf']").parent().parent().addClass("tragedy");	});
	