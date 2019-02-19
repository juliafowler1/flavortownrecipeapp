"use strict";
function RecipeService($location, $http) {
    const self = this;
    self.setsearch = function(search) { //sets the data
        self.search = search; //declares the what the search parameter is
        $location.path("/recipe-list"); //sends you to the recipe list
        self.data = self.getredditdata();  //declares what vm. data means (all your self getredditdata)
        return self.getredditdata(); 
    }
    self.getSearch = function() { //gets the data
        return self.data; //return the vm.data we collected so that we can read what $ctrl.data is
    }
    self.getredditdata = function() { //fetch the data
        return $http({ //go to this specific URL and get the data
            url: "https://api.edamam.com/search?q="+self.search+"&app_id=8b7bd8f2&app_key=8dc778864de33e6b841e8ebdd5873e87&from=0&to=5&calories=591-722&health=alcohol-free",
            method: "GET"
        }).then(function(response){ //if the response is successful
            self.data=response; //set the response to self.data
            return self.data; //return the data
        })
    }
}




angular.module("RecipeApp")
    .service("RecipeService", RecipeService);