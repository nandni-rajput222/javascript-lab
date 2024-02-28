// upper to lower
function f(){
    let str="NANDNI";
    let string = str.toLowerCase();
    console.log(string);
}
f();

let words="HeLLoWOrLd";
let res="";
for(let word of words)
{
    if(word=== word.toLowerCase())
    {
        res+=word.toUpperCase();
    }
    else{
        res+=word.toLowerCase();
    }
}
console.log(res);

// radius of circle using array 
let radii=[1,2,3,4,5,6,7];
function calculate(logic)
{
    let res=[];
    for(let radius of radii)
    {
        res.push(logic(radius));
    }
    return res;
}
function area(r)
{
    return Math.PI*r*r;
}
function peri(r)
{
    return 2*Math.PI*r;
}
function vol(r)
{
return 4/3*(Math.PI*r*r*r);
}
function hemi(r)
{
    return 2/3*(Math.PI*r*r*r);
}

console.log(calculate(area));
console.log(calculate(peri));
console.log(calculate(vol));
console.log(calculate(hemi));


