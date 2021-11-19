function treeSum(array) {

    return array.reduce((accum, item) => {
        if(Array.isArray(item)) {
            return treeSum(item) + accum;
        } else if(!isNaN(item)) {         
        return accum += Number(item);
        } 
        return accum;
    }, 0);
       
};

console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
