"use strict";
function RecipeService($location, $http) {
    const self = this;
    self.favorites = [];
    self.setsearch = function(search) { //sets the data from what you entered into the search button
        self.search = search; //declares the what the search parameter is
        $location.path("/recipe-list"); //sends you to the recipe list page
        self.data = self.getredditdata();  //declares what vm. data means (all your self getredditdata)
        return self.getredditdata(); 
    }
    self.getSearch = function() { //gets the data from the search button
        return self.data; //return the vm.data we collected so that we can read what $ctrl.data is
    }
    self.getredditdata = function() { //fetch the data from the search button
        return $http({ //go to this specific URL and get the data
            url: "https://api.edamam.com/search?q="+self.search+"&app_id=8b7bd8f2&app_key=8dc778864de33e6b841e8ebdd5873e87&from=0&to=5&calories=591-722&health=alcohol-free",
            method: "GET"
        }).then(function(response){ //if the response is successful
            self.data=response; //set the response to self.data
            return self.data; //return the data
        })
    }
    self.setFavs = function(items) { //sets the data for the favorites list
        self.favorites.push(items);  //pushes the favorite item into a new favorites list
    }
    self.removeFavs = function(index) { //removes the data from the favorites list from the index
        self.favorites.splice(index, 1); //splices the data from the array
    }
    self.getFavs = function() { //gets the data that for the favorites list
        return self.favorites; //returns the data so that the page can read it
    }
}



//service getter syntax
angular.module("RecipeApp")
    .service("RecipeService", RecipeService);