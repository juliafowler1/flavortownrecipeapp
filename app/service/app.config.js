"use strict"

angular.module("RecipeApp")
.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/favorites-page",{
            template: "<favorites-page></favorites-page>"
        })

        .when("/recipe-list",{
            template: "<recipe-list></recipe-list>"
        })
        .when("/search-criteria", {
            template: "<search-criteria></search-criteria>"
        })
        .when("/", {
            template: "<search-criteria></search-criteria>"
        })


}]);