var Tracker = new function() {
    var pageHit = function(){
        var img = document.createElement('img');
        img.src = '/api/pageHitCount/a.gif?pageName='+_gaq[0]+"&timeStamp="+ Math.floor(((new Date()).getTime())/1000)*1000 + "&lat=&lng=";
        img.style.width = '1px';
        img.style.height = '1px';
        img.style.visibility = 'hidden';

        var itg = document.getElementsByTagName('script')[0];
        itg.parentNode.insertBefore(img, itg);
    }
    /**
     * Binding of events of Tracker screen
     * @method bindEvents
     * @param None
     */
    var bindEvents = function() {};
    /**
     * Public function to initialize all functionality (eg: Tracker.initialize(); )
     * @method initialize
     * @param None
     */
    this.initialize = function() {
        pageHit()
    };
};
Tracker.initialize();