// A call back is a function passesd as a argument to another function.
// import { get } from "http";
// const calculate = (a, b, operation) => {
//     return operation(a, b);
// };
// //
// const addition = calculate(3, 6, function(num1, num2){
//   return num1 + num2;
// });
// console.log(addition)
// //
// const  hello = () => {
//     console.log("hello")
// };
// setTimeout(hello,3000)
//   //
// const subtraction = (a, b) => a-b 
//    const subResult = calculate(8, 5, subtraction)
// console.log (subResult)
//cal back hell 
//Callback hell is the issue of having deeply nested callbacks
// in asynchronous programming, making the code hard to read and manage.
function getData(dataId, getNext) {
    setTimeout(function () {
        console.log("data", dataId);
        if (getNext) {
            getNext();
        }
    }, 2000);
}
getData(1, function () {
    getData(2, 1);
});
