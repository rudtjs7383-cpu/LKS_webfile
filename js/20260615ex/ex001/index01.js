//호이스팅(Hoisting) 현상
console.log(num)
var num = 10;


//-------------------------------------

var num;
console.log(num) //undefined
var num = 10;

//---------- 2015년 구글 엔지니어들이  ES6를 가져오며 let를 쓰게되었다고함~-----

let name = 'gildong'
const PI = 3.14;               //상수 선언 및 초기화
PI = 100 ;

/*
var(x), let(o),const(o)
*/

// 연산자
//산술 연산자
console.log (10+20);        //30
console.log (10-20);        //-10
console.log (10*20);        //200
console.log (10/20);        //0.5
console.log (10%20);        //10

//대입 연산자, 복합대입 연산자
num = 10;
num += 10;      // num= num+10
num -= 10;       // num= num-10
num *= 10;       // num= num*10
num /= 10;       // num= num/10
num %= 10;       // num= num%10

//비교 연산자
console.log(10>20);   //False
console.log(10>=20);     //True
console.log(10<20);  //True
console.log(10<=20); //False
console.log(10==20); //False
console.log(10!=20); //True

let num1 = 10;
let num2 = '20';
console.log('num1 == num2:',num1 == num2);      //num == num2 : True
console.log('num1 === num2:',num1 === num2);    //num == num2 : False
console.log('num1 == num2:',num1 !== num2);     //num == num2 : true

//논리연산자
// &&
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

// || --> or

consolelog (true || true);  //True
consolelog (true || false); //false
consolelog (false || true); //false
consolelog (false || false);    //false

//! --> not

console.log (!true); //false
console.log (!false); //true
console.log (!!false); //false

// 증감 연산자

let MyScore = 80;
console.log('myScore :',MyScore);         //80

// myScore +=1;
MyScore ++;
console.log('myScore :',MyScore);    //81

MyScore --;
console.log('myScore :',MyScore);    //80

//후위 증감 연산자
var temp = MyScore--;
console.log('temp :',temp);         //80
console.log('myScore :',MyScore);    //79    


//전위 증감 연산자
MyScore = 80;
temp = --MyScore;
console.log ('temp :',temp); //79
console.log('myScore :',MyScore);    //79  

//삼항 (조건식) 연산자

//status = 'success' if myScore > 80 else 'fail'

let score = 85;
let grade = score >= 90 ? 'A' : 'B';
console.log('grade:', grade);