// -----frequency count 
// function countWordFrequency(str){
//     let words = str.toLowerCase().split(' ');
//     let WordFrequency = {};
//     for(let word of words){
//         if(WordFrequency[word]){
//             WordFrequency[word]++;
//         }else{
//             WordFrequency[word]=1;
//         }
//     }
//     return WordFrequency;
// }
// let text="this is hello word this is word";
// console.log(countWordFrequency(text));

// console.log("hello");

// ----map 
let words=str.split(' ');
console.log(words);
const map=new Map();
for(let word of words){
    if(map.has(word))
    {
        map.set(word,map.get(word)+1);
    }
    else{
        map.set(word,1);
    }
}
console.log(map);