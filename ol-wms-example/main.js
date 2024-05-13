
const tileSource = new ol.source.TileWMS({
    url: 'https://ahocevar.com/geoserver/wms',
    params: {'LAYERS': 'topp:states', 'TILED': true},
    serverType: 'geoserver',
    transition: 0,
})

const tileLayer = new ol.layer.Tile({source: tileSource});

const map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        tileLayer
    ],
    target: 'map',
    view: new ol.View({
        center: [
            -99.6187035, 40.1930177
        ],
        zoom: 4,
        projection: 'EPSG:4326'
    })
});