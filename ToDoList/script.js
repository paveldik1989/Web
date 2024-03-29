document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("add-button");
    var newTodoTextInput = document.getElementById("new-todo-text");
    var toDoList = document.getElementById("todo-list");
    var form = document.getElementById("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    addButton.addEventListener("click", function () {
        var newTodoText = newTodoTextInput.value.trim();
        newTodoTextInput.classList.remove("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.classList.add("invalid");
            return;
        }

        function setEditMode() {
            toDoItem.innerHTML = "<div class='row'>\
                                    <div class='block-column'><div class='text'>  <input class='edit-todo-item' type='text'> \
                                     <div class='error-message'>Field is required</div></div></div>\
                                     <div class='block-column'><div class='buttons'>\
                                        <button class='save-button' type='button'>Save</button>\
                                       <button class='cancel-button' type='button'>Cancel</button>\
                                    </div></div>\
                                 </div>";

            toDoItem.querySelector(".edit-todo-item").value = newTodoText;
            toDoItem.querySelector(".cancel-button").addEventListener("click", function () {
                setViewMode();
            });
            toDoItem.querySelector(".save-button").addEventListener("click", function () {
                var editedTodoText = toDoItem.querySelector(".edit-todo-item").value.trim();

                if (editedTodoText.length === 0) {
                     // newTodoTextInput.classList.add("invalid");
                    toDoItem.querySelector(".edit-todo-item").classList.add("invalid");

                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });
        }

        function setViewMode() {
            toDoItem.innerHTML = "<div class='row'>\
                                    <div class='block-column'><div class='text'><li class='todo-item-text'></li></div></div>\
                                     <div class='block-column'><div class='buttons'>\
                                        <button class='edit-button' type='button'>Edit</button>\
                                        <button class='delete-button' type='button'>Delete</button>\
                                    </div></div>\
                                 </div>"

            toDoItem.querySelector(".todo-item-text").textContent = newTodoText;
            toDoItem.querySelector(".delete-button").addEventListener("click", function () {
                toDoItem.remove();
            })

            toDoItem.querySelector(".edit-button").addEventListener("click", function () {
                setEditMode();
            });
        }

        var toDoItem = document.createElement("div");
        toDoItem.classList.add("todo-item");
        setViewMode();

        toDoList.appendChild(toDoItem);

        newTodoTextInput.value = "";
    })
})