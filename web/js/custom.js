var wi = (document.getElementsByClassName("big-card")[0].offsetWidth)/2-30;
var x = document.getElementsByClassName("half");
var i;
for (i = 0; i < x.length; i++) {
	x[i].style.width = wi+"px";
}

// $.fn.attachDragger = function(){
//     var attachment = false, lastPosition, position, difference;
//     $( $(this).selector ).on("mousedown mouseup mousemove",function(e){
//         if( e.type == "mousedown" ) attachment = true, lastPosition = [e.clientX, e.clientY];
//         if( e.type == "mouseup" ) attachment = false;
//         if( e.type == "mousemove" && attachment == true ){
//             position = [e.clientX, e.clientY];
//             difference = [ (position[0]-lastPosition[0]), (position[1]-lastPosition[1]) ];
//             $(this).scrollLeft( $(this).scrollLeft() - difference[0] );
//             $(this).scrollTop( $(this).scrollTop() - difference[1] );
//             lastPosition = [e.clientX, e.clientY];
//         }
//     });
//     $(window).on("mouseup", function(){
//         attachment = false;
//     });
// }


var i = 0;
$(".graphic li").each(function(){
	$(this).children("p").text(++i);
})

$(".fill").each(function(){
	$(this).css({
		"height" : $(this).attr('value')+"px"
	})
})

// $(document).ready(function(){
//  $(".graphic-canvas").attachDragger();
// });

var x = document.getElementsByClassName("bar");
$(".graphic").css({
	"width" : (x.length*40)+"px"
})

$("#apply-loan").click(function(){
	$("#loan-pop-bg").fadeIn();
	$("#loan-pop").css({
		"top": "50%",
		"transform": "rotateY(0deg)  scale(1)"
	});
})

var limit = 99;

$("#loan-val").keypress(function validate(evt) {
	var theEvent = evt || window.event;

		// Handle paste
	if (theEvent.type === 'paste') {
		ey = event.clipboardData.getData('text/plain');
	} else {
		// Handle key press
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9]|\./;
	if( !regex.test(key)) {
		theEvent.returnValue = false;
		if(theEvent.preventDefault) theEvent.preventDefault();
	}

	if($(this).val()+key > limit)
	{
		$("input[type='text']").css({
			'border-bottom':' 1px solid red'
		})
	} else {
		$("input[type='text']").css({
			'border-bottom':' 1px solid #cbcbcb'
		})
	}
})

$("#loan").submit(function(event){
	event.preventDefault();

	$.ajax({
		type: "POST",
		url: "URL",
		data: "name=",
		success : function(text){
			console.log(text);
		}
	});
})

$("#cancel").click(function(){
	$("#loan-pop-bg").fadeOut();
	$("#loan-pop").css({
		"top": "20%",
		"transform": "rotateY(180deg) scale(0.1)"
	});
})