(function () {
    'use strict';

    angular.module('user').config(Route);

    /* @ngInject */
    /**
     * @ngdoc overview
     * @name user.config
     * @description
     * route definitions
     *
     * @example
     * ```javascript
     * $stateProvider.state('tab.user_account', {
     *       url: '/user-account',
     *       views: {
     *           'tab-user-account': {
     *               templateUrl: 'js/components/user/view/user.view.html',
     *               controller: 'UserCtrl',
     *               controllerAs: 'ctrl'
     *           }`
     *       }
     *   })
     * ```
     *
     * @requires $stateProvider
     * @requires $urlRouterProvider
     */
    function Route($stateProvider, $urlRouterProvider) {

        $stateProvider.state('tab.user_account', {
            url: '/user-account',
            views: {
                'tab-user-account': {
                    templateUrl: 'js/components/user/view/user.view.html',
                    controller: 'UserCtrl',
                    controllerAs: 'ctrl'
                }
            }
        })

    }

})();
