describe('HomeController', function(){

    var $scope, $rootScope, homeController, controller;

    beforeEach(module('OnTheBeachApp'));
    beforeEach(inject(function($injector){
        var $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        var $controller = $injector.get('$controller');

        controller = function(){

            return $controller('HomeController', {
                '$scope': $scope
            });
        }
    }));

    it('should toggle button', function () {

        homeController = new controller();

        homeController.toggleButton(1);
        expect(homeController.isActive1).toBe(true);
        expect(homeController.isActive2).toBe(false);
    });

    it('should change order by depending on the button clicked', function () {

        homeController = new controller();

        homeController.toggleButton(3);
        expect(homeController.orderBy).toEqual('-rating');
    });
});
