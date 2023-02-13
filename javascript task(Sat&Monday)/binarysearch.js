
let binarysearch = function (arr, x, start, end) {
	
	
	if (start > end) return false;
	let mid=Math.floor((start + end)/2);
	if (arr[mid]===x) return true;
	if(arr[mid] > x)
		return binarysearch(arr, x, start, mid-1);
	else
		return binarysearch(arr, x, mid+1, end);
}

let arr = [2 ,5 ,32,67,71,100];
let x = 5;

let ans= binarysearch(arr, x, 0, arr.length-1);
console.log(ans);

								
