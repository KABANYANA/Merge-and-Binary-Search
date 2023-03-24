
// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6



let num = [45,12,6,89,2,5];
let target = 6;

num.sort((a,b) => a-b)
function binarySearch(arr,target){
  let left=0
  let right= arr.length-1

  while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === target){
    return mid
    }
    else if (arr[mid]<target){
      left= mid+1
    }
    else{
      right = mid -1 
    }
  }
  return null;
}
let index= binarySearch(num,target)

if(index!==null){
  console.log("Index of target ",index)
}
else{
  console.log("Target not found")
}






// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]

let arr = [123,89,5,23,9,56];
function descendingComparator(a,b){
  return b-a
}
arr.sort(descendingComparator);
console.log(arr);



// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];




let target1 = 34;
let arr2=[1,4,78,2,67,3]
function mergeSort(arr2){
  if (arr2.length <=1){
    return arr2;
  }
let mid = Math.floor(arr2.length/2);
let left = arr2.slice(0,mid)
let right = arr2.slice(mid);
return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let result = []
  let i =0;
  let j =0;

while(i<left.length &&j<right.length){
  if(left[i]<right[j]){
    result.push(left[i])
    i++;
  }
  else{
    result.push(right[j])
    j++
  }
return result.concat(left.slice(i)).concat(right.slice(j))
}

function binarySearch(arr2,target1){
  let left = 0;
  let right = arr2.length-1;
  while(left<= right){
    let mid =Math.floor((left+right)/2);
    if(arr2[mid]===target1){
      left =mid+1
    }
    else if(arr2[mid]<target1){
      left =mid+1
    }
    else{
      right = mid -1
    }
    
  }
  return null
}
}
let sortedArr = mergeSort(arr2)
let index1 = binarySearch(sortedArr,target1)


if (index1 !== null){
  console.log("index1")

}
else{
  console.log("target not available")
}


