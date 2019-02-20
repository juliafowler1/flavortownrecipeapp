"use strict";
const searchCriteria = {
    template: `
    <p>FROM SEARCH CRITERIA</p>

    <input type="text" ng-model="$ctrl.search">

<p>Health restrictions:</p>
    <select ng-model="$ctrl.health">
        <option value="0" >Vegetarian</option>
        <option value="1">Gluten-free</option>
        <option value="2">Alcohol-free</option>
        <option value="3">Peanut-free</option>
    </select>
<p>You selected: {{$ctrl.health}}</p>

<p>Dietary restrictions:</p>
    <select ng-model="$ctrl.diet">
        <option value="0" >Balanced</option>
        <option value="1">Low-fat</option>
        <option value="2">High-Protein</option>
        <option value="3">Low-carb</option>
    </select>
<p>You selected: {{$ctrl.diet}}</p>

    <button ng-click="$ctrl.getApi();">Search</button>
    `,
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