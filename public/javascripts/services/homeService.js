/**
 * Initialising the HomeService. Dependencies: $http.
 */
onTheBeachApp.service("HomeService", ["$http", function($http){

    this.getHotelData = function () {
        return $http.get('/data/hotelData.json');
    }
}]);
