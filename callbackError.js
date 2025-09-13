const nums = [10, 56, 23, 9];

const sumOfNums = (arr, callback, errorcallback) => {
    setTimeout(() => {
        let res = arr.reduce((total, current) => total + current, 0);
        res = null;
        if (res) {
            callback(res);
        } else {
            errorcallback('this failed');
        }
    }, 1000);
}

sumOfNums(nums, result => {
    console.log(result);
}, errorcall => {
        console.log(errorcall);
    });

