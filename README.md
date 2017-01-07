# testApp

Favor alterar o valor da variável url ( testeApp/www/js/controller.js ) para o endereço padrão onde estará hospedado o arquivo usuario.json

```
.controller('ProfileCtrl', function($scope, $http) {
    //TODO::alterar o valor da variável url para o endereço padrão onde estará hospedado o arquivo usuario.json
    var url = "http://192.168.25.8:8100/";
    $scope.user = {};
    $http.get(url + "appdata/usuario.json").then(function(result) {
        $scope.user = result.data;
    }, function(e) {
        console.log("Erro ao carregar dados do usuário");
    });

});
```
