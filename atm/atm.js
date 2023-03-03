
function inOut(value){
	var inbnk = value;
	if(inbnk =="0"){
		document.getElementById("next1").style.cssText="display: none;";
		document.getElementById("next2").style.cssText="display: inline-block;";
	}
	else if(inbnk=="1"){
		document.getElementById("loc").style.cssText="display: inline-block;";
		document.getElementById("next1").disabled=false;
		
	}
}
var loc;
function getLoc(value){
	  loc = value;
}
function chooseBank(){
	 document.getElementById("loc").style.cssText="display: none;"
	 document.getElementById("inbank").style.cssText="display: none;"
	document.getElementById("next1").style.cssText="display: none;";
		if(loc=="2"){

			document.getElementById("bnkloc").style.cssText="display: inline-block;";	
		
		}
		else if(loc=="1"){
			document.getElementById("bankint").style.cssText="display: inline-block;";	
			
		}
		
		document.getElementById("next2").style.cssText="display: none;";
	

}
function enterInfo(){
	document.getElementById("inbank").style.cssText="display: none;"
		document.getElementById("next2").style.cssText="display: none;";

	document.getElementById("info").style.cssText="display: inline-block;";
	document.getElementById("bnkloc").style.cssText="display: none;";
	document.getElementById("bankint").style.cssText="display: none;";
}
var accno;
var transamount;
function transProcess(){
	 accno = document.getElementById("accno").value;
	 transamount = document.getElementById("transamount").value;
	document.getElementById("info").style.cssText="display:none;";
	document.getElementById("show").style.cssText="display: inline-block;";
	document.getElementById("showp").innerHTML = "Account Number : "+accno;
	document.getElementById("showp2").innerHTML = "Amount to be transferred : "+transamount;


}
function confirm(){
	accountBal = accountBal - transamount;
	
}