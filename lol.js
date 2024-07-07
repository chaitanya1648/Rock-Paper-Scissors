const dispPage = (sym)=>{
   if(document.getElementById("21").innerHTML == 5){
      document.getElementById("19").innerHTML="YOU WON AGAINST PC";
   } 
   else if (document.getElementById("22").innerHTML == 5) {
      document.getElementById("19").innerHTML="PC WON AGAINST YOU";
   } 
         document.getElementById("13").style.display="none";
         document.getElementById("14").style.display="flex";
         if(sym == 'Rock')
         {
            document.getElementById("16").src="Rock.png";
         }
         else if (sym =='Paper') {
            document.getElementById("16").src="Paper.png";
         } else {
            document.getElementById("16").src="Scissors.png";
         }
         let cppHand=pcChoice();
         pointsReview(sym,cppHand);
      }
const pcChoice=()=>{
let choices=["Rock","Paper","Scissors"]
let pChoice=choices[Math.floor(Math.random()*3)]
console.log(pChoice);

if(pChoice == 'Rock')
         {
            document.getElementById("17").src="Rock.png";
         }
         else if (pChoice =='Paper') {
            document.getElementById("17").src="Paper.png";
         } else {
            document.getElementById("17").src="Scissors.png";
         }
         return pChoice;
}

const pointsReview = (hand,cppHand)=>{
   var res=document.getElementById("19");
   var sco=document.getElementById("21");
   var scot=document.getElementById("22");

         if(hand=="Paper" && cppHand=="Rock"){
            res.innerHTML="YOU WIN";
            // sco.innerHTML+=1;
            sco.innerHTML=parseInt(sco.innerHTML)+1;
         }
         else if (hand=="Paper" && cppHand=="Scissors") {
            res.innerHTML="YOU LOSE";
            // scot.innerHTML+=1;
            scot.innerHTML=parseInt(scot.innerHTML)+1;
         }
         else if(hand=="Paper" && cppHand=="Paper"){
            res.innerHTML="IT'S A TIE";          
         }
         else if (hand=="Rock" && cppHand=="Scissors") {
            res.innerHTML="YOU WIN";
            sco.innerHTML=parseInt(sco.innerHTML)+1;
         }
         else if(hand=="Rock" && cppHand=="Rock"){
            res.innerHTML="IT'S A TIE";          
         }
         else if (hand=="Rock" && cppHand=="Paper") {
            res.innerHTML="YOU LOSE";
            scot.innerHTML=parseInt(scot.innerHTML)+1;
         }
         else if(hand=="Scissors" && cppHand=="Rock"){
            res.innerHTML="YOU LOSE" ;   
            scot.innerHTML=parseInt(scot.innerHTML)+1;     
         }
         else if (hand=="Scissors" && cppHand=="Scissors") {
            res.innerHTML="IT'S A TIE";
         }
         else {
            res.innerHTML="YOU WIN"; 
            sco.innerHTML=parseInt(sco.innerHTML)+1;  
         }}
         
         const backTo=()=>{
            document.getElementById("13").style.display="flex";
            document.getElementById("14").style.display="none";
         }
         if(document.getElementById("21") == 5){
            document.getElementById("19").innerHTML="YOU WON AGAINST PC";

         } 
         else if (document.getElementById("22") == 5) {
            document.getElementById("19").innerHTML="PC WON AGAINST YOU";
         } 
         document.getElementById("19").innerHTML="YOU WON AGAINST PC";