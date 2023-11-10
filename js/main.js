class List {
}
window.onload = function () {
    let addBtn = document.querySelector("#add-button");
    addBtn.onclick = addToList;
};
function addToList() {
    let item = document.querySelector("#item").value;
    let newListItem = new List();
    newListItem.item = item;
    let itemDiv = document.createElement("div");
    let listItem = document.createElement("p");
    listItem.textContent = newListItem.item;
    itemDiv.appendChild(listItem);
    let divDisplay = document.querySelector("#display");
    divDisplay.appendChild(itemDiv);
    itemDiv.onclick = itemDivClicked;
}
function itemDivClicked() {
    let currItemDiv = this;
    currItemDiv.classList.toggle("finished");
}
