var arr=[[3,9,12,18],[4,10,14,20],[5,12,16,21],[6,13,17,22],[7,14,18,23],[9,16,19,24],[10,17,20,1]];
var last_group=1;
function update(){
	alert("The update functionality is not possible in your device as it doesn't support localStorage! Please visit our website for the updated version if it is available!");
	}
function formupdate(){
	alert("Sorry,This feature isn't available as your browser doesn't support Local Storage!!");
	return false;
}
$(function(){
	weekSchedule();
	$(".selectDiv").hide(0);
	$("#community").show(0);
});
