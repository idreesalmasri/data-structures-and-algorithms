"use strict";
function hashmapLeftJoin(hashMapA, hashMapB) {
    let output = [];
    hashMapA.map.forEach(element => {
        Object.keys(element.head.value).forEach((key) => {
            output.push([key, hashMapA.get(key), hashMapB.get(key)]);
        });
    });
    return output;
}


module.exports = hashmapLeftJoin;