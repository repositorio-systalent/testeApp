angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

//CONTROLLER DA ABA DE PERFIL DE USUÁRIO
.controller('ProfileCtrl', function($scope, Profiles) {

  //Variáveis de Controle
  $scope.loading = true;
  $scope.erro = false;

  //Carrega o Profile
  loadProfiles = function(){
    Profiles.getProfile().then(function (response){
      $scope.profile = response.data;
      $scope.loading = false;
    }, function (erro){
      console.log(erro);
      $scope.erro = true;
      $scope.loading = false;
    });
  }
  loadProfiles();

  //Recarrega o Profile
  $scope.reload = function(){
    $scope.loading = true;
    $scope.erro = false;
    loadProfiles();
  };

  //Edita data SQL para "DIA de MES de ANO"
  $scope.getBeautifulDate = function(dateSql){
    dateJs = new Date(dateSql);
    day = dateJs.getDate() < 10 ? "0" + dateJs.getDate() : dateJs.getDate();
    if (dateJs.getMonth() == 0)
    month =  "Jan";
    else if (dateJs.getMonth() == 1)
    month =  "Fev";
    else if (dateJs.getMonth() == 1)
    month =  "Mar";
    else if (dateJs.getMonth() == 1)
    month =  "Abr";
    else if (dateJs.getMonth() == 1)
    month =  "Mai";
    else if (dateJs.getMonth() == 1)
    month =  "Jun";
    else if (dateJs.getMonth() == 1)
    month =  "Jul";
    else if (dateJs.getMonth() == 1)
    month =  "Ago";
    else if (dateJs.getMonth() == 1)
    month =  "Set";
    else if (dateJs.getMonth() == 1)
    month =  "Out";
    else if (dateJs.getMonth() == 1)
    month =  "Nov";
    else (dateJs.getMonth() == 1)
    month =  "Dez";
    year = dateJs.getFullYear();
    return day + " de " + month + " de " + year;
  }
});
