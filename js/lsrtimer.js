var arr=[[3,9,13,18],[4,10,14,19],[5,11,15,21],[6,13,17,22],[8,14,18,23],[9,15,18,23],[10,17,19,24]];
var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var now=new Date();
var today=now.getDay();
var daytemp=0;
var hrs=now.getHours();
//if(hrs==0){hrs=24;}
var timer_hr,grp,grp_no;
var flag=0;
var mn,sc,intid;
var timeFlag=0,dayDisp,dayToggle;
var timeTemp;
$(function(){	
$("#dayDisplay").html(day[today]);
$("#prv").click(function(){
	timeFlag--;
	dayDisp=today+timeFlag;
	if(timeFlag==-1){
		timeFlag=6;
	}
	if(dayDisp<0){
		dayDisp=7+dayDisp;
	}
	if(dayDisp>6){
		dayDisp=dayDisp-7;
	}
	$("#dayDisplay").html(day[dayDisp]);
	dayToggle=grp+1;
	if(dayToggle>6){
		dayToggle=0;
	}
	theTime("Group "+dayToggle);
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
	$("#dayDisplay").html(day[dayDisp]);
	dayToggle=grp-1;
	if(dayToggle<0){
		dayToggle=6;
	}
	theTime("Group "+dayToggle);
	});
});
function theTime(group_catch){
		clearInterval(intid);
		flag=0;
		var grp_catch = group_catch.substring(6,7);
		grp=parseInt(grp_catch);
		grp_no=grp-today-1;
		if(grp_no<0){
				grp_no=7+grp_no;
				}
		for(var i=0;i<6;i=i+2){			
			if(arr[grp_no][i]!=undefined){
				if(arr[grp_no][i]>12){
					timeTemp=(arr[grp_no][i]-12)+" pm  - ";
				}else{
					timeTemp=arr[grp_no][i]+" am  - ";
				}
				if(arr[grp_no][i+1]>12){
					timeTemp=timeTemp+(arr[grp_no][i+1]-12)+" pm";
				}else{
					timeTemp=timeTemp+arr[grp_no][i+1]+" am";
				}		
				$("#timer"+i).html(timeTemp);
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
		if(flag==0){
			if((grp_no-1)==-1){
				grp_no=7;
			}
			timer_hr=arr[grp_no-1][0]+24-hrs-1;
			flag=1;
			}
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
		$("#dayDisplay").html(day[today]);
		//$("#timeRemain").show();
		intid=setInterval(function(){timer(group_catch);},1000);
	}else{
		$("#timeRemain").html("...");
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
			
