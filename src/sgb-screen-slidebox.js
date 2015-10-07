'use strict';

angular.module('sgb-screen-slidebox', ['megazord'])
    .controller('sgb-screen-slidebox-controller', ['$scope', '_router', '_screen', '_screenParams', 'lodash', '$ionicSlideBoxDelegate', function ($scope, _router, _screen, _screenParams, _, $ionicSlideBoxDelegate) {
        _screen.initialize($scope, _screenParams);

        var slidebox = $ionicSlideBoxDelegate.$getByHandle('mainSlidebox');

        if(_screenParams.defaultSlide !== undefined) {
            slidebox.slide(_screenParams.defaultSlide, 0);
        }
    }]);