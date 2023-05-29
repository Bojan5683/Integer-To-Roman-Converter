const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function intToRoman(num){

let roman = '';

if(num < 1 || num > 3999){
    alert('Wrong number!')
}
else{
    for(let i = 0; i < numbers.length; i++){
        if(num >= numbers[i]){
            num = num - numbers[i];
            roman = roman + romanSymbols[i];
            i--;
            console.log(roman);
        }
    }
}
}
intToRoman(1);
