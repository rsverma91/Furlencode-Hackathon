var Tracker = new function() {
    var lat = null, 
        lng = null;
        cityName = null;
    var pageHit = function(){
        var img = document.createElement('img');
        img.src = '/api/pageHitCount/a.gif?pageName='+_gaq[0]+"&timeStamp="+ Math.floor(((new Date()).getTime())/1000)*1000 + "&lat="+ lat +"&lng=" + lng +"&cityName=" + cityName;
        img.style.width = '1px';
        img.style.height = '1px';
        img.style.visibility = 'hidden';

        var itg = document.getElementsByTagName('script')[0];
        itg.parentNode.insertBefore(img, itg);
    }

    var getLocation = function() {
        geocoder = new google.maps.Geocoder();

        //Get the latitude and the longitude
        var successLocation = function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            codeLatLng(lat, lng)
        };

        //Error in getting the lat and lng
        var errorLocation = function(error) {
            pageHit();
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
        }

        // Method for getting details (city name, state, country) related to lat, lng
        var codeLatLng = function(lat, lng) {
            var cityObj = {};
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({
                'latLng': latlng
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    // finding location details (city, country, state) from result array.
                    for (i = 0; i < results.length; ++i) {
                        var addressArr = results[i].address_components;
                        for (j = 0; j < addressArr.length; ++j) {
                            var addrTypeArr = addressArr[j].types;
                            for (k = 0; k < addrTypeArr.length; ++k) {
                                //find city
                                if (addrTypeArr[k] == "locality") {
                                    cityObj[addressArr[j].long_name] ? cityObj[addressArr[j].long_name]++ : cityObj[addressArr[j].long_name] = 1;
                                }
                                /*//find county
                                if (addrTypeArr[k] == "administrative_area_level_2") {
                                    console.log('county: ' + addressArr[j].long_name);
                                }
                                //find State
                                if (addrTypeArr[k] == "administrative_area_level_1") {
                                    console.log('state: ' + addressArr[j].short_name);
                                }*/
                            }
                        }
                    }
                    cityName = Object.keys(cityObj)[0];
                }
                pageHit();
            });
        };
    };
    this.pushTracking = function(trackingText, eventType, options){
        var postData = {
            pageName: _gaq[0],
            timeStamp: Math.floor(((new Date()).getTime())/1000)*1000,
            trackingText: trackingText,
            eventType: eventType,
            options: options
        };

        var img = document.createElement('img');
        img.src = '/api/pushTracking/p.gif?data=' + JSON.stringify(postData);
        img.style.width = '1px';
        img.style.height = '1px';
        img.style.visibility = 'hidden';

        var itg = document.getElementsByTagName('script')[0];
        itg.parentNode.insertBefore(img, itg);
    };

    this.initialize = function() {
        getLocation();
    };
};
Tracker.initialize();