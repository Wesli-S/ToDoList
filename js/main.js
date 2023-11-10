class ToDo {
}
window.onload = function () {
    let addBtn = document.querySelector("#add-button");
    addBtn.onclick = addToList;
};
function addToList() {
    let item = document.querySelector("#item").value;
    let newListItem = new ToDo();
    newListItem.item = item;
    let itemDiv = document.createElement("div");
    let listItem = document.createElement("p");
    listItem.textContent = newListItem.item;
    itemDiv.appendChild(listItem);
    let divDisplay = document.querySelector("#display");
    divDisplay.appendChild(itemDiv);
    itemDiv.onclick = itemDivClicked;
    addItemToStorage();
}
function itemDivClicked() {
    let currItemDiv = this;
    currItemDiv.classList.toggle("finished");
}
function addItemToStorage() {
    const ListStorageKey = "List";
    let toDoItems = [];
    const itemData = localStorage.getItem(ListStorageKey);
    if (itemData !== null) {
        toDoItems = JSON.parse(itemData);
    }
    let item = document.querySelector("#item").value;
    toDoItems.push(item);
    localStorage.setItem(ListStorageKey, JSON.stringify(toDoItems));
}
