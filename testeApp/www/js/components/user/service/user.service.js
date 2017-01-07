(function () {
    'use strict';

    angular.module('user').service('UserService', UserService);

    /* @ngInject */
    /**
     * @ngdoc service
     * @name user.service:UserService
     *
     * @description
     * User service
     *
     * @requires $q
     * @requires $timeout
     * @requires $http
     */
    function UserService($q, $timeout, $http) {

        /**
         * @ngdoc method
         * @name getData
         * @methodOf user.service:UserService
         * @description
         * Get data from json in appdata/user.json
         *
         * @returns {Promise} A promise of user object data
         */
        this.getData = function(){

            var deferred = $q.defer();

            $timeout(function(){

                $http.get('appdata/user.json').success(function(response){

                    var result = __parseData(response);
                    deferred.resolve(result);

                }).error(deferred.reject);

            }, 1000);

            return deferred.promise;

        };

        return this;

        /**
         * @method __parseData
         * @param data
         * @returns {{profile_photo: *, full_name: *, nickname: *, email, phone: *, birth_date: *, gender: *}}
         * @private
         */
        function __parseData(data){

            // format date is YYYY-MM-DD
            var date = data.data_nascimento.split('-');

            return {
                profile_photo: data.urlFoto,
                full_name: data.nome,
                nickname: data.apelido,
                email: data.email,
                phone: data.telefone,
                birth_date: date[2] + '/' + date[1] + '/' + date[0],
                gender: data.genero
            };

        }

    }

})();
