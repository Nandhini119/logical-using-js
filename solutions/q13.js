// Q13. Write a program to list (Fibonacci) series till a given number?

fibonacci = function(numMax, done) {
     let a = 0, b = 1, c;
    let arr = [];
    arr.push(a, b);
    for(let i = 0; i < numMax; i++)
    {
        c = a+b;
         arr.push(c);
        a = b;
        b = c;
    }
    return done(arr);
};
module.exports = fibonacci;

