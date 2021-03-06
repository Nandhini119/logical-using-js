// Q 15. Consider the following array of objects and solve the problem statements blow:-
// a) Display all objects with occupation as 'Programmer'
// b) Sort the object basis the age key in the descending order
// c) Recreate the above array of objects into the following object of objects :{ 'Developer' : [{'name':_____________, 'age':cd __________},{}],'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
// d) Use the map function to create a new array of names present in myObj.
// Expected output:
// [ 'Arun','Ashish','Kalyani','David','Priya','Venkat' ]

let myObj = [{'name' : 'Arun', 'age' : 30, 'occupation' : 'Developer'},
{'name' : 'Ashish', 'age' : 32, 'occupation' : 'Developer'},
{'name' : 'Kalyani', 'age' : 25, 'occupation' : 'Programmer'},
{'name' : 'David', 'age' : 27, 'occupation' : 'Programmer'},
{'name' : 'Priya', 'age' : 22, 'occupation' : 'Programmer'},
{'name' : 'Venkat', 'age' : 28, 'occupation' : 'Programmer'}];
// q15.a
let occupationarr1 = [];
for(let i = 0 ; i < myObj.length; i++)
{
    if(myObj[i].occupation == 'Programmer' )
    {
      occupationarr1.push({name : myObj[i].name, age : myObj[i].age, occupation : myObj[i].occupation});
     }
}
let set=new Set();
for(let a of myObj) {
    set.add(a.occupation);
}
occupationArr = Array.from(set);  

// q15.b
let sortMyObj = myObj.sort(function(a, b) {
    return b.age - a.age;
});


// q15.c
let newObj = {};
for(let ocup of set) {
        newObj[ocup] = [];
        for(let emp of myObj) {
            if(emp.occupation == ocup) {
                newObj[ocup].push({name:emp.name, age:emp.age});
            }
        }
    }
// q15.d
let namearray = myObj.map(function(arr1)
{
    return arr1.name;
    });
  module.exports = {
  c: occupationArr,
  d: newObj,
  e: namearray
};

