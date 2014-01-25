	var last_group=3;
	var arr=[];
	var localStorageSwitch=1;	
	if(localStorage["arr"]!=undefined){	
		arr=JSON.parse(localStorage["arr"]);
	}else{
		arr=[[3,9,13,18],[4,10,14,19],[5,11,15,21],[6,13,17,22],[8,14,18,23],[9,15,18,23],[10,17,19,24]];	
	}
	if(localStorage["last_group"]){
		last_group=localStorage["last_group"];
		last_group=parseInt(last_group);			
	}
function update(){
	$.getJSON("https://doc-0g-5c-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/oj5dc0vbdmj9bju2u0bi75rmb3fvdih4/1390636800000/06285532911826694826/*/0Bz8Au1s5aGd4MXhhbDVRYjUxbms?h=16653014193614665626&e=download",function(data){
	//$.getJSON("js/store.json",function(data){
	$.each(data,function(key,val){
	arr.push(val);
	});
})
.done(function(){
	localStorage["arr"]=JSON.stringify(arr);
	alert("routine downloaded and updated", arr[7]);
	//theTime("Group"+last_group);
})
.fail(function(){
	alert("Update Failed!\nEither your browser doesn't support AJAX or localStorage or there is no network connection available!");
});
}			
