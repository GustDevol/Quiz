var q = [
"Which command is used in linux terminal to remove files ?",
"Which command is used in linux terminal to remove directory ?",
"What is the highest score of Rohit Sharma in ODI cricket ?",
"Against which team M.S. Dhoni got his 1st and only international wicket ?",
"Which of these former Indian cricketer has high score in ODI same as that of M.S. Dhoni ?",
"What is supernova ?",
"What is the full form of HTML",
"Who is the developer of C++ ?",
"Nuclear explosives were tested for the 1st time in India at ___________",
"The first Indian Satellite Aryabhatta was launched in _____________",
"INS VIRAAT servesd the Indian Navy . It was a _____________",
"What is the range of Agni III, the long range ballistic missile, test fired by India ?",
"Who won the 2019 ICC Men's Emerging Cricketer ?",
"Which of these is called the cycling capital of the world ?"
];

var n = q.length

var op = [
"dm,rm,delete,erase",
"rdir,remove,rd,rmdir",
"268,264,218,183",
"Pakistan,Sri Lanka,South Africa,West Indies",
"Sachin Tendulkar,Virender Sehwag,Saurav Ganguly,Rahul Dravid",
"A black hole,A dying star,An asteroid,A commet",
"Hyper Transform markup language,Hyper Text Markup Language,High Text Multimedia Language,Hyper Text Multimedia Language",
"James Gosling,Dennis Ritchie,Bjarne Stroustrup,Yukihiro Matsumoto",
"Sriharikota,Bangalore,Pokhran,Kanchipuram",
"1974,1975,1978,1976",
"Submarine,Gunboat,Aircraft carrier,Freighter",
"2250 km,3500 km,1000 km,5000 km",
"Marcus Labuschagne,Risabh Pant,Pieter Malan,Ollie Pope",
"London,Amsterdam,Budapest,Venice"
];

var sol = [
2,
4,
2,
4,
3,
2,
2,
3,
3,
2,
3,
2,
1,
2
];

 while(true){
  	i = parseInt( Math.random() * n);
  	if(localStorage["status"].indexOf(i.toString()) == -1){
  		localStorage["status"]+= i.toString();
  		break;
  	}
 }
// i = parseInt( Math.random() * n);

document.getElementById("Question").innerHTML = "Q" + localStorage["qCount"].toString() + " . " + q[i];
document.getElementById("A").innerHTML = op[i].split(",")[0];
document.getElementById("B").innerHTML = op[i].split(",")[1];
document.getElementById("C").innerHTML = op[i].split(",")[2];
document.getElementById("D").innerHTML = op[i].split(",")[3];
localStorage["qCount"]++

var cn=document.getElementById("counter");
function decreaseCount(){
	var c=Number(cn.textContent);
	if(c>0){
		cn.textContent=c-1;
		
	}
	else{
		
		clearInterval(intervalId);
		setTimeout( function(){
			alert("Time's Up.\nProceed to the next.");
			//next();
			if(localStorage["qCount"]<=10){
				check();
				window.location.reload(true)
			}
			else{
				check();
				window.location.assign("solutions.html")
			}
		},500);
	}
}
var intervalId=setInterval(decreaseCount, 1000);
function next(){
	// alert(i)
	// alert(localStorage["qCount"])
	// alert(localStorage['status'])
	// document.getElementById("Question").innerHTML== "Q" + localStorage["qCount"].toString() + " . " + q[i+1];
	// alert(document.getElementById("Question").innerHTML) //= "Q" + localStorage["qCount"].toString() + " . " + q[i];
	// alert(op[i].split(",")[0])
	// alert(op[i].split(",")[1])
	// alert(op[i].split(",")[2])
	// alert(op[i].split(",")[3])
	check();
	if(localStorage["qCount"]>10)
		submit();
	
}
function check(){
	// alert(sol[i].toString())
	// alert(document.getElementById(sol[i].toString()).checked)
	if(document.getElementById(sol[i].toString()).checked)
		localStorage["score"]++; 
	return ;
}
function submit(){
	 document.getElementById("question").action="solutions.html";
	 return;
}

