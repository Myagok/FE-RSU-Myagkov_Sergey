/*1. Write a JavaScript program to display the current day and time in the following format.

Sample Output: Today is: Friday. */
var today=new Date();
switch(today.getDay()){
case 0:
    console.log("Today is Sunday");
    break;
case 1:
    console.log("Today is Monday");
    break;
case 2:
    console.log("Today is Tuesday");
    break;
case 3:
    console.log("Today is Wednesday");
    break;
case 4:
    console.log("Today is Thursday");
    break;
case 5:
    console.log("Today is Friday");
    break;
case 6:
    console.log("Today is Saturday");
    break;
}
/* 2. Write a JavaScript program to get the current date.*/
var a=new Date();
console.log(a);
/*3. Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.*/
var beg=new Date(2014,1,1);
var end=new Date(2050,1,1);
var oneday=1000*60*60*24;
var kol=(end-beg)/(oneday*7);
console.log(kol.toFixed(0));
/*

4. Write a JavaScript program to calculate days left until next New Year.*/
var nyear=new Date(2017,1,1);
kol=(nyear-today)/oneday;
console.log(kol.toFixed(0));
/*5. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor*/
is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('qwe'));
console.log(is_array([1, 2, 4, 0]));
/*6. Write a JavaScript function to clone an array*/
array_clone = function(arra1) {
 return arra1.slice(0);
    };
console.log(array_clone([1, 2, 4, 0]));
/*7. Write a JavaScript function to find the most frequent item of an array.*/
array_most=function (input) {
    var maxitem=1;
    var m=0;
    var item;
    for(i=0;i<input.length;i++){
        m=0;
       for(j=i;j<input.length;j++) {
           if(input[i]==input[j]){
               m++;
           }
           if(maxitem<m){
               maxitem=m;
               item=input[i];
           }
       }
    }
    return item;
}
console.log(array_most([1,2,2,2,2]));
/*8. Write a JavaScript function that inverts the case of the letters of the given string and returns new string*/
str=function (input) {
    var str0,str1,str2,s;
     str1=input.toLowerCase(); //переводим всю строку в нижний регистр
     for(i=0;i<input.length;i++){
     if(str1[i]==input[i]){//если нижний регистр, изменяем регистр буквы на верхний
         str1=input.slice(0,i);
         str2=input.slice(i+1,input.length);
         s=input[i].toUpperCase();
         input=str1+s+str2;
     }
     else{
         str1=input.slice(0,i);//иначе переводим в нижний
         str2=input.slice(i+1,input.length);
         s=input[i].toLowerCase();
         input=str1+s+str2;
     };      
     };
     return(input);
    
}
console.log(str('qWE'));
/*9. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)*/
str_clear=function (input) {
    var arr=[]; 
    arr=input.split(' ');
    for(i=0;i<input.length;i++){
        j=i+1;
        while(j<=arr.length) {
        if(arr[i]==arr[j]){
            arr.splice(j,1);
        }   
        else {
            j++;
    }}};
    return arr.join(' ');
}

console.log(str_clear("aa aa bb bc bb"));
/*10.Write a JavaScript program to shuffle an array*/
function shuffle(input) {
    var ctr = input.length;

    while (ctr > 0) {
        i = Math.floor(Math.random() * ctr);
        ctr--;
        temp = input[ctr];
        input[ctr] = input[i];
        input[i] = temp;
    }
    return input;
}
console.log(shuffle([0,1,2,3,4,5,6,7,8]));
/*11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array*/

function arr_filter(input) {
    var i = 0,
        len = input.length,
        j = -1,
        result = [];

    while ( i < len) {
        var value = input[i];

        if (value) {
          j++;
            result[j] = value;
        }
      i++;
    }

    return result;
}


console.log(arr_filter([NaN, 0, 15, false, -22, '',undefined, 47, null]));
/*12. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method*/
var library = [   
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},  
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},  
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}  
   ];  
   function compare(a, b){
         var result = 0;
         if (a.title > b.title) {
             result = 1;
         } else if (a.title < b.title) {
             result = -1;
          }
           return result;
    }
    console.log(library.sort(compare));
    /*13. Write a JavaScript function to merge two arrays and removes all duplicates elements*/
    function merge_arr(input1,input2){
     var result=[];
       result=input1.concat(input2);
       i=0;
       for(i=0;i<result.length;i++){
           j=i+1;
       while(j<result.length){
           if(result[i]==result[j]){
               result.splice(j,1);
               }else{
                   j++};
       }
       }
       return result; 
    }
console.log(merge_arr([1,2,3],[4,1,3,5,6]));
/*14. Write a JavaScript function to remove a specific element from an array*/
    function del_arr(iarr,inumber){
        var index=iarr.indexOf(inumber);
        if (index>-1){
            iarr.splice(index,1);
        }
        else {iarr="Error element";}
        return iarr;
    }
console.log(del_arr([1,2,0,1,2,4,5,6],10));
/* 15. Write a JavaScript function to get a random item from an array*/
    function random_elem(input){
        var k=(Math.floor(Math.random()*input.length));
        return input[k];
    }
    console.log(random_elem([1,2,3,4,5,1,2,34,123]));
    /*16. Write a JavaScript function to move an array element from one position to another*/
    function position_elem(iarr,index1,index2){
        var i=iarr[index1];
        iarr[index1]=iarr[index2];
        iarr[index2]=i;
        return iarr;
    }
    console.log(position_elem([3,2,1,4,5],0,2));
    /*17. Write a JavaScript function to get difference between two dates in days*/
    function differens_date(date1,date2){
        var a=new Date(date1);
        var b=new Date(date2);
        var oneday=1000*60*60*24;
        kol=Math.round(Math.abs(a-b)/oneday);
        return kol;        
    }
    console.log(differens_date('1/06/2016','5/07/2015'));
    /*18. Write a JavaScript function to get the maximum date from an array of dates*/
    function max_date(input){
        var max=new Date(input[0]);
        for(i=1;i<input.length;i++){
            a=new Date(input[i]);
            if(a>max){
                max=a;
            }
        }
        return max;
    }
    console.log(max_date(['2015/02/01','2015/02/02','2015/01/03']));
    /*19. Write a JavaScript function to split a string and convert it into an array of words */
    function split_str(input) {
        var arr=[];
        arr=input.split(' ');
        return arr;
    }
    console.log(split_str("asd asd dsa"));
    /*20. Write a JavaScript function to capitalize the first letter of a string*/
    function first_letter(input) {
        return input[0].toUpperCase()+input.slice(1);
    }
    console.log(first_letter('hi!Good morning'));
    /* 21. Write a JavaScript function to convert a string into camel case*/
    function convert_up(input) {
        return input.toUpperCase();        
    }
    console.log(convert_up('hi!GoOd NIGth'));
    /*22. Write a JavaScript function to find the highest value in an array*/
    function max_arr(input){
        var max=input[0];
        for(i=1;i<input.length;i++){
                if(input[i]>max){
                    max=input[i];                
            }
        }
        return max;
    }
    console.log(max_arr([1,2,3]));
    /* 23. Write a JavaScript function to find the lowest value in an array*/
    function min_arr(input){
        var min=input[0];
        for(i=1;i<input.length;i++){
                if(input[i]<min){
                    min=input[i];                
            }
        }
        return min;
    }
    console.log(min_arr([1,2,3]));
    /*24. Write a JavaScript function to check to check whether a variable is numeric or not*/
    function check_num(input){
        return !isNaN(parseFloat(input))&&isFinite(input);
    }
  console.log(check_num(12));  
  console.log(check_num('abcd'));  
  console.log(check_num('12')); 
    /*25. Write a JavaScript function to calculate the sum of values in an array*/
    function sum_arr(input){
        var sum=0;
        for(i=0;i<input.length;i++){
            {if(check_num(input[i])==true)
                sum+=input[i];
            }
        }
        return sum;
    }
    console.log(sum_arr([1,2,3,4,'a']));
    /* */