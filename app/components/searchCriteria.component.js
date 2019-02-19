"use strict";
const searchCriteria = {
    template: `
    <p>FROM SEARCH CRITERIA</p>
    <input type="text" ng-model="$ctrl.search">
    <button ng-click="$ctrl.getApi();">Search</button>
    

    <section ng-repeat="items in $ctrl.data.$$state.value.data.hits">
    <p>{{items.recipe.label}}</p>
    <img src={{items.recipe.image}}>

    `,
    controller: ["RecipeService", function(RecipeService) {
        const vm = this;
        vm.getApi = function() {
                vm.data = RecipeService.getsearch(vm.search);
                console.log(vm.data);
            }
    }]
}


/* <p>{{$ctrl.data.$$state.value.data.hits[0].recipe.label}}</p>
    <img src={{$ctrl.data.$$state.value.data.hits[0].recipe.image}}>
    <p>{{$ctrl.data.$$state.value.data.hits[1].recipe.label}}</p>
    <img src={{$ctrl.data.$$state.value.data.hits[1].recipe.image}}></img> */

angular.module("RecipeApp")
    .component("searchCriteria", searchCriteria);