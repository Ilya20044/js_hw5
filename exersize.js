"use strict"
//exersize1
// {
//     function getSum(a,b,c){
//         return(a-b/c);
//     }
    
//     console.log(getSum(15,4,7))
// }
//exersize 2
// {
//     function getcube(a){
//         return(a*a*a);

//     }
//     function getKw(b){
//         return(b*b);
//     }
//     console.log(getcube(5));
//     console.log(getKw(5));
// }
//exersize 3
// {
//     function min(a,b){
//         return(Math.min(a,b));
//     }
//     function max(a,b){
//         return(Math.max(a,b));
//     }
//     console.log('min '+min(3,4));
//     console.log('max '+max(3,4));
// }
//exersize4
// {
//     let arr = [];
//     let num;
//     function doArr(arrSize){
//         for(let i = 0; i < arrSize; i++){
//             num = +prompt('введите число')
//             arr.push(num);
            
//         }
//         return(arr);
//     }
//     function getArr(){
//         console.log(doArr(5));
//     }
//     getArr();
// }
//exersize 5
// {
    // function isEven(a){
    //     if(a % 2 === 0){
    //         console.log(true)
    //     }else{
    //         console.log(false)
    //     }
    // }
    // isEven(4);
// }
//exersize 6
// {
//     function isEven(a){
//         if(a % 2 === 0){
//             return(true)
//         }else{
//             return(false)
//         }
//     }

//     let arr = [];
//     let num = 0;
//     let arr2 = [];
//     function doArr(arrSize){
//         for(let i = 1; i <= arrSize; i++){
//             if (isEven(i) === true){
//                 num = i;   
//             }else continue;
//             arr2.push(num);
//     }
//     return(arr2);
//     }
//     console.log(doArr(20));
// }
//exersize 7
// {
//     function getPyramid(height, symbol) {
//          for(let i = 0; i <= height; i++){
//              for(let j = 0; j < i; j++){
//                  if(symbol === undefined) document.write(i);
//                  else document.write(symbol)
//              }
//              document.write("<br>")
//          }
//     }
 
//     getPyramid(8,"@");
//  }
//exersize 8
// {

// }
//exersize 9
// {
    
//     let arr = [];
//     function getFibonachi(num){
//         for (let i = 0; i< num; i++) {
//             if (i === 0 || i === 1) arr[i] = 1;
//             else arr[i] = arr[i-1] + arr[i-2];
//             if(arr[i] > 1000){
//                 break;
//             }  
//         }
//         return(arr);
//         arr.push(num);
//     }
//     console.log(getFibonachi(100));
// }
//exersize 10
// {
//     function getSum(value){
//         let sum = 0;
//         for(let i = 0; i<value.length; i++){
//             sum += +value[i];
//         }
//         if(sum > 9){
//             return getSum(String(sum))
//         }
//         return sum
//     }
//     console.log(getSum(prompt()))
// }
//exersize 11
// {
//     function getArr(arr){
//         console.log(arr[i]);
//         i++;
        
//         if(i < arr.length) getArr(arr);
//     }

//     let i = 0;

//     getArr([1,2,3,4,5]);
// }
//exersize 12
// {
//     function getinfo(hw,group,name,surname){
//         console.log('домашнее задание:' + hw);
//         console.log('выполнил струдент гр. '+group);
//         console.log(name + ' ' + surname);
//     }
//     getinfo('функции','FE-130','Ilya','prokhorski');
// }

    
     
