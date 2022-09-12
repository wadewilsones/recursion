//This file contains MergeSort

/*
test: [4,6,7,2,5]
O: [2,4,5,6,7]

*/

let testing = [6,4,7,2,5];

function mergeSort(arrayToSort) {

    if(arrayToSort.length == 1){
        
       return arrayToSort
    }

    //Divide the arratToSort
    const half = Math.floor(arrayToSort.length / 2);
    let arr1 = mergeSort(arrayToSort.slice(0, half));
    let arr2 = mergeSort(arrayToSort.slice(half));
    return mergingArrays(arr1, arr2) 

}

function mergingArrays (ar1,ar2){

    const sortedArray = [];

    while (ar1.length > 0 && ar2.length > 0){
        const smallestArray = ar1[0] < ar2[0] ? ar1 : ar2;
        const firstsmallValue = smallestArray.shift(); // get first element
        sortedArray.push(firstsmallValue); // add this element to array
    }

    console.log(ar1, ar2)
    console.log(sortedArray.concat(ar1,ar2))
    return sortedArray.concat(ar1,ar2);
}

mergeSort(testing);