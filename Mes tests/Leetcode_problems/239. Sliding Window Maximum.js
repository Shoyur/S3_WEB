// var maxSlidingWindow = function(nums, k) {
//     var slides;
//     if (nums.length <= k) { slides = 1; }
//     else { slides = 1 + (nums.length - k) }
//     var outArray = [];
//     for (var i = 0; i < slides; i++) {
//         var compare = ((1*10)**4)*-1;
//         for (var i2 = 0; i2 < k; i2++) {
//             if (nums[i+i2] > compare) { compare = nums[i+i2]; }
//         }
//         outArray.push(compare);
//     }
//     return outArray;
// }

// var nums = [1,3,-1,-3,5,3,6,7];
// var k = 3;

// console.log(maxSlidingWindow(nums, k));
// // réponse doit être [3, 3, 5, 5, 6, 7]


// Version améliorée :

var maxSlidingWindow = function(nums, k) {
    var slides = (nums.length <= k) ? 1 : 1 + (nums.length - k);
    var outArray = [];
    for (var i = 0; i < slides; i++) {
        outArray.push(Math.max(...nums.slice(i, i+k)));
    }
    return outArray;
}

var nums = [1,3,-1,-3,5,3,6,7];
var k = 3;

console.log(maxSlidingWindow(nums, k));
// réponse doit être [3, 3, 5, 5, 6, 7]