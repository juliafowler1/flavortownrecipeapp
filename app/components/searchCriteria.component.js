"use strict";
const searchCriteria = {
    templateUrl: "app/components/searchCriteria.html",
    controller: ["RecipeService", function (RecipeService) {
        const vm = this;

        vm.getApi = function () { //when you click on the search button, it will set the search data to the service
            vm.data = RecipeService.setsearch(vm.search, vm.health, vm.diet); //set the data to whatever was entered into $ctrl.search button
            console.log(vm.data); //console log the data
        }
    }]
}

//past attempt to make out data show up~!//
/* <p>{{$ctrl.data.$$state.value.data.hits[0].recipe.label}}</p>
    <img src={{$ctrl.data.$$state.value.data.hits[0].recipe.image}}>
    <p>{{$ctrl.data.$$state.value.data.hits[1].recipe.label}}</p>
    <img src={{$ctrl.data.$$state.value.data.hits[1].recipe.image}}></img> */






//getter syntax for the component
angular.module("RecipeApp")
    .component("searchCriteria", searchCriteria);