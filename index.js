let screens =document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue = '';

var array=new Array();
for(var i=0;i<5;i++){
array[i]="";}
var d;
var arr=new Array();
for(var j=0;j<5;j++){
arr[j]="";}
for(item of buttons){	
	setInterval(function () {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var t2=time;
    document.getElementById("6").innerHTML = t2;
    },1000);
	item.addEventListener('click',(e)=>{
	buttonText=e.target.innerText; 
        if(buttonText=='C'){
            screenvalue = "";
        	screens.value = screenvalue;    	
        }
        else if(buttonText== '='){
            screens.value = eval(screenvalue);
            array.shift();arr.shift();
            array[4]=screens.value;
            d=document.getElementById("6").innerHTML;
            arr[4]=d;
        }

        else if(buttonText=='HIS'){
        	if (array[4]!="") {
                document.getElementById("21").innerHTML="HISTORY";
                document.getElementById("17").innerHTML="S.NO";
                document.getElementById("18").innerHTML="TIME";
                document.getElementById("19").innerHTML="OUTPUT";
                document.getElementById("12").innerHTML=1;
        		document.getElementById("1").innerHTML=arr[4];
                document.getElementById("7").innerHTML=array[4];
        	}else{
        		document.getElementById("1").innerHTML=array[4];}

        	if (array[3]!="") {
                document.getElementById("13").innerHTML=2;
        		document.getElementById("2").innerHTML=arr[3];
                document.getElementById("8").innerHTML=array[3];
        	}else{
        		document.getElementById("2").innerHTML=array[3];}
        	if (array[2]!="") {
                document.getElementById("14").innerHTML=3;
        		document.getElementById("3").innerHTML=arr[2];
                document.getElementById("9").innerHTML=array[2];
        	}else{
        		document.getElementById("3").innerHTML=array[2];}
        	if (array[1]!="") {
                document.getElementById("15").innerHTML=4;
        		document.getElementById("4").innerHTML=arr[1];
                document.getElementById("10").innerHTML=array[1];
        	}else{
        		document.getElementById("4").innerHTML=array[1];}
        	if (array[0]!="") {
                document.getElementById("16").innerHTML=5;
        		document.getElementById("5").innerHTML=arr[0];
                document.getElementById("11").innerHTML=array[0];
        	}else{
        		document.getElementById("5").innerHTML=array[0];}
        }
        else{
        	screenvalue =screenvalue + buttonText;
        	screens.value=screenvalue;        	
        }
	})
}
