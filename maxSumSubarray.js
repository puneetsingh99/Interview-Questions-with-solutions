let nums = [2,-1, 7, -16];

var maxSubArray = function(nums) { 
    let sumTillHere = 0;
    let max = nums[0];
    for(let i = 0; i < nums.length; i++){
        sumTillHere += nums[i];
        if(sumTillHere > max) max = sumTillHere;
        if(sumTillHere < 0) sumTillHere = 0;      
    }
    return max;
};

console.log(maxSubArray(nums));