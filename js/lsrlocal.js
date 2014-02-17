	var last_group=3;
	var update_key;
	var arr=[];
	if(localStorage["update_key"]!=undefined){
		update_key="a01";
		localStorage["update_key"]=update_key;
		}else{
	update_key=localStorage["update_key"];
	}
	if(localStorage["arr"]!=undefined){	
		arr=JSON.parse(localStorage["arr"]);
	}else{
		arr=[[3,9,12,18],[4,10,14,20],[5,12,16,21],[6,13,17,22],[7,14,18,23],[9,16,19,24],[10,17,20,1]];	
	}
	if(localStorage["last_group"]){
		last_group=localStorage["last_group"];
		last_group=parseInt(last_group);			
	}
function update(){
	$("#update_button").html("Updating! Please Wait");
	$.getJSON("https://dl.dropboxusercontent.com/s/7thbqehyqwy6khk/store.json",function(data){
	//$.getJSON("js/store.json",function(data){
	console.log(data);
	arr.length=0;	
	$.each(data,function(key,val){
	arr.push(val);
	});
})
.done(function(){
	$("#update_button").html("Check for Updates?");
	localStorage["arr"]=JSON.stringify(arr);
	if(arr[7]==update_key){
	alert("Already Upto Date!! :)");
	}else{
	alert("Routine downloaded and updated as of "+arr[8]);
	localStorage["update_key"]=arr[7];
	}
	//theTime("Group"+last_group);
})
.fail(function(){
	alert("Update Failed!\nEither your browser doesn't support AJAX or localStorage or there is no network connection available!");
});
}
function formupdate(){
	if($("#usrname").val()){
		localStorage["usrname"]=$("#usrname").val();
	}else{
		localStorage["usrname"]="friend";
	}	
	localStorage["last_group"]=$("#usrgrpselect").val();
	theTime(localStorage["last_group"]);
}			
