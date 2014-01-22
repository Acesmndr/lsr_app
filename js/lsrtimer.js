var arr=[[3,9,13,18],[4,10,14,19],[5,11,15,21],[6,13,17,22],[8,14,18,23],[9,15,18,23],[10,17,19,24]];
var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var now=new Date();
var today=now.getDay();
var days=day[today];
var hrs=now.getHours();
//if(hrs==0){hrs=24;}
console.log(hrs);
var timer_hr,grp,grp_no;
var flag=0;
var mn,sc,intid;
$(function(){
$("#dayDisplay").html(days);

});
function theTime(group_catch){
		flag=0;
		clearInterval(intid);
		var grp_catch = group_catch.substring(6,7);
		console.log(grp_catch);
		grp=parseInt(grp_catch);
		console.log(grp);
		grp_no=grp-today-1;
		if(grp_no<0){
				grp_no=7+grp_no;
				}
		for(var i=0;i<6;i=i+2){			
			console.log(grp_no);
			console.log("the array of group no",i,arr[grp_no][i]);
			if(arr[grp_no][i]!=undefined){
				$("#timer"+i).html(arr[grp_no][i]+"am - "+arr[grp_no][i+1]+"am");
				}
			else{
				$("#timer"+i).html(" ");
			}
			if((arr[grp_no][i]!=undefined)&&(flag==0))
			{
				if((hrs>=arr[grp_no][i])&&(hrs<arr[grp_no][i+1])){
					timer_hr=arr[grp_no][i+1]-hrs-1;
					flag=2;			
				}else{
					if(hrs<arr[grp_no][i]){
						timer_hr=arr[grp_no][i]-hrs-1;
						flag=1;
						}	
					}
			}	
		}
		console.log(flag);
		if(flag==0){
			timer_hr=arr[grp_no-1][0]+24-hrs-1;
			flag=1;
			}
		console.log(flag);
		$("#timeRemain").removeClass();
	if(flag==1){
		$("#timeRemain").addClass("timeRemain2");
		}else{
		$("#timeRemain").addClass("timeRemain1");
		}
	sc=59;
	mn=60-now.getMinutes()-1;
	intid=setInterval(function(){timer(group_catch);},1000);
	}
function timer(group_catch){
	sc--;
	if(sc==0){
		mn--;
		if(mn==0){
			timer_hr--;
			if(timer_hr==0){
				clearInterval(intid);
				theTime(group_catch);
				}
			}
		}
	$(timeRemain).html(timer_hr+" : "+mn+" : "+sc);
}
				
