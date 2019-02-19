"use strict";
const searchCriteria = {
    template: `
    <p>FROM SEARCH CRITERIA</p>
    <button ng-click="$ctrl.getApi();">Search</button>
    `,
    controller: ["RecipeService", function(RecipeService) {
        const vm = this;
        vm.getApi = function() {
            RecipeService.getredditdata().then(function(response) {
                console.log(response);
            })
        }
    }]
}



angular.module("RecipeApp")
    .component("searchCriteria", searchCriteria);