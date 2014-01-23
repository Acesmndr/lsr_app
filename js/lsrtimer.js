var arr=[[3,9,13,18],[4,10,14,19],[5,11,15,21],[6,13,17,22],[8,14,18,23],[9,15,18,23],[10,17,19,24]];
var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var now=new Date();
var today=now.getDay();
var days=day[today];
var daytemp=0;
var hrs=now.getHours();
//if(hrs==0){hrs=24;}
console.log(hrs);
var timer_hr,grp,grp_no;
var flag=0;
var mn,sc,intid;
var timeFlag=0,dayDisp;
$(function(){	
$("#dayDisplay").html(day[today]);
$("#prv").click(function(){
	timeFlag--;
	if(timeFlag==-1){
	timeFlag=6;
	}
	dayDisp=today+timeFlag;
	console.log("The daydisplay is",dayDisp);
	if(dayDisp<0){
	dayDisp=7+Daydisp;
	}
	if(dayDisp>6){
	dayDisp=dayDisp-7;
	}
	$("#dayDisplay").html(day[dayDisp]);
	theTime("Group "+dayDisp);
	});
$("#nxt").click(function(){
	timeFlag++;
	if(timeFlag==7){
	timeFlag=0;
	}
	dayDisp=today+timeFlag;
	if(dayDisp>6){
	dayDisp=dayDisp-7;
	}
	console.log("The daydisplay is",dayDisp);
	$("#dayDisplay").html(day[dayDisp]);
	console.log(grp);
	theTime("Group "+dayDisp);
	});
});
function theTime(group_catch){
		clearInterval(intid);
		var grp_catch = group_catch.substring(6,7);
		console.log(grp_catch,timeFlag);
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
	if(timeFlag==0)
	{
	//$("#timeRemain").show();
	intid=setInterval(function(){timer(group_catch);},1000);
	}else{
	$("#timeRemain").html(" ");
	}

}
function timer(group_catch){
	sc--;
	if(sc<0){
		sc=59;
		mn--;
		if(mn<0){
			mn=59;
			timer_hr--;
			if(timer_hr<0){
				clearInterval(intid);
				theTime(group_catch);
				}
			}
		}
		var mntemp,sctemp,hrtemp;
		(timer_hr<10)?(hrtemp="0"+timer_hr):(hrtemp=timer_hr);
		(mn<10)?(mntemp="0"+mn):(mntemp=mn);
		(sc<10)?(sctemp="0"+sc):(sctemp=sc);
		$("#timeRemain").html(hrtemp+" : "+mntemp+" : "+sctemp);
		
}
			
