class List {
    item:string;
}

window.onload = function(){
    let addBtn = document.querySelector("#add-button") as HTMLButtonElement;
    addBtn.onclick = addToList;
}

function addToList(){
    //Get data from form
    let item = (document.querySelector("#item") as HTMLInputElement).value;

    //Populate the object
    let newListItem = new List();
    newListItem.item = item;
    //Display new list item w. interaction
    /*
        TO DO
        - List Item
        - List Item
        - List Item
    */

    /*Formatting how the list pops up */
    //create elements/add text
    let itemDiv = document.createElement("div");
    let listItem = document.createElement("p");
    listItem.textContent = newListItem.item; //makes the item visible
    
    //add elements to div
    itemDiv.appendChild(listItem);

    //Add item to page
    let divDisplay = document.querySelector("#display") as HTMLDivElement;
    divDisplay.appendChild(itemDiv);
    //make items in the list interactive (clicking on a list item should make it turn green)
    itemDiv.onclick = itemDivClicked;
}

function itemDivClicked(){
    // The "this" keyword will hold the <div> element
    // that triggered this function call
    let currItemDiv = this as HTMLDivElement;
    currItemDiv.classList.toggle("finished");
}