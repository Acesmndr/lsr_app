var arr=[[3,9,13,18],[4,10,14,19],[5,11,15,21],[6,13,17,22],[8,14,18,23],[9,15,18,23],[10,17,19,24]];
 $(function() {
$("#routineSwitch").show(750);
$("#groupSelectList a").hover(hovered,hovered);
$("a").click(function(evt){
	$("#timer1").html(arr[0][0]+" - "+arr[0][1]);
	$("#timer2").html(arr[0][0]+" - "+arr[0][1]);
	$("#timer3").html(arr[0][0]+" - "+arr[0][1]);
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
