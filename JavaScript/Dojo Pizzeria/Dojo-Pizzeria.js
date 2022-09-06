function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional",  ["mozzarella"], ["pepperoni", "sausage"]);
pizza1 = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: ["mozzarella"],
    toppings: ["pepperoni", "sausage"]
}
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara",  ["mozzarella","feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thick crust", "bbq",  ["mozzarella","feta"], ["mushrooms", "olives", "chicken"]);
console.log(pizza3);

var pizza4 = pizzaOven("thin crust", "buffalo",  ["mozzarella"], ["veggies", "olives", "sausage"]);
console.log(pizza4);

    // var crustType= ["deep dish", "hand tossed", "thin crust", "thick crust"];
    // var sauceType= ["traditional","marinara","bbq","buffalo"];
    // var cheeses= ["mozzarella","feta"];
    // var toppings= ["mushrooms", "olives", "onions","pepperoni","sausage","chicken","veggies"];