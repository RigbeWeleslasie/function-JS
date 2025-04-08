//1
function reverseString(array) {
    return array.map(s => s.split('').reverse().join('')).sort();
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
function sortEmployeesBySalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
}

const employees = [ { id: 1, name: "Hagoes", salary: 600 },
    { id: 2, name: "Mob", salary: 7500 }]; 
const sortedEmployees = sortEmployeesBySalary(employees);
console.log(sortedEmployees); 

//4
function multipleOfTWONumbers(number){
    numbers.forEach(function(num){
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
    console.log(numbers);
}

