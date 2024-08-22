"use strict";
// let message:(string | number) = "Welcome to your life!!!";
// alert(message);
// let message:string[] = ["welcome to your life","Enjoy your everyday"];
// let message:Array<string> = ["welcome to your life","Enjoy your everyday"];
// alert(message[Math.floor(Math.random()*message.length-1)]);
// enum Power{weak,recovering,strong};
var Power;
(function (Power) {
    Power[Power["weak"] = 1] = "weak";
    Power[Power["recovering"] = 2] = "recovering";
    Power[Power["strong"] = 3] = "strong";
})(Power || (Power = {}));
;
// enum Power{weak=5,recovering,strong};
// console.log(Power.weak)
// let heroPower:Power = Power.recovering;
// console.log(heroPower);
// let powerString = Power[heroPower];
// console.log(powerString);
// function adder(num1:number,num2:number):number{
//     return num1+num2;
// }
// console.log(adder(2,5));
// if we will not provide the return type void it will undefined by default 
function adder(num1, num2) {
    console.log(num1 + num2);
}
adder(2, 5);
