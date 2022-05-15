const HashTable=require("./hashTable")

function repeatedWord(str) {
    let strArray = str.toLowerCase().split(" ");

    const strHashMap = new HashTable(strArray.length);

    for (let i = 0; i < strArray.length; i++) {
        if (strHashMap.contains(strArray[i])) {
            
            return strArray[i];
        }
        strHashMap.set(strArray[i], strArray[i]);
    }
    return 'No Repeated Word';
}

module.exports=repeatedWord;