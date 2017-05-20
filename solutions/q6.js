// 6. Write a function to find the difference of two arrays?
 
function difference(arr1, arr2) {
let arr3 = [];
    for (let i = 0;i < arr1.length; i++)
    {
         let x = 0;
        for(let j = 0; j < arr2.length; j++)
        {
            if(arr1[i] === arr2[j])
            {
                arr2.splice(j,1);
                x++;
            }
        }
        
        if(x > 0)
        {
          arr1.splice(i,1);
          x = 0;
          i--;
      }
    }
    arr3 = arr1.concat(arr2);
   
    return arr3;
}
module.exports = difference;

