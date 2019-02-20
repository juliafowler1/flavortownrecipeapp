"use strict"
//when we click on the anchor tags, this will designate where the user goes
angular.module("RecipeApp")
.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/favorites-page",{ //when you click on the favorites-page tag
            template: "<favorites-page></favorites-page>" //go to the favoritesPage component
        })

        .when("/recipe-list",{ //when you click on the recipe-list tag
            template: "<recipe-list></recipe-list>" //go to the recipeList component
        })
        .when("/search-criteria", { //when you click on the search-critera tag
            template: "<search-criteria></search-criteria>" //go to the searchCritera component
        })
        .when("/", { //when you open up your vs live or go to your home page
            template: "<search-criteria></search-criteria>" //searchCritera component will be displayed
        })


}]);