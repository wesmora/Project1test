var ingredientsURL = "http://food2fork.com/api/get?key=151d95c298ae0cc6c3a40e9e47fc437a&rId=" + ingredientInput;
var ingredientInput = [];


$("#search").on("click",function(event) {
    event.preventDefault();
    // storing the search input
    var search = $("#search-input").val().trim();
    // resetting input to blank value
    $("#search-input").val('');

    // calling ajax
    getRecipe(search);
    // removing element from array after its searched
});

function getRecipe(search) {
  var baseURL ="https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search/";
  // var baseURL = "http://food2fork.com/api/search/";
    var apiKey = "151d95c298ae0cc6c3a40e9e47fc437a";
    var count = "&count=5";
    var newURL = baseURL + "?key=" + apiKey + "&q=" + search + count;
    console.log(newURL)

    $.ajax({
        url: newURL,
        method: "GET",
        headers: {"Access-Control-Allow-Origin":"*",
         "Access-Control-Allow-Origin": "<origin>",
         "accept":"application/json" }
      })
      .done(function(response) {
      console.log(response);  

        for (i=0; i<3; i++) {
              var recipeTitle = $("<h1>").text(response.recipes[i]);
              var recipeLink = $("<a>").attr("href", response.recipes[i].f2f_url).append(recipeTitle);
              var recipeImage = $("<img>").attr("src", response.recipes[i].image_url);
              // var ingredients = $("<ol>").text(response.recipes[i].ingredients);
              $("#recipe").append(recipeTitle, recipeLink, recipeImage, ingredients);
              console.log(response);
          }

      });
    };

    