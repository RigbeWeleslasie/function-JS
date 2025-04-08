//1
function reverseString(array) {
    return arr.map(s => s.split('').reverse().join('')).sort();
}

function reverseStringsCI(array) {
    return array.map(s => s.split('').reverse().join(''))
              .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}
let array = ["Hello", "world", "JavaScript"];
console.log(reverseString(array));  
console.log(reverseStringsCI(array)); 

//2

function checkNumber(array){
    for(let number of array){
       if(number>0) {
           return "positive"
       }
        else if(num<0){
            return "negative";
        }
    }
    return "Zero"
}
//3
function employeesSorting(employees) {

  return employees.slice().sort(function(a, b) {
    return a.salary - b.salary;
  });
}
var sortedEmployees = employeesSorting(employees);
console.log(sortedEmployees);
//4
function multipleOfTWONumbers(number){
    numbers.forEach(function(num)){
        console.log(num*2);
    });
}
//5
function creatingNewArray(numbers){
    for(let i=0;  i<4 && i<numbers.length;i++){
        numbers[i]*=8;
    }
    for(let i=numbers.length-2;i<numbers.length;i++){
        numbers[i]+=5;
    }
    console.log(numners);
}

