libraryApp.controller("BooksList", function ($scope, $routeParams) {
  $scope.filtered = false;
  $scope.empty = 'У вас нет сохраненных книг';
  $scope.books = books = (localStorage.getItem('books') == null) ? [] : JSON.parse(localStorage.getItem('books'));
  if($routeParams.author) {
    $scope.filtered = true;
    $scope.author = $routeParams.author;
    $scope.books = $scope.books.filter(function (book) {
      return book.author == $scope.author;
    });
  }

  $scope.delete = function(item) {
    var index = books.indexOf(item);
    $scope.books.splice(index, 1);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    if(!$scope.books.length) {
      $scope.empty = 'Все книги автора '+ $scope.author +' удалены!';
    }
  }
});