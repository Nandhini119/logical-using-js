//Q13. Write a program to list (Fibonacci) series till a given number?

fibonacci = function(numMax, done){
     var a=0,b=1,c;
    var arr=[];
    arr.push(a,b);
    for(var i=0;i<numMax;i++)
    {
        c=a+b;
         arr.push(c);
        a=b;
        b=c;
    }
  
    console.log(arr);
    return done(arr);

}
module.exports = fibonacci;

