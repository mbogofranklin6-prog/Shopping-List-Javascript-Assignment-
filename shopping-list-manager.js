let shoppinglist = ["Bread", "Eggs", "Milk", "Yought", "Potatoes"]
//Creates an array containing ordered list stored in a variable
function displayitems() {
    shoppinglist.forEach(function(items) {
        console.log(items)
    })
}
//Loops through the shopping list and prints each element on its own list
function additem(item) {
    shoppinglist.push(item);
    console.log(shoppinglist);
}
//Adds an item at the very end of the shoppinglist
function removeItem(item){
    shoppinglist = shoppinglist.filter(function(currentitem){
        return currentitem !== item
    });
    console.log(shoppinglist);
}
//It searches through the array and removes every item that matches the text passes to item
function searchItem (item){
    let exist = shoppinglist.includes(item)
    if (exist){
        console.log(`${item} exists.`);
    } else {
        console.log(`${item} does not exist.`);
    }
}
//the function displays the total number of items
function countItems(){
    console.log(shoppinglist.length)
}
//the function count displayes the total number of items
//the function of priority creates new array containing only the first three items of the list
function priorityList(shoppingList){
    let priority = shoppingList.slice(0,3)
    priority.forEach(function(item){
        console.log(item);
    });
}

//Demonstration of the program

console.log("DISPLAY SHOPPING LIST");
displayitems();

console.log("ADD NEW ITEM")
additem("Cooking Oil");

console.log("REMOVE ITEM");
removeItem("Rice");

console.log("SEARCH ITEM");
searchItem("Bread");

console.log("SEARCH ITEM THAT DOES NOT EXIST");
searchItem("Soap");

console.log("COUNT ITEMS");
countItems();

console.log("PRIORITIES LIST");
priorityList(shoppinglist);








displayitems();
