
//reverseString
// const output = reverseString('venkata krishnarao');
// function reverseString(str) {
//     const strArr = str.split('');
//     strArr.reverse();
//     return strArr.join('');
// }

// console.log(output);



//shortcut reversestring
//const output = reverseString('venkata krishnarao');
// function reverseSting(str){
//     return Str 
//     .split('').reverse().join('');
// }
// console.log(output);

// const output = reverseString('venkata krishnarao');
// function reverseString(str){

//     let revString = '';
//     for(let i = str.length - 1;i >=0; i--){
//         revString = revString + str[i];
//     }
//     return revString;
// }
// console.log(output);

/////////////////////////

// const output = reverseString('krishnarao');
// function reverseString(str){
//     let revString = '';
//     for(let i = 0; i <= str.length - 1; i++){
//         revString = str[i] + revString;
//     } 
//     return revString;
// }
// console.log(output);

///////////////////////////////////////
// const output = reverseString('krishnarao');
// function reverseString(str){
//     let revString = '';
//     for(let char of str){
//         revString = char + revString;
//     }
//     return revString;
// }
// console.log(output); 
///////////////////////////////////////////
// const output = reverseString('krishnarao');
// function reverseString(str){
//     let revString = '';
//     str.split('').forEach(char => revString = char + revString);
        
//     return revString;
// }
// console.log(output);
///////////////////////////////////////
// reverse an integer
// const output = reverseInt(12345);
// function reverseInt(int){
//     const revString = int.toString().split('').reverse().join('');
//    return parseInt(revString) * Math.sign(int);
// }
// console.log(output);
//////////////////////////////////////////////
// const output = capitalizeLetters('i love krishnarao');
// function capitalizeLetters(str){
//     const strArr = str.toLowerCase().split(' ');

//     for(let i = 0; i < strArr.length; i++){
//         strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    
//     }
//     return strArr.join(' ');
// }
// console.log(output);

//////////////////////////////////////

// const output = capitalizeLetters('i love krishnarao');
// function capitalizeLetters(str){

//     return str.toLowerCase()
//               .split(' ')
//               .map(word => word[0].toUpperCase() + word.substr(1))
//               .join(' ');

// }
// console.log(output);

//////////////////////////////////////////////
// MAX character
// const output = maxCharacter('krishnarao');
// function maxCharacter(str){
//     const charMap = {};
//     let maxNum = 0;
//     let maxChar = '';

//     str.split(' ').forEach(function(char){
//         if(charMap[char]){
//             charMap[char]++;
//         } else{
//             charMap[char] = 1;
//         }
//     });
//     for(let char in charMap){
//         if(charMap[char] > maxNum){
//             maxNum = charMap[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// console.log(output);
///////////////////////////////////////////
const output = fizzBuzz();
function fizzBuzz(){
    for(let i = 1; i <= 100;i++){
        if(i % 3 === 0 && i % 5===0){
            console.log('FizzBuzzz')
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');

        }else{
             console.log(i);
        }
       
    }
}
console.log(output);