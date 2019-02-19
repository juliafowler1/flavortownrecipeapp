"use strict";
function RecipeService($location, $http) {
    const self = this;
    self.setsearch = function(search) {
        self.search = search;
        $location.path("/recipe-list");
        self.data = self.getredditdata();
        return self.getredditdata();
    }
    self.getSearch = function() {
        return self.data;
    }
    self.getredditdata = function() {
        return $http({
            url: "https://api.edamam.com/search?q="+self.search+"&app_id=8b7bd8f2&app_key=8dc778864de33e6b841e8ebdd5873e87&from=0&to=5&calories=591-722&health=alcohol-free",
            method: "GET"
        }).then(function(response){
            self.data=response;
            return self.data;
        })
    }
}




angular.module("RecipeApp")
    .service("RecipeService", RecipeService);