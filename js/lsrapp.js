$(function() {
	/*$("#routineSwitch").show(0);
	$("#groupSelectList a").click(function(evt){
		//$("#groupDisplay").html(this.id);
		timeFlag=rotateFlag=0;
		theTime(this.id);
		//$("#groupSelectList").append(this);
		$("#groupSelectSwitch").hide(0);
		$("#routineSwitch").show(0);
	});	
$("div[class$=Button]").click(pilikpilik);*/
$("#updateIcon").click(update);
$("#communityicon").click(function(){
	weekSchedule();
	$(".selectDiv").hide(0);
	$("#community").show(0);
	});
$("#homeicon").click(function(){
	$(".selectDiv").hide(0);
	$("#home").show(0);
	});
$(".title").click(function(){
	$(".selectDiv").hide(0);
	$("#home").show(0);
	});
$("#infoIcon").click(function(){
	$(".selectDiv").hide(0);
	$("#aboutapp").show(0);
	});
$("#settingIcon").click(function(){
	$(".selectDiv").hide(0);
	$("#setting").show(0);
	});
$("#developersIcon").click(function(){
	$(".selectDiv").hide(0);
	$("#developers").show(0);
	});
$(".listIcon").click(function(){
	$("#list").toggle(0);
	});
$(".groupNumber").click(function(){
	var group_catch=this.id;
	console.log(group_catch);
	group_catch=group_catch.charAt(group_catch.length-1);
	grp=parseInt(group_catch);
	weekSchedule();
});
$("#usrform").submit(function(){
	formupdate();
	return false;
});
});		
/*function pilikpilik(){
	$("div[id$=Switch]").hide(0);
	$(this).next().show(0);
}*/

