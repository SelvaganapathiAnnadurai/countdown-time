const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds =document.querySelector("#seconds");



function UpdateTime(){
const currentYear = new Date().getFullYear();

const myBirthday = new Date(`july 31 ${currentYear} 07:10:00`);
//console.log(myBirthday);

const currentDate=new Date();
//console.log(currentDate);

const diff=myBirthday-currentDate;
//console.log(diff/1000/60/60/24);
const d = Math.floor(diff/1000/60/60/24);
const hr=Math.floor((diff/1000/60/60)%24);
//console.log(hr);

const min=Math.floor((diff/1000/60)%60);
//console.log(min);

const sec=Math.floor((diff/1000)%60);
//console.log(sec);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=hr<10?"0"+hr:hr;
minutes.innerHTML=min<10?"0"+min:min;
seconds.innerHTML=sec<10?"0"+sec:sec;

}
setInterval(UpdateTime,1000);
 

