// Q5. Write a function which takes array as argument and remove duplicates elements and returns a new array.
// INPUT
let arr = [1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

function removeDuplicates(arr)
{
     for(let i = 0; i < arr.length; i++)
     {
        for(let j = i+1; j < arr.length; j++) 
        {
            if(arr[i] === arr[j]) 
            arr.splice(j,1);
        }
    }
    return arr;
}
module.exports = removeDuplicates;
