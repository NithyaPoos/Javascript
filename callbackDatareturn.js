const nums = [10, 56, 23, 9];


const sumOfNums = (arr, callback) => {
    setTimeout(() => {
        const res = arr.reduce((total, current) => total + current, 0);
        callback(res);
    }, 1000);
}

sumOfNums(nums, result => {
    console.log(result);
});

