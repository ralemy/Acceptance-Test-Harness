/**
 * Created by ralemy on 9/17/16.
 */

class MyController {
    constructor($scope) {
        this.scope = $scope;
    }
}

MyController.$inject = ["$scope"];

export default function (app) {
    app.controller("mycontroller", MyController);
}
