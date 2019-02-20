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
        vm.expandRecipe = false; //declaring the class expandRecipe as false so nothing shows up
        vm.data = RecipeService.getSearch(); //declares $ctrl.data as the data we received from the service
        console.log(vm.data); //logs the data that you are searching for
        vm.addFav = function(items) { //when you click the heart, it adds the item into your array
            vm.favorites = RecipeService.setFavs(items); //sets the info into a new array and sends us to the location page
        }
        vm.moreRecipe = function(items) {  //when you click the plus button, it will give more details to the recipe
            vm.expand = items; 
            //$ctrl.expand needs to be set as "items" so that the computer recognizes this secition is a continuation of our $ctrl.data array
            vm.expandRecipe = true; //sets the class as true so that the expanded recipe will show
            console.log(vm.expandRecipe) //making sure this works
        }
        vm.hideRecipe = function() { //when you click on the x button, it will hide the recipe
            vm.expandRecipe = false; //it hides because you are changing the class to false so that it doesn't show anymore
        }
    }]
}


//getter syntax for the component
angular.module("RecipeApp")
    .component("recipeList", recipeList);