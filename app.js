//Create template
function Products(image,name,price){
    this.image = image;
    this.name = name;
    this.price = price;
}
//Cereals
var cherrios = new Products("./solution-code/images/cereal/cheerios.jpg","Cheerios",2.79);
var crunch = new Products("./solution-code/images/cereal/crunch.jpg","Crunch",3.39);
var fruit_loops = new Products("./solution-code/images/cereal/fruit-loops.jpg","Fruit-loops",3.64);
var puffs = new Products("./solution-code/images/cereal/puffs.jpg","Puffs",2.99);
var raisin_brand = new Products("./solution-code/images/cereal/raisin-bran.jpg","Raisin Brand",2.69);

var cereal_array = [cherrios, crunch, fruit_loops, puffs, raisin_brand];
var cereal_btn = document.getElementById("cereal");

//Candy
var kit_kat = new Products("./solution-code/images/candy/kit-kat.jpg","Kit-kat",1.49);
var mms = new Products("./solution-code/images/candy/m&ms.jpg","M&ms",1.39);
var skittles = new Products("./solution-code/images/candy/skittles.jpg","Skittles",1.49);
var snickers = new Products("./solution-code/images/candy/snickers.jpg","Snickers",1.25);
var twix = new Products("./solution-code/images/candy/twix.jpg","Twix",0.99);

var candy_array = [kit_kat, mms, skittles, snickers, twix];
var candy_btn = document.getElementById("candy");

//Juice
var apple = new Products("./solution-code/images/juice/apple-juice.jpg","Apple juice",4.81);
var carrot = new Products("./solution-code/images/juice/carrot-juice.jpg","Carrot juice",3.43);
var grape = new Products("./solution-code/images/juice/grape-juice.jpeg","Grape juice",4.98);
var orange = new Products("./solution-code/images/juice/orange-juice.jpg","Orange juice",3.64);
var tomato = new Products("./solution-code/images/juice/tomato-juice.jpg","Tomato juice",2.87);

var juice_array = [apple, carrot, grape, orange, tomato];
var juices_btn = document.getElementById("juices");

//this array handles all available products displayed
var currentProducts = [];

//this array displays all selected products
var shoppingCart = [];

//This function clears the previus view
function clearinterface (child,parentSelector){
    var menu = document.querySelectorAll(child);
    var parent = document.querySelector(parentSelector);
    if (menu.length > 0){
        for (var j = 0; j < menu.length ;j++){
            parent.removeChild(menu[j]);
        }
    }
    currentProducts = [];
}

//This function creates a chunk of code for every product and displays it
function displayProducts(prodArray){
    for(var i = 0; i < prodArray.length; i++){
        //tags
        var anchor = document.createElement('a');
        var img = document.createElement("img");
        var nameHolder = document.createElement("p");
        //attributes and CSS
        anchor.className =`${i}`;
        anchor.href="#";
        anchor.setAttribute("style","border: 2px solid grey; display: inline-block;");
        img.setAttribute("src",prodArray[i].image);
        img.setAttribute("style","width: 94%; margin: 3%;");
        nameHolder.innerText = `${prodArray[i].name}  $${prodArray[i].price}`;
        nameHolder.setAttribute("style","margin: 0;");
        //display
        anchor.appendChild(img);
        anchor.appendChild(nameHolder);
        document.querySelector('.products').appendChild(anchor);
        currentProducts.push(prodArray[i]);
    }
}

function displayCart(prodArray){
    //Removes all displayed products of shoppingCart, 
    //that way it won't write on top of each other
    var list = document.querySelector('.nameOfproducts');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    //Reloads the updated shoppingCart list
    for(var k = 0; k < prodArray.length; k++){
        var prod_name = prodArray[k].name;
        var prod_price = prodArray[k].price;
        var element = document.createElement("li");
        element.className = `name-${k}`;
        element.innerText = `${prod_name}  |  $${prod_price}`;
        list.appendChild(element);
        console.log(CalculateTotal(prodArray));
    }
}


//This function pushes selected products
function toShoppingCart(choice){
    var selected = currentProducts[choice];
    shoppingCart.push(selected);
    displayCart(shoppingCart);
}

//This function creates eventlisteners dinamically for every image displayed
// if the images are clicked, they will be added to shoppingCart
function selection(){
    var elementsArray = document.querySelectorAll("a");
    elementsArray.forEach(function(elem) {
        elem.addEventListener("click", function() {
            var productnumber = parseInt(elem.className);
            toShoppingCart(productnumber);
        });
    });
}

function CalculateTotal(prices_array){
    var TotalPrice = 0
    for( var i = 0; i < prices_array.length; i++){
        TotalPrice = TotalPrice + prices_array[i].price;
    }
    return TotalPrice;
}

//EventListeners

cereal_btn.addEventListener("click", function(){
    clearinterface("a",'.products');
    displayProducts(cereal_array);
    selection();
});

juices_btn.addEventListener("click", function(){
    clearinterface("a",'.products');
    displayProducts(juice_array);
    selection();
});

candy_btn.addEventListener("click", function(){
    clearinterface("a",'.products');
    displayProducts(candy_array);
    selection();
});

document.getElementById("deleteAll").addEventListener("click", function(){
    shoppingCart = [];
    var list = document.querySelector('.nameOfproducts');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
});