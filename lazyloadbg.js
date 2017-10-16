/*
Author: Felipe Sánchez
Requirements: jQuery 1.12 or +
Desc: Simple script that loads your images and backgrounds only when they are visible to improve the speed of your site.
*/

$.fn.isOnScreen = function(test){
 
    var height = this.outerHeight();
    var width = this.outerWidth();

    if(!width || !height){
        return false;
    }
    
    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;
    
    var showing = {
      top : viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    if(typeof test == 'function') {
      return test(showing);
    }

    return showing.top > 0
      && showing.left > 0
      && showing.right > 0
      && showing.bottom > 0;
};

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
			if ( $(this).isOnScreen() ){
				loadBg($(this));
			}
		});
	}
	if($("img.img-lazy[data-src]").length > 0){
		$("img.img-lazy[data-src]").each(function(){
			if ( $(this).isOnScreen() ){
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
	$(".overflowxx").scroll(function(){
		checkLazy();
	})
});