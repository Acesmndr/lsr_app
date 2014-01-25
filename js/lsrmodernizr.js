$(function(){
Modernizr.load([{
	test:Modernizr.localstorage,
	yep:'js/lsrlocal.js',
	nope:'js/lsroffline.js',
	both:['js/lsrapp.js','js/lsrtimer.js'],
	complete:function(){
		theTime("Group"+last_group);
	}
}]);
if(Modernizr.touch){
	$("#routineDisplay").on("swipeleft",function(){
		  alert("You swiped left!");
	});
	$("#routineDisplay").on("swiperight",function(){
		  alert("You swiped right!");
	});
}
});
