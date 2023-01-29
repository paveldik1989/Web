$(function () {
    var addButton = $("#add-button");

    var newLastName = $("#last-name");
    var newFirstName = $("#first-name");
    var newTelephoneNumber = $("#telephone-number");

    var table = $("#table-body");
    var form = $("#form");

    form.submit(function (e) {
        e.preventDefault();
    });

    var number = 0;

    addButton.click(function () {
        var invalid = false;

        var lastName = newLastName.val().trim();
        newLastName.removeClass("invalid");

        if (lastName.length === 0) {
            newLastName.addClass("invalid");
            invalid = true;
        }

        var telephoneNumber = newTelephoneNumber.val().trim();
        newTelephoneNumber.removeClass("invalid");

        if (telephoneNumber.length === 0) {
            newTelephoneNumber.addClass("invalid");
            invalid = true;
        }

        var firstName = newFirstName.val().trim();
        newFirstName.removeClass("invalid");

        if (firstName.length === 0) {
            newFirstName.addClass("invalid");
            invalid = true;
        }

        if (invalid) {
            return;
        }

        number = ++number;

        function setViewMode() {
            tableRow.html("<td class='number'></td>\
                           <td class='last-name'></td>\
                           <td class='first-name'></td>\
                           <td class='telephone-number'></td>\
                           <td class='delete'><button class='delete-button' type='button'>❌</button></td>");

            tableRow.find(".number").text(number);
            tableRow.find(".last-name").text(lastName);
            tableRow.find(".first-name").text(firstName);
            tableRow.find(".telephone-number").text(telephoneNumber);

            tableRow.find(".delete-button").click(function () {
                tableRow.remove();
                number--;
                var rows = $(".row");

                for (var i = 0; i < number; i++) {
                    console.log(i);
                     rows.eq(i).find(".number").text(i + 1);
                }
            });
        }

        var tableRow = $("<tr>").addClass("row");

        setViewMode();

        table.append(tableRow);

        newLastName.val("");
        newFirstName.val("");
        newTelephoneNumber.val("");
    })
})