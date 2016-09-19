import angular from "angular";

let apps = [];
function getApp(appName) {
    apps.push(appName);
    return angular.module(appName,[]);
}
function bootstrap(app) {

}

export {getApp, bootstrap};
