/*
Author: Felipe Sánchez
Requirements: jQuery 1.12 or +
Desc: Simple script that loads your images and backgrounds only when they are visible to improve the speed of your site.
*/

function isVisibleOnScreen(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + 10;

    return ((elemBottom < docViewBottom) && (elemTop > docViewTop));
}

function loadBg(elem){
	background = elem.attr("data-src");
	elem.css("background-image", "url("+background+")");
	elem.removeAttr("data-src");
}

function loadImg(elem){
	elem.attr("src", elem.attr("data-src"));
	elem.removeAttr("data-src");
}

function checkLazy(){
	if($(".bg-lazy[data-src]").length > 0){
		$(".bg-lazy[data-src]").each(function(){
			if ( isVisibleOnScreen($(this)) ){
				loadBg($(this));
			}
		});
	}
	if($("img.img-lazy[data-src]").length > 0){
		$("img.img-lazy[data-src]").each(function(){
			if ( isVisibleOnScreen($(this)) ){
				loadImg($(this));
			}
		});
	}
}

$(document).ready(function(){
	$(window).scroll(function(){
		checkLazy();
	});
	$(window).load(function(){
		checkLazy();
	});
});