'use strict'

class Route {
    name;
    htmlName;
    defaultRoute;

    constructor(name, htmlName, defaultRoute){ 
        try{
            if(!name || !htmlName){
                throw 'error: name and htmlName params are mandatories'
            }
            this.name = name;
            this.htmlName = htmlName,
            this.defaultRoute = defaultRoute
        }
        catch (e){
            console.error(e);
        }
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