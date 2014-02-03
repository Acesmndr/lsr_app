$(function() {
	$("#routineSwitch").show(0);
	$("#groupSelectList a").click(function(evt){
		//$("#groupDisplay").html(this.id);
		timeFlag=rotateFlag=0;
		theTime(this.id);
		//$("#groupSelectList").append(this);
		$("#groupSelectSwitch").hide(0);
		$("#routineSwitch").show(0);
	});	
$("div[class$=Button]").click(pilikpilik);
$("#update_button").click(update);
$("#communityicon").click(function(){
	$("#home").hide(0);
	$("#community").show(0);
});
$("#homeicon").click(function(){
	$("#community").hide(0);
	$("#home").show(0);
});
$(".listIcon").click(function(){
	$("#list").toggle(200);
	});
});		
function pilikpilik(){
	$("div[id$=Switch]").hide(0);
	$(this).next().show(0);
}

