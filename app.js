import {arr, NAME_OF_SHOP} from "./base.js";
import promptSync from 'prompt-sync';

const prompt = promptSync();
let num;
let basket = [];

const printLine = function() {
    console.log('---------------------------------------------------------------------------------------------');
}

const printCategories = function() {
    let i = 1;
    arr.forEach(e => {
        console.log(i + ". " + e.name);
        i++;
    });
    printLine();
    num = i;
}
const printProducts = function(e) {
    let i = 1;
        e.products.forEach(el => {
            console.log(i + ". " + el.fullInfo);
            i++;
        });
        printLine();
}

let choose = -1; 
let sum = 0;
printLine();
console.log("Welcome to " + NAME_OF_SHOP );
printLine();


while (choose!=0) {
console.log('0. exit.');
printCategories();
choose = prompt('Choose the command: ');
if (choose==0) {
    console.log('you have bought ');
    basket.forEach(e => {
        console.log(e.name);
        sum = sum + Number(e.price);
    });
    console.log('Sum of theese: ' + Number(sum));
    break;
}
else {
printProducts(arr[choose-1]);
const choose1 = prompt('Choose the product you want to buy: ');
basket.push(arr[choose-1].products[choose1-1]);
}
printLine();
}
