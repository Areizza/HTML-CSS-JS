jQuery(document).ready(function($){/*get rid of error saying $ is not defined*/
	var slideCount = $("#slider ul li").length; //length is property, width and height are functions
	var slideWidth = $("#slider ul li").width();
	var slideHeight = $("#slider ul li").height();
	var sliderUlWidth = slideCount * slideWidth;

	$("#slider").css({width:slideWidth, height:slideHeight});
	$("#slider ul").css({width:sliderUlWidth, marginLeft:-slideWidth});
	$("#slider ul li:last-child").prependTo('#slider ul');

//function to move through slides
	function moveLeft(){
		$("#slider ul").animate(
			{left:+slideWidth},200, function(){
				$("#slider ul li:last-child").prependTo("#slider ul"); //remove last child and move to beginning
				$("#slider ul").css('left','');
			}
		);
	}
	function moveRight(){
		$("#slider ul").animate(
			{right:+slideWidth},200, function(){
				$("#slider ul li:first-child").appendTo("#slider ul"); //remove last child and move to beginning
				$("#slider ul").css('right','');
			}
		);
	}
	$('a.control_prev').click(function(){
		moveLeft();
	});
	$('a.control_next').click(function(){
		moveRight();
	});

	var play = 0;
	var autoplay;

	$("#checkbox").change(function(){
		if(play == 0){
			autoplay = setInterval(function(){
				moveRight();
			},3000); //3000 milliseconds
			play = 1;
		}else{
			clearInterval(autoplay);
			play = 0;
		}
	});
});
