var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
var now=new Date();
var today=now.getDay();
var daytemp=0;
var parser;
var hrs=now.getHours();
//if(hrs==0){hrs=24;}
var timer_hr,grp,grp_no;
var flag=0;
var intid;
var sc=59;
var mn;
$(".current_day").html(", "+now.getDate()+"<sup>st</sup> "+month[now.getMonth()]+" "+now.getFullYear());
var timeFlag=0,dayDisp,dayToggle,rotateFlag=0;
var timeTemp,times,timesuffix;
//-------------------------------------------var last_group;----------------------------moved to lsrlocal
$(function(){
/*if((typeof(Storage)!=="undefined")&&(localStorage["last_group"]!=="undefined")){
	last_group=localStorage["last_group"];
	last_group=parseInt(last_group);
	if(localStorage["arr"]){	
		arr=JSON.parse(localStorage["arr"]);
	}
	if(!localStorage["arr"]){
		arr=[[3,9,13,18],[4,10,14,19],[5,11,15,21],[6,13,17,22],[8,14,18,23],[9,15,18,23],[10,17,19,24]];	
	}
	if(!localStorage["last_group"]){
		last_group=3;
	}			
	}
else{
  last_group=3;
  arr=[[3,9,13,18],[4,10,14,19],[5,11,15,21],[6,13,17,22],[8,14,18,23],[9,15,18,23],[10,17,19,24]];
  }*/
//--------------------------------------------------theTime("Group"+last_group);-----------------shifted to Modernizr complete
$("#dayDisplay").html(day[today]);
$("#prv").click(function(){
	rotateFlag=1;
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
	theTime("Group"+dayToggle);
	});
$("#nxt").click(function(){
	rotateFlag=1;
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
	theTime("Group"+dayToggle);
	});
});
function theTime(group_catch){
		mn=60-now.getMinutes()-1;
		clearInterval(intid);
		flag=0;
		var grp_catch = group_catch.substring(5,6);
		grp=parseInt(grp_catch);
		grp_no=grp-today-1;
		if(grp_no<0){
				grp_no=7+grp_no;
				}
		for(var i=0;i<6;i=i+2){			
			if(arr[grp_no][i]!=undefined){
				if(arr[grp_no][i]>12){
					timeTemp=arr[grp_no][i]-12;
					timesuffix=" pm  - ";
				}else{
					timeTemp=arr[grp_no][i];
					timesuffix=" am  - ";
				}
				if(arr[grp_no][i]%1==0.5){
					timeTemp=Math.floor(timeTemp);
					timesuffix=":30"+timesuffix;
				}
				times=timeTemp+timesuffix;
				if(arr[grp_no][i+1]>12){
					timeTemp=arr[grp_no][i+1]-12;
					timesuffix=" pm ";
				}else{
					timeTemp=arr[grp_no][i+1];
					timesuffix=" am ";
				}
				if(arr[grp_no][i+1]%1==0.5){
					timeTemp=Math.floor(timeTemp);
					timesuffix=":30"+timesuffix;
				}
				times=times+timeTemp+timesuffix;		
				$("#timer"+i).html(times);
			}else{
				$("#timer"+i).html(" ");
			}
			if((arr[grp_no][i]!=undefined)&&(flag==0))
			{
				if((hrs>=arr[grp_no][i])&&(hrs<arr[grp_no][i+1])){
					if(((arr[grp_no][i]%1)==0.5)&&(mn>30)){
						timer_hr=0;
						mn=mn-30;
						flag=1;
					}else{											
							timer_hr=arr[grp_no][i+1]-hrs-1;
							if((arr[grp_no][i+1]%1)==0.5){
								mn=30+mn;
								if(mn>59){
									timer_hr++;
									mn-=60;
									}
							}
					flag=2;
					}
						
					
								
				}else{
					if(hrs<arr[grp_no][i]){
						timer_hr=arr[grp_no][i]-hrs-1;
						if((arr[grp_no][i]%1)==0.5){
								mn=30+mn;
								if(mn>59){
									timer_hr++;
									mn-=60;
									}
								}
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
			if((arr[grp_no-1][0]%1)==0.5){
								mn=30+mn;
								if(mn>59){
									timer_hr++;
									mn-=60;
									}
								}
			flag=1;
			}
		timer_hr=Math.floor(timer_hr);
		$("#timeRemain").removeClass();
	if(flag==1){
			$("#timeRemain").addClass("timeRemain2");
			$("on_off").html("Lights On");
			
		}else{
			$("#timeRemain").addClass("timeRemain1");
			$("on_off").html("Lights Off")
		}
	if(timeFlag==0)
	{
		if(rotateFlag==0){
		$("#groupDisplay").html("Group "+grp);
		if(Modernizr.localstorage){
		localStorage["last_group"]=grp;
		}
		}
		$("#dayDisplay").html(day[today]);
		//$("#timeRemain").show();
		intid=setInterval(function(){timer(group_catch);},1000);
	}else{
		$("#timeRemain").html("-");
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

