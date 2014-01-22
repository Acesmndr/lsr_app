$(function() {
	theTime("Group 3");
	$("#routineSwitch").show(750);
	$("#groupSelectList a").hover(hovered,hovered);
	$("a").click(function(evt){
	$("#groupDisplay").html(this.id);
	theTime(this.id);
	$("#groupSelectList").prepend(this);
	$("#groupSelectSwitch").fadeOut(500);
	$("#routineSwitch").show(500);
});	
//$("div[class$=sw]").click(pilikpilik);
$("div[class$=Button]").click(pilikpilik);
});		
function hovered(){
	$(this).toggleClass("hoverToggle");
	}		
function pilikpilik(){
	$("div[id$=Switch]").fadeOut(500);
	$(this).next().show(500);
}
