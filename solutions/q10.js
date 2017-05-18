//Q10. Write a program which accept average marks of the student achieved in exams and convert them into grade
// and display ratings of each student, grades and ratings can be calculated asper the following table:
/*
Range   	     Grade	Rating
>=0 and <= 60	  F	    Poor
>=61 and <= 70	D	    Fair
>=71 and <= 80	C	    Average
>=81 and <= 90	B	    Good
>=91 and <=100	A	    Excellent
*/

const studentDetails = [
  {name:'David',marks:80},
  {name:'Vinoth',marks:77},
  {name:'Divya',marks:88},
  {name:'Ishitha',marks:95},
  {name:'Thomas',marks:68}
];

let studentsGradeRatingArr = []

    var grad;
    var ratin;
    for(var i=0;i<studentDetails.length;i++)
    {
       if(studentDetails[i].marks >=0 && studentDetails[i].marks<= 60 )
       {
           grad="F";
           ratin="POOR";
       }
       else if(studentDetails[i].marks >=61 && studentDetails[i].marks<= 70)
       {
           grad="D";
           ratin="Fair";
       }
       else if(studentDetails[i].marks >=71 && studentDetails[i].marks<= 80)
       {
           grad="C";
           ratin="Average";
       }
       else if(studentDetails[i].marks >=81 && studentDetails[i].marks<= 90)
       {
           grad="B";
           ratin="Good";
       }
       else if(studentDetails[i].marks >=91 && studentDetails[i].marks<= 100)
       {
           grad="A";
           ratin="Excellent";
       }
       else
       {
           
       }
       studentsGradeRatingArr[i]={ name: studentDetails[i].name, grade: grad, rating: ratin};     
    }
  

module.exports = studentsGradeRatingArr;

 