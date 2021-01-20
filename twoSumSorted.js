let numbers = [-1, 0]
let target = -1;

var twoSum = function(numbers, target) {
    let numObj = {}
    numbers.map((elem, index) => {
        numObj[elem] = index;
    })

    for(let i = 0; i < numbers.length; i++){
        let key = target - numbers[i];
        if(key in numObj && numObj[key] > i){
           return [i + 1, numObj[key] + 1]
        }
    }
};

console.log(twoSum(numbers, target));