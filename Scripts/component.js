function addComment() {
    // Get the input value
    var value = $('#inp').val();

    // Vulnerable comment
    $('#wrongDiv').append("<ul style='list-style-type: none' id='newWrongList'></ul>");
    $("#newWrongList").append("<li>" + value + "</li>");
}