$(document).ready(function(){
  $('.home-slider').slick({
      dots: false,
	  infinite: true,	
	autoplay:true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  rtl:true,
	  // arrows:false,
	  prevArrow:".prevArrow",
	  nextArrow:".nextArrow",
	});
});