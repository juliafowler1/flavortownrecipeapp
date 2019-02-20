"use strict";
const favoritesPage = {
    template:`<p>HI FAVORITES PAGE</p>
    
    <section ng-repeat="fav in $ctrl.favorites track by $index">
    <p>{{fav.recipe.label}}</p>
    <img src={{fav.recipe.image}}>
    <p>URL: <a href="">{{fav.recipe.url}}</a></p>
    <button ng-click="$ctrl.remFavs($index)">X</button>
    </section>
    `,
    controller: ["RecipeService", function(RecipeService) {
        const vm = this;
        // vm.$onInit = function(){ don't think we need this
            vm.favorites = RecipeService.getFavs(); //set $ctrl.favorites to the data that we received from the service
            console.log(vm.favorites);  //you need to reference vm when you put it in the console
        // }
        vm.remFavs = function($index) { //when you click on the x button, it will remove the specfic item
            RecipeService.removeFavs($index); //removes item by the index
            console.log($index); //just double checking this
            
        }
    }]
    
}

//getter syntax for the component
angular.module("RecipeApp")
    .component("favoritesPage", favoritesPage);