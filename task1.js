var a=1;
var b="Hello";
console.log(a);
console.log(b);
function triangle(h,c) {
    s=1/2*h*c;
    console.log(s);
}
triangle(3,2);
var city=["Ryazan","Moscow","Sochi"];
for(i=0;i<city.length;i++){
    console.log(city[i]);
}
for(i=city.length-1;i>=0;i--){
   console.log(city[i]);
}
var i=city.length-1;
while(i>=0){
    console.log(city[i]);
    i--;
}
i=city.length;
do{
    i--;
console.log(city[i]);
}
while(i>0);
/*при выполнении операции y=i++, сначала происходит присваивание, а потом увеличение на единицу,, итог при y,i=0 - y=0,i=1;
 а при выполнении y=++i; сначала выполняется увеличение, а потом присваивание при аналогичных условиях результат таков: y=1,i=1;
 */
function proverka(a) {//проверка числа
    if(a>0){
        console.log("Is a pisitive number");
    }else if(a===0){
        console.log("Is zero!");
    }else{
        console.log("it is a negative number");
}
}
    proverka(5);
    var s=1;
    function fac(n){    //функция факториала
    if(n>0){
      for(i=1;i<=n;i++)
           {s*=i;}
         console.log(s); 
    }else if(n<0){
        console.log("wrong number");
    }
    else{
        console.log(s);
    }
    }
    fac(4);