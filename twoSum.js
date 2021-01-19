function twoSum(nums, target){
    let arrPos = [];
    let arrNeg = [];
    nums.map((elem, index) => {
        if(elem >= 0){
            arrPos[elem] = index;
        }else{
            arrNeg[-elem] = index;
        }
    });

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > target ){
            if(arrNeg[-(target - nums[i])] !== undefined && arrNeg[-(target - nums[i])] !== i){
                return [i, arrNeg[-(target - nums[i])]];
            }
        }else{
            if(arrPos[target - nums[i]] !== undefined && arrPos[target - nums[i]] !== i){
                return [i, arrPos[target - nums[i]]]
            }
        }
    }
}