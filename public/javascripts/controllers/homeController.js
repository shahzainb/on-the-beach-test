/**
 * Initialising the HomeController. Dependencies: $scope and HomeService
 */
onTheBeachApp.controller("HomeController", ["$scope", "HomeService", function($scope, HomeService){

    $scope.viewModel = this;

    var _self = this;

    _self.orderBy = '+price';
    _self.isActive1 = false;
    _self.isActive2 = true;
    _self.isActive3 = false;
    _self.hotelData = {};

    _self.getData = function () {

        var hotelData = HomeService.getHotelData();

        hotelData
            .success(function(data){
                _self.hotelData = data.hotels;
            })
            .error(function(response){
                console.log(response);
            });
    };

    _self.toggleButton = function (button) {

        switch (button) {

            case 1:
                (_self.isActive1) ? _self.isActive1 = false : _self.isActive1 = true;
                _self.isActive2 = false;
                _self.isActive3 = false;
                _self.orderBy = '+name';
                break;

            case 2:
                (_self.isActive2) ? _self.isActive2 = false : _self.isActive2 = true;
                _self.isActive1 = false;
                _self.isActive3 = false;
                _self.orderBy = '+price';
                break;

            case 3:
                (_self.isActive3) ? _self.isActive3 = false : _self.isActive3 = true;
                _self.isActive1 = false;
                _self.isActive2 = false;
                _self.orderBy = '-rating';
                break;

            default:
                break;
        }

    };

    _self.getData();

}]);
