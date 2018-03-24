
$(document).on("click", ".gifBtn", function() {
    event.preventDefault()

    var gifBtnArray = [];

    var userInput = $("#userInput").val().trim()
    console.log(userInput)

    var btnId = $(this).attr("id");

    var apiKey = "zZQlQ2JXfLotN2b9d4nzrch61oQdqVEx";

    var apiUrl = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=" + apiKey + "&limit=9"


    if ($("button").attr("id") === userInput || userInput == "") {
        apiUrl = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr("id") + "&api_key=" + apiKey + "&limit=9"
    }

    else {
        $("#buttonArea").prepend("<button type='button' class='btn btn-success gifBtn' id = " + userInput + ">" + userInput + "</button>")
    }

    $.ajax ({
        url: apiUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        console.log(response.data.length)




        for (var i = 0; i < response.data.length; i++) {

            var gifUrl = response.data[i].images.original_still.url

            var newUrl = response.data[i].images.original.url

            $("#gifArea").prepend("<img class = 'gif' src =" + gifUrl + 
                                            " data-still = " + gifUrl + 
                                            " data-animate = " + newUrl + 
                                            " data-state = 'still'>")

        }

    })

})

$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }

    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})