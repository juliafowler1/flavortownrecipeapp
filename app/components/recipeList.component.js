"use strict";
const recipeList = {
    template:`<p>COMING FROM RECIPE LIST</p>
    
    <section ng-repeat="items in $ctrl.data.$$state.value.data.hits">
    <p>{{items.recipe.label}}</p>
    <img src={{items.recipe.image}}>
    <p>URL: <a href="">{{items.recipe.url}}</a></p>
    </section>
    `,
    controller: ["RecipeService", function(RecipeService) {
        const vm = this;
        vm.data = RecipeService.getSearch(); //get the data
        console.log(vm.data); //log the data that you are searcing for
    }]
}

angular.module("RecipeApp")
    .component("recipeList", recipeList);