function addItem() {
    const input = document.getElementById("itemInput");
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const ul = document.getElementById("shoppingList");
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", toggleItemStatus);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", removeItem);

    const itemTextNode = document.createTextNode(itemText);

    li.appendChild(checkbox);
    li.appendChild(itemTextNode);
    li.appendChild(removeButton);
    ul.appendChild(li);

    input.value = "";
}

function toggleItemStatus(event) {
    const li = event.target.parentElement;
    li.classList.toggle("checked");
}

function removeItem(event) {
    const li = event.target.parentElement;
    li.remove();
}
