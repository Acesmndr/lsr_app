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
$("#updateIcon").click(update);
$("#communityicon").click(function(){
	$("#home").hide(0);
	$("#community").show(0);
	$("#aboutapp").hide(0);
	$("#setting").hide(0);
});
$("#homeicon").click(function(){
	$("#community").hide(0);
	$("#home").show(0);
	$("#aboutapp").hide(0);
	$("#setting").hide(0);
});
$("#infoIcon").click(function(){
	$("#community").hide(0);
	$("#home").hide(0);
	$("#aboutapp").show(0);
	$("#setting").hide(0);
});
$("#settingIcon").click(function(){
	$("#community").hide(0);
	$("#home").hide(0);
	$("#setting").show(0);
	$("#aboutapp").hide(0);
});

$(".listIcon").click(function(){
	$("#list").toggle(200);
	});
});		
function pilikpilik(){
	$("div[id$=Switch]").hide(0);
	$(this).next().show(0);
}

