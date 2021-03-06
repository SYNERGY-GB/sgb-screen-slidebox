'use strict';

angular.module('sgb-screen-slidebox', ['megazord'])
    .controller('sgb-screen-slidebox-controller', ['$scope', '_router', '_screen', '_screenParams', 'lodash', '$ionicSlideBoxDelegate', function ($scope, _router, _screen, _screenParams, _, $ionicSlideBoxDelegate) {
        _screen.initialize($scope, _screenParams);

        console.log('Loading slider...');
        if(!$scope.currentSlide) {
            $scope.currentSlide = _screenParams.defaultSlide === undefined ? 0 : _screenParams.defaultSlide;
        }
    }]);