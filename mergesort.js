
const merge = (leftArr, rightArr) => {
	//To merge the both incoming arrays
	if(leftArr==undefined||rightArr==undefined) return;
	const result = [];

	let iL = 0;
	let iR = 0;

	while (iL < leftArr.length && iR < rightArr.length) {
		if (leftArr[iL] < rightArr[iR]) {
			result.push(leftArr[iL]);
			iL++;
		} else {
			result.push(rightArr[iR]);
			iR++;
		}
	}

	while (iL < leftArr.length) {
		result.push(leftArr[iL]);
		iL++;
	}

	while (iR < rightArr.length) {
		result.push(rightArr[iR]);
		iR++;
	}
	return result;
};

function mergesort(arr){
    console.log(arr);
    if(arr.length<2) return arr;
    const half = Math.floor((arr.length / 2));    
    let firstHalf = arr.slice(0, half);
    let secondHalf = arr.slice(half);
    let sortedLeft= mergesort(firstHalf);
    let sortedRight= mergesort(secondHalf);
    console.log(sortedLeft,sortedRight)
   	let mergedarray= merge(sortedLeft,sortedRight);
    return mergedarray;
}

console.log(mergesort([2,9,4,8]));