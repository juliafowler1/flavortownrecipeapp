"use strict";
const recipeList = {
    template:`<p>COMING FROM RECIPE LIST</p>
    
    <section ng-repeat="items in $ctrl.data.$$state.value.data.hits track by $index">
    <p>{{items.recipe.label}}</p>
    <button class="heart" ng-click="$ctrl.addFav(items)">HEARTTTTT</button>
    <img src={{items.recipe.image}}>
    <p>URL: <a href="">{{items.recipe.url}}</a></p>
    <button ng-click="$ctrl.moreRecipe(items);">+</button>
    </section>


    <section ng-show="$ctrl.expandRecipe">
    <p>{{$ctrl.expand.recipe.label}}</p>
    <button class="heart" ng-click="$ctrl.addFav(items)">HEARTTTTT</button>
    <img src={{$ctrl.expand.recipe.image}}>
    <p>Calories: {{$ctrl.expand.recipe.calories}}</p>
    <p>Preptime: {{$ctrl.expand.totalTime}} minutes</p>
    <p>Serving Size: {{$ctrl.expand.recipe.yield}}</p>
    <p>Health Labels: {{$ctrl.expand.recipe.healthLabels}}</p>
    <p>URL: <a href="">{{$ctrl.expand.recipe.url}}</a></p>
    <button ng-click="$ctrl.hideRecipe()">X</button>
    </section>
    `,
    controller: ["RecipeService", function(RecipeService) {
        const vm = this;
        vm.expandRecipe = false;
        vm.data = RecipeService.getSearch(); //get the data
        console.log(vm.data); //log the data that you are searcing for
        vm.addFav = function(items) {
            vm.favorites = RecipeService.setFavs(items); //sets the info into a new array and sends us to the location page
        }
        vm.moreRecipe = function(items) {
            vm.expand = items;
            vm.expandRecipe = true;
            console.log(vm.expandRecipe)
        }
        vm.hideRecipe = function() {
            vm.expandRecipe = false;
        }
    }]
}

angular.module("RecipeApp")
    .component("recipeList", recipeList);