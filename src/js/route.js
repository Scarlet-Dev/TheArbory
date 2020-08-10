export class Route {
    name;
    htmlName;
    defaultRoute;

    constructor(name, htmlName, defaultRoute){    
        this.name = name;
        this.htmlName = htmlName,
        this.defaultRoute = defaultRoute
    }    
        
    getParamsList(){
        var url = window.location.search;
        var urlParams = new URLSearchParams(url);
        return urlParams;
    }
    
    isActiveRoute(hashedPath){
        return hashedPath.replace('#', '') === this.name;
    }
}