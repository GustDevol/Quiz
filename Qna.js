
var cn=document.getElementById("counter");
function decreaseCount(){
	var c=Number(cn.textContent);
	if(c>0){
		cn.textContent=c-1;
		
	}
	else{
		
		clearInterval(intervalId);
		setTimeout( function(){
			next();
		},500);
	}
}
var intervalId=setInterval(decreaseCount, 1000);

function next(){
	//location.replace(".../Welcome.html")

}