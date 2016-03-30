libraryApp.controller("AddBook", function ($scope, $routeParams, $location) {
  $scope.title = 'Добавление книги';
  $scope.book = {};
  if($routeParams.index) {
    index = parseInt($routeParams.index);
    books = JSON.parse(localStorage.getItem('books'));
    if(0 > index || books.length - 1 < index) {
      $location.path('/');
    }
    $scope.edit = true;
    $scope.title = 'Редактирование книги';
    currentBook = books[$routeParams.index];
    $scope.book = currentBook;
    if($scope.book.description == 'Нет описания') {
      $scope.book.description = '';
    }
  }
  validate = function() {
    var error = false;
    $scope.nameRequired = '';
    $scope.authorRequired = '';
    $scope.rateRequired = '';
    if (!$scope.book.name) {
      error = true;
      $scope.nameRequired = 'Требуется ввести название книги!';
    }
    if (!$scope.book.author) {
      error = true;
      $scope.authorRequired = 'Требуется ввести автора книги!';
    }
    if (!$scope.book.rate) {
      error = true;
      $scope.rateRequired = 'Требуется оценить книгу!';
    }
    return error;
  }
  $scope.save_book = function() {
    var error = validate();
    if(!error) {
      books = (localStorage.getItem('books') == null) ? [] : JSON.parse(localStorage.getItem('books'));
      if($scope.book.description == '') {
        $scope.book.description = 'Нет описания';
      }
      books.push($scope.book);
      localStorage.setItem('books', JSON.stringify(books));
      $location.path('/books');
    }
  }
  $scope.edit_book = function() {
    var error = validate();
    if(!error) {
      if($scope.book.description == '') {
        $scope.book.description = 'Нет описания';
      }
      books[$routeParams.index] = $scope.book;
      localStorage.setItem('books', JSON.stringify(books));
      $location.path('/books');
    }
  }
  $scope.back = function() {
    history.back();
    scope.$apply();
  }
});