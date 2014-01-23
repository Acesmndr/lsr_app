$(function() {
	theTime("Group 3");
	$("#routineSwitch").show("fast");
	//$("#groupSelectList a").hover(hovered,hovered);
	$("#groupSelectList a").click(function(evt){
		$("#groupDisplay").html(this.id);
		timeFlag=0;
		theTime(this.id);
		$("#groupSelectList").append(this);
		$("#groupSelectSwitch").hide(0);
		$("#routineSwitch").show(0);
	});	
//$("div[class$=sw]").click(pilikpilik);
$("div[class$=Button]").click(pilikpilik);
});		
/*function hovered(){
	$(this).toggleClass("hoverToggle");
	}*/		
function pilikpilik(){
	$("div[id$=Switch]").hide(0);
	$(this).next().show(0);
}
