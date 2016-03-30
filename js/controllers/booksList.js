libraryApp.controller("BooksList", function ($scope, $routeParams) {
  $scope.filtered = false;
  $scope.author = '';
  $scope.empty = 'У вас нет сохраненных книг';
  books = (localStorage.getItem('books') == null) ? [] : JSON.parse(localStorage.getItem('books'));
  if($routeParams.author) {
    $scope.filtered = true;
    author = $routeParams.author;
    $scope.author = 'автора '+author
    $scope.books = books.filter(function (book) {
      return book.author == author;
    });
  }
  else {
    $scope.books = (localStorage.getItem('books') == null) ? [] : JSON.parse(localStorage.getItem('books'));
  }

  $scope.delete = function(item) {
    var indexBooks = books.indexOf(item);
    var indexScope = $scope.books.indexOf(item);
    $scope.books.splice(indexScope, 1);
    books.splice(indexBooks, 1);
    localStorage.setItem('books', JSON.stringify(books));
    if(!$scope.books.length) {
      $scope.empty = 'Все книги '+ $scope.author +' удалены!';
    }
  }
});