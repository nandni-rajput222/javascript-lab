let str='The sky is blue';
//  op- Blue is sky The
console.log(str.split(" ").reverse().join(" "));

// op-ehT yks si eulb
let words=str.split(" ");
let res="";
for(let word of words){
    res+=word.split("").reverse().join("")+" ";
}
console.log(res);

// --task 2---check unique words
let str1="this is some is this data dummy this this is";
let words1 = str1.split(" ");
let set= new Set(words1);
let res1 = Array.from(set);
console.log(res1.join(" "));

