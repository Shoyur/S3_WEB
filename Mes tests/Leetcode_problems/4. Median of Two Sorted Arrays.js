var findMedianSortedArrays = function(nums1, nums2) {
    var newArray = nums1.concat(nums2).sort((a, b) => a - b);
    // console.log("newArray = " + newArray);
    var floor = Math.floor(newArray.length/2)
    var mid2 = newArray.length-1-floor;
    var value = (newArray[floor] + newArray[mid2])/2;
    return value;
};

// var nums1 = [1,3];
// var nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2));

// var nums1 = [1,2];
// var nums2 = [3,4];
// console.log(findMedianSortedArrays(nums1, nums2));

var nums1 = [3];
var nums2 = [-2,-1];
console.log(findMedianSortedArrays(nums1, nums2));

// avec 1,2,3 ... 
// 3 valeurs ... 
// 3/2=1.5 floor=1 
// mid1= 0+1 =1 ...
// mid2= length-1-floor(1) = 1


// avec 1,2,3,4,5,6 ... 
// 6 valeurs ... 
// 6/2=3 floor=3 
// mid1= 0+3 =3 ...
// mid2= length-1-floor(3) = 2

