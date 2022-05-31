"use srtict"

const HashTable = require('../hashtable/hashTable');
function mostCommonWord(text){
    let strArr = text.toLowerCase().match(/\w+/g);
    const strHash = new HashTable(strArr.length);
    let max=0;
    for (let i = 0; i < strArr.length; i++) {
        if (strHash.contains(strArr[i])) {
            strHash.set(strArr[i], strHash.get(strArr[i])+1);
        } else {
            strHash.set(strArr[i], 1);
        }
        if(strHash.get(strArr[i])>max){
            max=strHash.get(strArr[i]);
        }
    }
    for(let i=0;i < strArr.length; i++){
        if (strHash.get(strArr[i])===max){
           return strArr[i];
        }
    }
}
  console.log(mostCommonWord("In a galaxy far far away"))
  console.log(mostCommonWord("No. Try not. Do or do not. There is no try."))
  console.log(mostCommonWord("Taco cat ate a taco"))
   module.exports=mostCommonWord;