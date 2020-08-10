class Router{
    routes;
    rootElem;

    constructor(routes){
        try {
            if(!routes){
                throw 'error: routes param is mandatory';
            }
            this.routes = routes;
            this.rootElem = document.getElementById('app');
        } catch (e) {
            console.error(e)
        }
    }

    init(){
        var r = this.routes;
        (function(scope, r){
            if(window.location.hash.length > 0){
                for (var i = 0; i < r.length; i++) {
                    window.addEventListener('hashchange', function(e) {
                        scope.hasChanged(scope, r)
                    });         
                }
            }
        })(this, r);
        this.hasChanged(this, r);
    }

    hasChanged(scope, r) {
        if(window.location.hash.length > 0){
            for (let i = 0; i < r.length; i++) {
                var route = r[i]
                if(route.isActiveRoute(window.location.hash.substr(1))){
                    scope.goToRoute(route.route.htmlName)
                }
            }
        }
        else{
            for (let i = 0; i < r.length; i++) {
                var route = r[i];
                if(route.default){
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    }

    goToRoute(htmlName){
        (function(scope) {
            var url = 'views/' + htmlName,
            xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status == 200){
                    scope.rootElem.innerHtml = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this)
    }
}
