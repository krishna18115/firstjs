/*
const output = longestword('aratikatlaramachandrarao  venkatakrishna krishna rao radha murthy');

function longestword(sen){
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    
    //console.log(wordArr);
    // sort by length
    const sorted = wordArr.sort(function(a,b){
        return b.length - a.length;
    });
    //console.log(sorted);
    // If multiple words, put into array
    const longestwordArr = sorted.filter(function(word){
         return word.length === sorted[0].length;
    });
    //console.log(longestwordArr);
    //check if more than one array val

    if (longestwordArr.length === 1){
        //return the word
        return longestwordArr[0];
    }else{
        return longestwordArr;
    }
}

console.log(output);
*/
//////////////////////////////////////////////////////////

// CHUNK ARRAY

/*
const output = chunkArray([1,2,3,4,5,6,7],2);
function chunkArray(arr,len){
    const chunkedArr = [];
    let i = 0;
    while(i < arr.length){
        chunkedArr.push(arr.slice(i,i + len));
        i += len;
    }
    return chunkedArr;
}

console.log(output);
*/
//////////////////////////////////////////////
// FLATTEN ARRAY

const output = flattenArray([[1,2],[3,4],[5,6],[7]]);
function flattenArray(arrays){
    return arrays.reduce(function(a,b){
        return a.concat(b);
    });
}

console.log(output);
