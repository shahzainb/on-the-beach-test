//TO-DO unit tests and JSDocs

/**
 * Initialising the app module.
 * @type {*}
 */
var onTheBeachApp = angular.module('OnTheBeachApp', ['angularSlideables']);

/**
 * IE8 console fix
 */
if (!window.console) {
    console = {
        log: function () {

        }
    }
}

/**
 * Range filter that repeats the item an X number of times
 */

onTheBeachApp.filter('range', function() {

    return function(value, range) {

        range = parseInt(range);

        for (var i = 0; i < range; i++) {
            value.push(i);
        }

        return value;
    };

});