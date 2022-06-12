const NAME_OF_SHOP = "Dalida`s shop";

function product(name, price, quantity, measure) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.measure = measure;
    this.fullInfo = name + " - " + price + "kzt, per " + (measure == undefined? 'piece' : measure) + ". Available: " + quantity;
}

let fruitsArr = [new product('apple', 350, 15, 'kg'), new product('banana', 80, 40)];
let drinksArr = [new product('cola', 150, 100, '0.5 liter')];

let fruits  = {
    name: "fruits",
    products: fruitsArr
}
let drinks  = {
    name: "drinks",
    products: drinksArr
}
let categories = [fruits, drinks];
export {categories as arr, NAME_OF_SHOP};
