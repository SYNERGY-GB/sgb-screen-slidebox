'use strict';

angular.module('sgb-screen-slidebox', ['megazord'])
    .controller('sgb-screen-slidebox-controller', ['$scope', '_router', '_screen', '_screenParams', 'lodash', '$ionicSlideBoxDelegate', function ($scope, _router, _screen, _screenParams, _, $ionicSlideBoxDelegate) {
        _screen.initialize($scope, _screenParams);

        $scope.slides = [];
        for(var i = 0; i < _screenParams.slides; i++) {
            $scope.slides.push(i);
        }

        var slidebox = $ionicSlideBoxDelegate.$getByHandle('mainSlidebox');
    }]);