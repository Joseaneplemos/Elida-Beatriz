// Função para adicionar item à lista
function addItem() {
    const input = document.getElementById("itemInput");
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const ul = document.getElementById("shoppingList");
    const li = document.createElement("li");

    // Criar checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", toggleItemStatus);

    // Criar botão de remover
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.classList.add("remove");
    removeButton.addEventListener("click", removeItem);

    // Criar o texto do item
    const itemTextNode = document.createTextNode(itemText);

    // Adicionar os elementos à lista
    li.appendChild(checkbox);
    li.appendChild(itemTextNode);
    li.appendChild(removeButton);
    ul.appendChild(li);

    // Limpar o input
    input.value = "";
}

// Função para marcar/desmarcar o item como comprado
function toggleItemStatus(event) {
    const li = event.target.parentElement;
    li.classList.toggle("checked");
}

// Função para remover item da lista
function removeItem(event) {
    const li = event.target.parentElement;
    li.remove();
}