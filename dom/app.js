// style without  css folder
let h1=document.querySelector('h1');
h1.style.color="purple";
h1.style.border="3px dotted pink";
h1.style.textAlign="center";
h1.backgroundcolor="black";
h1.innerText="head";
console.log(h1);
// ---by classname
let h1=document.getElementsByClassName('btn');
let data=Array.from(h1);
console.log(data);
for(let item of data)
{
    item.style.height="100px"
    item.style.width ="300px"
    item.style.border="2pc solid black"
    item.style.borderRadius="12px"
    
    console.log(item)
}
// ---by all queryselector
let h1=document.querySelectorAll('btn');
 let data=Array.from(h1);
 console.log(data);
 for(let item of data)
 {
     item.style.height="100px"
    item.style.width ="300px"
     item.style.border="2pc solid black"
     item.style.borderRadius="12px"
    
    console.log(item)
}



