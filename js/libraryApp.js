var libraryApp = angular.module("libraryApp", ['ngRoute']);
 
// Configuration and Routing
libraryApp.config(function($routeProvider, $locationProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    })
    .hashPrefix('!');

  $routeProvider
    .when("/",{
      controller: "MainPage",
      templateUrl: "js/views/mainPage.html"
    })
    .when("/books",{
      controller: "BooksList",
      templateUrl: "js/views/booksList.html"
    })
    .when("/books/:author",{
      controller: "BooksList",
      templateUrl: "js/views/booksList.html"
    })
    .when("/authors",{
      controller: "AuthorsList",
      templateUrl: "js/views/authorsList.html"
    })
    .when("/add",{
      controller: "AddBook",
      templateUrl: "js/views/addBook.html"
    })
    .when("/edit/:index/",{
      controller: "AddBook",
      templateUrl: "js/views/addBook.html"
    })
    .otherwise({"redirectTo": "/"});
});
