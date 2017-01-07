(function () {
    'use strict';

    angular.module('user').controller('UserCtrl', UserCtrl);

    /* @ngInject */
    /**
     * @ngdoc controller
     * @name user.controller:UserCtrl
     * @description
     * User controller, get user data from service
     * @requires $scope
     * @requires $ionicLoading
     * @requires $ionicPopup
     * @requires UserService
     * @constructor
     */
    function UserCtrl($scope, $ionicLoading, $ionicPopup, UserService) {

        var self = this;

        /**
         * @ngdoc property
         * @name model
         * @propertyOf user.controller:UserCtrl
         * @description
         * Contains user data
         *
         * @type {Object}
         */
        self.model = {};

        $scope.$on('$ionicView.enter', Load);

        /**
         * @method Load
         * @description
         * Load data from service
         *
         */
        function Load() {

            $ionicLoading.show();

            UserService.getData().then(function(data){

                $ionicLoading.hide();
                self.model = data;

            }, function(){

                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Oops !',
                    template: 'Ocorreu um erro, contate o suporte.'
                });

            });

        }

    }

})();
