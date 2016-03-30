libraryApp.controller("AuthorsList", function ($scope, $routeParams) {
  books = (localStorage.getItem('books') == null) ? [] : JSON.parse(localStorage.getItem('books'));
  var length = books.length;
  var i = 0;
  $scope.authors = {};
  for(i; i<length; i++) {
    if($scope.authors[books[i].author]) {
      $scope.authors[books[i].author]++
      continue;
    }
    $scope.authors[books[i].author] = 1;
  }
  $scope.length = Object.keys($scope.authors).length;
});