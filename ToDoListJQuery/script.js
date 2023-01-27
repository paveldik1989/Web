$(function () {
    var addButton = $("#add-button");
    var newTodoTextInput = $("#new-todo-text");
    var toDoList = $("#todo-list");
    var form = $("#form");

    form.submit(function(e) {
        e.preventDefault();
    });

    addButton.click(function () {
        console.log("ADD");

        var newTodoText = newTodoTextInput.val().trim();
        newTodoTextInput.removeClass("invalid");

        if (newTodoText.length === 0) {
            newTodoTextInput.addClass("invalid");
            return;
        }

        function setEditMode() {
            toDoItem.html("<div class='row'><input class='edit-todo-item' type='text'>\
                 <button class='cancel-button' type='button'>Cancel</button>\
                <button class='save-button' type='button'>Save</button>\
                <div class=\"error-message\">Field is required</div></div>");

            // toDoItem.html("<input class='edit-todo-item' type='text'><div class='row'>\
            //      <button class='cancel-button' type='button'>Cancel</button>\
            //     <button class='save-button' type='button'>Save</button>\
            //     <div class=\"error-message\">Field is required</div></div>");


            toDoItem.find(".edit-todo-item").val(newTodoText);

            toDoItem.find(".cancel-button").click(function () {
                setViewMode();
            });

            toDoItem.find(".save-button").click(function () {
                var editedTodoText = toDoItem.find(".edit-todo-item").val().trim();

                if (editedTodoText.length === 0) {
                    // newTodoTextInput.classList.add("invalid");
                    toDoItem.find(".edit-todo-item").addClass("invalid");

                    return;
                }

                newTodoText = editedTodoText;
                setViewMode();
            });
        }


        function setViewMode() {
            toDoItem.html("<div class='row'><span class='todo-item-text'></span>\
          <button class='delete-button' type='button'>Delete</button>\
           <button class='edit-button' type='button'>Edit</button></div>");

            toDoItem.find(".todo-item-text").text(newTodoText);
            toDoItem.find(".delete-button").click(function () {
                toDoItem.remove();
            })

            toDoItem.find(".edit-button").click(function () {
                setEditMode();
            });
        }

        var toDoItem = $("<li>").addClass("todo-item");

        setViewMode();

        toDoList.append(toDoItem);

        newTodoTextInput.val("");
    })
})