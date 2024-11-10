// 1- Write a program that allow to user enter number then print it
// var num=Number(window.prompt('inter your number'))
// document.getElementById("print").innerHTML='Output : '+ num;


// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// var num =Number(window.prompt('inter your number'));
// if (num%3==0 && num%4==0 ) {
//     document.getElementById("print").innerHTML='Output : Yes ';
// } else {
//     document.getElementById("print").innerHTML='Output : No ';
// }


// 3- Write a program that allows the user to insert 2 integers then print the max
// var num1 =Number(window.prompt('inter your number'));
// var num2 =Number(window.prompt('inter your number'));
// if (num1>num2) {
//      document.getElementById("print").innerHTML='Output : ' + num1;
// } else {
//     document.getElementById("print").innerHTML='Output : ' + num2;
// }


// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// var num =Number(window.prompt('inter your number'));
// if (num>0) {
//     document.getElementById("print").innerHTML='Output : positive' ;
// } else {
//     document.getElementById("print").innerHTML='Output : negative' ;
// }


// 5- Write a program that take 3 integers from user then print the max element and the min element.
// var num1 =Number(window.prompt('inter your number'));
// var num2 =Number(window.prompt('inter your number'));
// var num3 =Number(window.prompt('inter your number'));
// var maxElement;
// if (num1>num2) {
//     if (num1>num3) {
//         maxElement=num1;       
//     } else {
//         maxElement=num3;
//     }  
// } else {
//     if (num2>num3) {
//         maxElement=num2;
//     } else {
//         maxElement=num3;
//     }
// }
// var minElement;
// if (num1<num2) {
//     if (num1<num3) {
//         minElement=num1 ;      
//     } else {
//         minElement=num3 ;
//     }  
// } else {
//     if (num2<num3) {
//         minElement=num2 ;
//     } else {
//         minElement=num3 ;
//     }
// }
// document.getElementById("print").innerHTML = 
//     'Output:<br>' + 
//     'Max element: ' + maxElement + '<br>' + 
//     'Min element: ' + minElement;




//  6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// var num =Number(window.prompt('inter your number'));
// if (num%2==0) {
//     document.getElementById("print").innerHTML='Output : Even ';
// } else {
//     document.getElementById("print").innerHTML='Output : Odd ';
// }


// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// var x =window.prompt('inter your number');
// if (x=='a') {  document.getElementById("print").innerHTML='Output : vowel ';} 
// else if(x=='e') { document.getElementById("print").innerHTML='Output : vowel ';}
// else if(x=='i') { document.getElementById("print").innerHTML='Output : vowel ';}
// else if(x=='o') { document.getElementById("print").innerHTML='Output : vowel ';}
// else if(x=='u') { document.getElementById("print").innerHTML='Output : vowel ';}
// else{
//     document.getElementById("print").innerHTML='Output : Consonant ';
// }


// var x = window.prompt('Enter your letter').toLowerCase(); 
// if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
//     document.getElementById("print").innerHTML = 'Output: vowel';
// } else {
//     document.getElementById("print").innerHTML = 'Output: consonant';
// }





// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// var num =Number(window.prompt('inter your number'));
// for (var i = 1; i <=num ; i++) {
//   console.log( "Output : "+i)    
// }


// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// var num =Number(window.prompt('inter your number'));
// var x=0;
// for (var i = 0; i <12 ; i++) {
//      x=num+x
//      console.log( "Output : "+x)  
   
// }


// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
// var num =Number(window.prompt('inter your number'))
// for (var i = 1; i <=num; i++) {
//     var x=i;
// if(x%2==0){
// console.log("Output : " +x)
// }
// x=i+1
// }



// 12- Write a program that take two integers then print the power
// var num1 =Number(window.prompt('inter your number'));
// var num2 =Number(window.prompt('inter your number'));
// var power =1;
// for (var i = 1; i <=num2; i++) {
  
//     power=power*num1;
// }
// console.log("Output : " +power);



// 13- Write a program to enter marks of five subjects and calculate total, average and percentage.
// var num1 =Number(window.prompt('inter your number'));
// var num2 =Number(window.prompt('inter your number'));
// var num3 =Number(window.prompt('inter your number'));
// var num4 =Number(window.prompt('inter your number'));
// var num5 =Number(window.prompt('inter your number'));

//  var sum=num1+num2+num3+num4+num5;
//  var average=sum/5;
//  var percentage=(sum/500)*100;

//  document.getElementById("print").innerHTML = 
//  'Output:<br>' + 
//  'Total marks = ' + sum + '<br>' + 
//  'Average Marks ' + average + '<br>' + 
//  'Percentage =' +percentage ;



// 14-Write a program to input month number and print number of days in that month.
// var month=Number(window.prompt('inter the Month Number'));
// switch (month) {
//     case 1:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 31';
//         break;
//     case 2:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 28 or 29';
//         break;
//     case 3:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 31';
//         break;
//     case 4:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 30';
//         break;
//     case 5:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 31';
//         break;
//     case 6:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 30';
//         break;
//     case 7:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 31';
//         break;
//     case 8:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 31';
//         break;
//     case 9:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 30';
//         break;
//     case 10:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 31';
//         break;
//     case 11:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 30';
//         break;
//     case 12:
//         document.getElementById("print").innerHTML='Output:-. Days in Month: 31';
//         break;
//     default:
//         document.getElementById("print").innerHTML='Output:-.error ';
//         break;
// }


// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// var Physics =Number(window.prompt('inter your marks'));
// var Chemistry =Number(window.prompt('inter your marks'));
// var Biology =Number(window.prompt('inter your marks'));
// var Mathematics =Number(window.prompt('inter your marks'));
// var Computer =Number(window.prompt('inter your marks'));
// var sum= Physics+Chemistry+Biology+Mathematics+Computer;
// var percent=(sum/500)*100 ;

// switch (true) {
//     case  percent>= 90:
//         document.getElementById("print").innerHTML = 
//          'Output:<br>' + 
//          'percentage = ' + percent +'%' + '<br>' + 
//          'Grad A' ;
        
//         break;
//     case  percent>= 80:
//             document.getElementById("print").innerHTML = 
//              'Output:<br>' + 
//              'percentage = ' + percent +'%'+ '<br>' + 
//              'Grad B' ;
            
//             break;
//      case  percent>= 70:
//                 document.getElementById("print").innerHTML = 
//                  'Output:<br>' + 
//                  'percentage = ' + percent +'%' + '<br>' + 
//                  'Grad C' ;
                
//                 break;
//      case  percent>= 60:
//                     document.getElementById("print").innerHTML = 
//                      'Output:<br>' + 
//                      'percentage = ' + percent +'%' + '<br>' + 
//                      'Grad D' ;
                    
//                     break;
//     case  percent>= 40:
//                     document.getElementById("print").innerHTML = 
//                          'Output:<br>' + 
//                          'percentage = ' + percent +'%' + '<br>' + 
//                          'Grad E' ;
                        
//                         break;
    
//     default:
//         document.getElementById("print").innerHTML = 
//         'Output:<br>' + 
//         'percentage = ' + percent +'%'+ '<br>' + 
//         'Grad F' ;
//         break;
// }


// 16- Write a program to check whether an alphabet is vowel or consonant
// var x = window.prompt('Enter your letter').toLowerCase(); 
// switch (x) {
//     case 'a':
//         document.getElementById("print").innerHTML = 'Output: vowel';
//         break;
//     case 'e':
//         document.getElementById("print").innerHTML = 'Output: vowel';
//         break;
//     case 'i':
//          document.getElementById("print").innerHTML = 'Output: vowel';
//         break;
//     case 'o':
//         document.getElementById("print").innerHTML = 'Output: vowel';
//         break;
//      case 'u':
//         document.getElementById("print").innerHTML = 'Output: vowel';
//         break;
//     default:
//         document.getElementById("print").innerHTML = 'Output: consonant';
//         break;
// }



// 17- Write a program to find maximum between two numbers
// var num1 =Number(window.prompt('inter your number'));
// var num2 =Number(window.prompt('inter your number'))
// switch (true) {
//     case num1>num2:
//         document.getElementById("print").innerHTML = ' maximum : '+num1;
//         break;

//     default:
        
//     document.getElementById("print").innerHTML = ' maximum : '+num2;
//         break;
// }



// 18- Write a program to check whether a number is even or odd
// var num1 =Number(window.prompt('inter your number'));
//  var num2 =Number(window.prompt('inter your number'))
//  for(var i=num1; i<num2 ;i++){
//     switch (true) {
//         case i%2==0:
//          console.log(i)
//             break;
     
       
//      }
//  }



// 18- Write a program to check whether a number is even or odd
//  var num =Number(window.prompt('inter your number'));
//  switch (true) {
//     case num%2==0:
//         document.getElementById("print").innerHTML = ' output : even'; 
//         break;
 
//     default:
//         document.getElementById("print").innerHTML = ' output : odd'; 
//         break;
//  }


// 19- Write a program to check whether a number is positive or negative or zero
// var num =Number(window.prompt('inter your number'));
// switch (true) {
//     case num>0:
//         document.getElementById("print").innerHTML = ' output :number is positive'; 
//         break;
//     case num<0:
//         document.getElementById("print").innerHTML = ' output :number is negative'; 
//         break;

//     default:
//         document.getElementById("print").innerHTML = ' output :number is zero'; 
//         break;
// }



// 20- Write a program to create Simple Calculator
//  var num1 =Number(window.prompt('inter your number'));
//  var clik=window.prompt('inter your arthmatic op');
//  var num2 =Number(window.prompt('inter your number'));
//  switch (true) {
//     case clik=='*':
//         document.getElementById("print").innerHTML =  num1*num2; 
//         break;
//     case clik=='+':
//         document.getElementById("print").innerHTML =  num1+num2; 
//         break;
//     case clik=='-':
//         document.getElementById("print").innerHTML =  num1-num2; 
//         break;
//     case clik=='/':
//     document.getElementById("print").innerHTML =  num1/num2; 
//     break;
//     case clik=='%':
//         document.getElementById("print").innerHTML =  num1%num2; 
//         break;
//      case clik=='**':
//             document.getElementById("print").innerHTML =  num1**num2; 
//             break;
//     default:
//         document.getElementById("print").innerHTML =  "error"; 
//         break;
//  }
