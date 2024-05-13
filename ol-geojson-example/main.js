const styles = {
    'Polygon': new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'blue', width: 3}),
        fill: new ol.style.Fill({color: 'rgba(0, 0, 255, 0.1)'})
    })
};

const styleFunction = function (feature) {
    return styles[
        feature.getGeometry().getType()
    ];
};

const geojsonObject = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "coordinates": [
                    [
                        [
                            -87.99658742206636, 15.029607683469962
                        ],
                        [
                            -88.09280476706378, 14.987479496681331
                        ],
                        [
                            -88.08198351337752, 14.933647834505493
                        ],
                        [
                            -87.84518833445671, 14.918918107764995
                        ],
                        [
                            -87.73938512385061, 15.016108770641395
                        ],
                        [-87.99658742206636, 15.029607683469962]
                    ]
                ],
                "type": "Polygon"
            }
        }
    ]
}

const vectorSource = new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(geojsonObject)
});

const vectorLayer = new ol.layer.Vector({source: vectorSource, style: styleFunction});

const map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorLayer
    ],
    target: 'map',
    view: new ol.View({
        center: [
            -87.99658742206636, 15.029607683469962
        ],
        zoom: 10,
        projection: 'EPSG:4326'
    })
});