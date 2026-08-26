let input = document.querySelector("#taskInput");
let addButton = document.querySelector("#addButton");
let taskList = document.querySelector("#taskList");
let message = document.querySelector("#message");

addButton.addEventListener("click", function () {

    if (input.value === "") {

        message.innerText = "Enter a task";

    } else {

        let li = document.createElement("li");
        li.innerText = input.value;

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        li.append(deleteButton);
        taskList.append(li);

        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        input.value = "";
        message.innerText = "";
    }

});