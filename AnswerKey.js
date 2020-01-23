p = localStorage["status"];
var s=""+p[0];
loop1: for(var i=1;i<p.length;i++){
            for(var j=0;j<s.length;j++){
                if(p[i]===s[j])
                    continue loop1;
            }
            s+=p[i];
        }
console.log(p,s)


var q = [
"Which command is used in linux terminal to remove files ?",
"Which command is used in linux terminal to remove directory ?",
"What is the highest score of Rohit Sharma in ODI cricket ?",
"Against which team M.S. Dhoni got his 1st and only international wicket ?",
"Which of these former Indian cricketer has high score in ODI same as that of M.S. Dhoni ?",
"What is supernova ?",
"What is the full form of HTML ?",
"Who is the developer of C++ ?",
"Nuclear explosives were tested for the 1st time in India at ___________ .",
"The first Indian Satellite Aryabhatta was launched in _____________ .",
"INS VIRAAT servesd the Indian Navy . It was a _____________ .",
"What is the range of Agni III, the long range ballistic missile, test fired by India ?",
"Who won the 2019 ICC Men's Emerging Cricketer ?",
"Which of these is called the cycling capital of the world ?"
];

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

// p=document.getElementsByTagName("p");
// console.log(s)
for(let  i=0; i<20 ; i=i+2){
    j=parseInt(i/2)
    //console.log(Number(s[j]),i,j,);
    Q   =Number(s[j])
    ans =op[Q].split(",")[sol[Q]-1];
    n   =j+1;
    document.getElementsByTagName("p")[i].innerHTML     = "Q"+n+" . "+q[Q];
    document.getElementsByTagName("p")[i+1].innerHTML   = "Answer : "+ans;
}
