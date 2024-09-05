const removeFromArray = function(arr, arg, ...otherArgs) {
    otherArgs.unshift(arg);
    for(let i = 0; i < otherArgs.length; i++){
        while(arr.includes(otherArgs[i])){
            for(let j = 0; j < arr.length; j++){
                if(arr[j] === otherArgs[i]){
                    arr.splice(j, 1);
                    j -= 1
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
