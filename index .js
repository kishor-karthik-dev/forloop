//Write a javascript program to print all natural numbers from 1 to n. – using while loop//27/02/2024
 //Write a javascript program to print all natural numbers from 1 to n. – using while loop
 n = 10
 for(i=1;i<=n;i++){
     console.log(i)
 }
//-------------------------------------------------------------------------------------
//Write a javascript program to print all natural numbers in reverse (from n to 1). – using while loop
n=10
for(i=n;i>=1;i--){
    console.log(i)
}
//Write a javascript program to print all alphabets from a to z. – using while loop
const a = "abcdefghijklmnopqrstuvwxyz"
for(i=0;i<=a.length-1;i++){
    console.log(a[i])
}
// while loop
const a= "abcdefghijklmnopqrstuvwxyz"
i=0
 while(i<=a.length-1){
      
     console.log(a[i])
i++
 }
Write a javascript program to print all even numbers between 1 to 100. – using while loop
i=0
 while(i<=100){
     if(i%2==0)
     console.log(i)
     i++
 }

//Write a javascript program to print all odd number between 1 to 100.
for(i=1;i<=100;i++){
    if(i%2 !==0)
    console.log(i)
//==============================================================================================
//Write a javascript program to find sum of all natural numbers between 1 to n.
const n =5
 let sum = 0
 for(i=1;i<n;i++){
     sum = sum+i
     
 }
 console.log(sum)
//  ============================================================================================
// Write a javascript program to find sum of all even numbers between 1 to n.
const n =100
let sum = 0
let s =[]
for(i=1;i<n;i++){
    if(i%2 !==0){
      sum = sum+i
    s.push(i)  
    }
    
}
console.log(sum)
console.log(s)
// =============================================================================
// Write a javascript program to find sum of all odd numbers between 1 to n.
const n =100
let sum = 0
let s =[]
for(i=1;i<n;i++){
    if(i%2 ==0){
      sum = sum+i
    s.push(i)  
    }
    
}
console.log(sum)
console.log(s)
// ===================================================================================================
// Write a javascript program to print multiplication table of any number.
n=6
for(i=1;i<=10;i++){
    console.log(i+"x"+n+"="+i)
}
// ===================================================================================================
// write a program to count how many numbers are there from 1 to n.
const a= 3;
const b=10
let count = 0;
for(i=a;i<b;i++){
 count =count+1

 }  
 console.log (count) 
// ======================================================================================
// write a program to count how many even numbers are there from 1 to n.
const a= 3;
const b=10
let count = 0;
for(i=a;i<b;i++){
 if(i%2 ==0) {
 count =count+1
 } 
 }  
 console.log (count) 

// =========================================================================================
// write a program to count how many odd numbers are there from 1 to n.
const a= 3;
const b=10
let count = 0;
for(i=a;i<b;i++){
 if(i%2 !==0) {
 count =count+1
 } 
 }  
 console.log (count) 
// ========================================================================================================

// Write a javascript program to count number of digits in a number.
n= 55
count =0
while(n>0){
    n=parseInt(n/10)
    count =count+1
}
console.log(count)
// -------------------------------------------------------------------------------------------------------
// Write a javascript program to find first and last digit of a number.

n = 987654321
a= n%10 lastnumber
while(n>=10){
    n=parseInt(n/10); frist 
}
console.log(n,a)
// n 9
// -------------------------------------------------------------------------------------------------------------------------
Write a javascript program to find sum of first and last digit of a number.
n= 100
a=n%10
while(n>=10){
   n=parseInt(n/10) 
   
} 
console.log(n+a)
// ======================================================================================================
// write a javascript frist to last reverse tha number
n= 987654321
reverse= 0;
while(n>0){
  a = n%10
   n=parseInt(n/10) 
   reverse= reverse*10+a
}
console.log(reverse)
// revese =0,n=98765432 a=1 n=1
Write a javascript program to swap first and last digits of a number.





// Write a javascript program to calculate sum of digits of a number.
n=55
reverse=0 
while(n>0){
  a=n%10  
  n=parseInt(n/10)
 reverse= reverse*1+a
}
console.log(reverse)
//-----------------------------------------------------------------------------------------------------------------------
Write a javascript program to enter a number and print its reverse.
n=987651234
reverse=0
while(n>0){
b=n%10
n=parseInt(n/10)
reverse=reverse*10+b
}
console.log(reverse)
Write a javascript program to check whether a number is palindrome or not. 
n=123
dummy=n
reverse=0
while(n>0){
   b=n%10
   n =parseInt(n/10)
   reverse=reverse*10+b
}
// console.log(reverse)
if(reverse===dummy){
    console.log(true)
}
else{
    console.log(false)
}

Write a javascript program to print all ASCII character with their values.
for(i =33; i<=120; i++) {
    console.log(`value of ${i}=${String.fromCharCode(i)}`)
} 
// -----------------------------------------------------------------------------
Write a c program to find power of a number using for loop.
let n = 5
let sum =3
let num =1
for(i=0;i<sum;++i){
  num =num*n
}
console.log(num)

// =====================================================================================================================================================
Write a javascript program to find all factors of a number.
const n= 12
for(i=1;i<n;i++){
    if(n%i  ==0 )
}// console.log(i)
console.log(i)
// ==============================================================================================================================
Write a javascript program to calculate factorial of a number.
const n= 10
fact =1
for(i=1;i<=n;i++){
    // console.log(fact)
   fact=fact*i
    // console.log(fact)
}
console.log(fact)
// =====================================================================================================================================

Write a javascript program to check whether a number is Prime number or not.
n=2
count=0
for(i=0;i<=n;i++){
    if(n%i ==0)
     
      count=count+1
}
 console.log(count) 
 if(count<=2){
     console.log("prime")
 }else{
     console.log('notprime')
 }
  
// Write a javascript program to print all Prime numbers between 1 to n.
let n=100
let outputarr=[];
for(let i=2;i<n;i++){
    isprime=true;
    for( let j=2;j<i;j++){
        if(j%i ==0){
          isprime=false;
          break;
        }
         
         }
         if(isprime){
           outputarr.push(i)  
    }
}
console.log(outputarr)
// =========================================================================================================================================
Write a javascript program to find sum of all prime numbers between 1 to n.
let n=100
let outputarr=[];
sum=0
for(let i=2;i<n;i++){
    isprime=true;
    for( let j=2;j<i;j++){
        if(j%i ==0){
          isprime=false;
          break;
        }
         
         }
         if(isprime){
             sum=sum+i
           outputarr.push(i)  
    }
}
console.log(sum)
console.log(outputarr)
 =======================================================================================================================
 for(i=2;i<=100;i++){
//     count=0
//     for(j=0;j<=i;j++){
//       if(i%j==0) 
//       count+=1
//     }  
//     if(count<=2){
//       console.log("prime",i) 
//     }else{
//         console.log("notprime",i)
//     }
// }
// ===============================================================================================================================
Write a javascript program to find all prime factors of a number.
n=199
givennum= n.toString()
len = givennum.length
arr=givennum.split("").map(Number)
sum=0
for(i=0;i<arr.length;i++){
mulvalue=1
for(j=0;j<len;j++){
   mulvalue= mulvalue*arr[i]
   
}
    sum= sum+mulvalue
}
console.log(sum)
// ==============================================================================================================================================
Write a javascript program to check whether a number is Armstrong number or not.
num=153
sum=0
temp=num
while(temp>0){
    rem= temp%10
    sum += rem*rem*rem
    temp=parseInt(temp/10)
}
if(sum==num){
    console.log("amstront number ",num)
}else{
    console.log("not amstrong")
}
    
Write a javascript program to print all Armstrong numbers between 1 to n.
n=1000
for(i=1;i<=n;i++){
    num= i.toString().length
    sum=0
    temp=i
    while(temp>0){
        rem=temp%10
        sum+=rem**num
        temp= parseInt(temp/10)
    }
    if (sum == i) {
        console.log(i);
}
}
// ===================================================================================
Write a javascript program to check whether a number is Perfect number or not.
n =28
sum = 0
for(i=1;i<n;i++){
if(n%i ==0){
    sum+=i
}
}
console.log(sum)

if(sum==n){
 console.log("true")
    
}else{
    console.log("false")
}
// =======================================================================================================================
Write a javascript program to print all Perfect numbers between 1 to n.
Write a javascript program to check whether a number is Strong number or not.
Write a javascript program to print all Strong numbers between 1 to n.
Write a javascript program to print Fibonacci series up to n terms.

Write a javascript program to find one’s complement of a binary number.
Write a javascript program to find two’s complement of a binary number.
Write a javascript program to convert Binary to Octal number system.
Write a javascript program to convert Binary to Decimal number system.
Write a javascript program to convert Binary to Hexadecimal number system.
Write a javascript program to convert Octal to Binary number system.
Write a javascript program to convert Octal to Decimal number system.
Write a javascript program to convert Octal to Hexadecimal number system.
Write a javascript program to convert Decimal to Binary number system.
Write a javascript program to convert Decimal to Octal number system.
Write a javascript program to convert Decimal to Hexadecimal number system.
Write a javascript program to convert Hexadecimal to Binary number system.

Write a javascript program to convert Hexadecimal to Octal number system.
Write a javascript program to convert Hexadecimal to Decimal number system.
Write a javascript program to print Pascal triangle upto n rows..............................
Star pattern programs – Write a javascript program to print the given star patterns..[[[[[/]]]]]
Number pattern programs – Write a javascript program to print the given number patterns./
