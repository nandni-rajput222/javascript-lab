let input = document.querySelectorAll('input');
let span= document.querySelector('span');
let data = Array.from(input);
let btn=document.querySelector('#btn')
let age1=document.querySelector("#age1");
console.log(data[0]);


function validate()
{
   let naam =data[0].value.length;
   if(naam<=3){
    span.innerText="**Name is too short";
    btn.type="hidden"
   } 
   if(naam==0){
    span.innerText="**Name can't Empty";
    btn.type="hidden";
   }
   if(data[1].value<=17){
    age1.innerText="**you are not eligible to vote";
    btn.type="hidden";
  }
}
