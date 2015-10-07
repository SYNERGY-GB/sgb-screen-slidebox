'use strict';

angular.module('sgb-screen-slidebox', ['megazord'])
    .controller('sgb-screen-slidebox-controller', ['$scope', '_router', '_screen', '_screenParams', 'lodash', '$ionicSlideBoxDelegate', function ($scope, _router, _screen, _screenParams, _, $ionicSlideBoxDelegate) {
        _screen.initialize($scope, _screenParams);

        $scope.currentSlide = _screenParams.defaultSlide === undefined ? 0 : _screenParams.defaultSlide;

        $scope.update = function (index) {
            $scope.currentSlide = index;
        };
    }]);