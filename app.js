//Create template
function Products(image,name,type){
    this.image = image;
    this.name = name;
    this.type = type;
}
//Cereals
var cherrios = new Products("./solution-code/images/cereal/cheerios.jpg","Cheerios","cereal");
var crunch = new Products("./solution-code/images/cereal/crunch.jpg","Crunch","cereal");
var fruit_loops = new Products("./solution-code/images/cereal/fruit-loops.jpg","Fruit-loops","cereal");
var puffs = new Products("./solution-code/images/cereal/puffs.jpg","Puffs","cereal");
var raisin_brand = new Products("./solution-code/images/cereal/raisin-bran.jpg","Raisin Brand","cereal");

var cereal_array = [cherrios, crunch, fruit_loops, puffs, raisin_brand];
var cereal_btn = document.getElementById("cereal");

//Candy
var kit_kat = new Products("./solution-code/images/candy/kit-kat.jpg","Kit-kat","candy");
var mms = new Products("./solution-code/images/candy/m&ms.jpg","M&ms","candy");
var skittles = new Products("./solution-code/images/candy/skittles.jpg","Skittles","candy");
var snickers = new Products("./solution-code/images/candy/snickers.jpg","Snickers","candy");
var twix = new Products("./solution-code/images/candy/twix.jpg","Twix","candy");

var candy_array = [kit_kat, mms, skittles, snickers, twix];
var candy_btn = document.getElementById("candy");

//Juice
var apple = new Products("./solution-code/images/juice/apple-juice.jpg","Apple juice","juice");
var carrot = new Products("./solution-code/images/juice/carrot-juice.jpg","Carrot juice","juice");
var grape = new Products("./solution-code/images/juice/grape-juice.jpeg","Grape juice","juice");
var orange = new Products("./solution-code/images/juice/orange-juice.jpg","Orange juice","juice");
var tomato = new Products("./solution-code/images/juice/tomato-juice.jpg","Tomato juice","juice");

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
        anchor.className =`image-${i}`;
        anchor.href="#";
        img.setAttribute("src",prodArray[i].image);
        img.setAttribute("style","width: 46%; margin: 3% 2%;");
        nameHolder.innerText = `${prodArray[i].name}`;
        //display
        anchor.appendChild(img);
        // anchor.appendChild(nameHolder);
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
        var element = document.createElement("li");
        element.className = `name-${k}`
        element.innerText = `${prod_name}`;
        list.appendChild(element)
    }
    console.log(shoppingCart);
}


//This function pushes selected products
function toShoppingCart(choice){
    var selected = currentProducts[choice];
    shoppingCart.push(selected);
    displayCart(shoppingCart);
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
    // console.log(shoppingCart);
});

//Allows selection of products
function selection() {
    //I know, I know. It was hard coded. WET code.
    document.querySelector(".image-0").addEventListener("click", function(){toShoppingCart(0)});
    document.querySelector(".image-1").addEventListener("click", function(){toShoppingCart(1)});
    document.querySelector(".image-2").addEventListener("click", function(){toShoppingCart(2)});
    document.querySelector(".image-3").addEventListener("click", function(){toShoppingCart(3)});
    document.querySelector(".image-4").addEventListener("click", function(){toShoppingCart(4)});
}