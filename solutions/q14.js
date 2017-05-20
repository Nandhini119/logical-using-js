// Q14.  Write a program to build a (pyramid) of "*" for a given number of rows. for example rows = 6 ?

// Write your code here
function drawpyramid(row)
{
	let n = row;
	
	for(let i = 0; i < n; i++)
	{
	    let s = ' ';
         for(let j = 0; j < n - i; j++)
         {
            s = s +' ';         
         }
        for(let k = 0; k < = i; k++)
        {
            s = s +'$';
        }
   console.log(s);     
    }
}
drawpyramid(6);