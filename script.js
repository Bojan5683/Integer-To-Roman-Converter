const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const container = document.getElementById('container');
const convertButton = document.getElementById('convert');
const input = document.getElementById('input');
let roman = '';

intToRoman = (num) => {

if(num < 1 || num > 3999){
    return "";
}
    else{
        for(let i = 0; i < numbers.length; i++){
            while(num >= numbers[i]){
                num = num - numbers[i];
                roman = roman + romanSymbols[i];
                i--;
        };
    };
};
return roman;
};

convertButton.addEventListener('click', () => {
    let number = input.value;
    intToRoman(number);
    container.value = roman;
});