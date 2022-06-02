ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("myMap1", {
        center: [59.931695102381084,30.353725796295112],
        zoom: 17
    });

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [59.93143260279961,30.353736525131165]
        }
    });

    myMap.geoObjects.add(myGeoObject);  
}