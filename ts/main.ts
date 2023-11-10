class ToDo {
    item:string;
}

window.onload = function(){
    let addBtn = document.querySelector("#add-button") as HTMLButtonElement;
    addBtn.onclick = addToList;
}

/**
 * Adds user input to a bulleted list that appears under the "To Do" header
 */
function addToList(){
    //Get data from form
    let item = (document.querySelector("#item") as HTMLInputElement).value;

    //Populate the object
    let newListItem = new ToDo();
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
    addItemToStorage();
}

/**
 * Activates the added div, and adds the user input to the list
 */
function itemDivClicked(){
    // The "this" keyword will hold the <div> element
    // that triggered this function call
    let currItemDiv = this as HTMLDivElement;
    currItemDiv.classList.toggle("finished");
}

/*WEB STORAGE TIIIIIIIIIIIIIME*/

function addItemToStorage() {

    const ListStorageKey = "List";
    let toDoItems: string[] = [];

    //read existing list items from storage
    const itemData = localStorage.getItem(ListStorageKey);

    if(itemData !== null) {
        toDoItems = JSON.parse(itemData);
    }

    //add current item to the list
    let item = (<HTMLInputElement>document.querySelector("#item")).value;
    toDoItems.push(item);

    //Store the modified list back into storage
    localStorage.setItem(ListStorageKey, JSON.stringify(toDoItems));

}