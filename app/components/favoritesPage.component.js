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
            vm.favorites = RecipeService.getFavs();
            console.log(vm.favorites);  //you need to reference vm when you put it in the console
        // }
        vm.remFavs = function($index) {
            RecipeService.removeFavs($index);
            console.log($index);
            
        }
    }]
    
}


angular.module("RecipeApp")
    .component("favoritesPage", favoritesPage);