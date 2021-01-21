let nums = [1,1,2];

var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length -1; i++){
        if(nums[i] === nums[i + 1]){
            nums.splice(i, 1);
            i--;
        }
    }  
    return nums.length  
};

console.log(removeDuplicates(nums))