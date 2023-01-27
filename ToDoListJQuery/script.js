$(function () {
    var addButton = $("#add-button");
    var newTodoTextInput = $("#new-todo-text");
    var toDoList = $("#todo-list");
    var form = $("#form");

    form.submit(function (e) {
        e.preventDefault();
    });

    addButton.click(function () {
        var newTodoText = newTodoTextInput.val().trim();
        newTodoTextInput.removeClass("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.addClass("invalid");
            return;
        }

        function setEditMode() {
            toDoItem.html("<div class='row'>\
                                    <div class='block-column'><div class='text'>  <input class='edit-todo-item' type='text'> \
                                     <div class='error-message'>Field is required</div></div></div>\
                                     <div class='block-column'><div class='buttons'>\
                                        <button class='save-button' type='button'>Save</button>\
                                       <button class='cancel-button' type='button'>Cancel</button>\
                                    </div></div>\
                                 </div>");

            toDoItem.find(".edit-todo-item").val(newTodoText);

            toDoItem.find(".cancel-button").click(function () {
                setViewMode();
            });

            toDoItem.find(".save-button").click(function () {
                var editedTodoText = toDoItem.find(".edit-todo-item").val().trim();

                if (editedTodoText.length === 0) {
                    toDoItem.find(".edit-todo-item").addClass("invalid");
                    toDoItem.find(".error-message").addClass("invalid");

                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });
        }

        function setViewMode() {
            toDoItem.html("<div class='row'>\
                                    <div class='block-column'><div class='text'><li class='todo-item-text'></li></div></div>\
                                     <div class='block-column'><div class='buttons'>\
                                        <button class='edit-button' type='button'>Edit</button>\
                                        <button class='delete-button' type='button'>Delete</button>\
                                    </div></div>\
                                 </div>");

            toDoItem.find(".todo-item-text").text(newTodoText);
            toDoItem.find(".delete-button").click(function () {
                toDoItem.remove();
            })

            toDoItem.find(".edit-button").click(function () {
                setEditMode();
            });
        }

        var toDoItem = $("<div>").addClass("todo-item");

        setViewMode();

        toDoList.append(toDoItem);

        newTodoTextInput.val("");
    })
})