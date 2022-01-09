var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_KECAMATAN_0 = new ol.format.GeoJSON();
var features_KECAMATAN_0 = format_KECAMATAN_0.readFeatures(json_KECAMATAN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KECAMATAN_0.addFeatures(features_KECAMATAN_0);var lyr_KECAMATAN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KECAMATAN_0, 
                style: style_KECAMATAN_0,
    title: 'KECAMATAN<br />\
    <img src="styles/legend/KECAMATAN_0_0.png" />  831.0000 - 4104.2000 <br />\
    <img src="styles/legend/KECAMATAN_0_1.png" />  4104.2000 - 7377.4000 <br />\
    <img src="styles/legend/KECAMATAN_0_2.png" />  7377.4000 - 10650.6000 <br />\
    <img src="styles/legend/KECAMATAN_0_3.png" />  10650.6000 - 13923.8000 <br />\
    <img src="styles/legend/KECAMATAN_0_4.png" />  13923.8000 - 17197.0000 <br />'
        });var format_LUASLAHAN_1 = new ol.format.GeoJSON();
var features_LUASLAHAN_1 = format_LUASLAHAN_1.readFeatures(json_LUASLAHAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUASLAHAN_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LUASLAHAN_1.addFeatures(features_LUASLAHAN_1);var lyr_LUASLAHAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LUASLAHAN_1, 
                style: style_LUASLAHAN_1,
    title: 'LUAS LAHAN<br />\
    <img src="styles/legend/LUASLAHAN_1_0.png" />  1020 - 2657 <br />\
    <img src="styles/legend/LUASLAHAN_1_1.png" />  2657 - 4294 <br />\
    <img src="styles/legend/LUASLAHAN_1_2.png" />  4294 - 5930 <br />\
    <img src="styles/legend/LUASLAHAN_1_3.png" />  5930 - 7567 <br />\
    <img src="styles/legend/LUASLAHAN_1_4.png" />  7567 - 9204 <br />'
        });

lyr_KECAMATAN_0.setVisible(true);lyr_LUASLAHAN_1.setVisible(true);
var layersList = [baseLayer,lyr_KECAMATAN_0,lyr_LUASLAHAN_1];
lyr_KECAMATAN_0.set('fieldAliases', {'id': 'id', 'NAMA KEC.': 'NAMA KEC.', 'LUAS LAHAN': 'LUAS LAHAN', 'L .SAWAH': 'L .SAWAH', 'L.TERPAKAI': 'L.TERPAKAI', 'PENDUDUK': 'PENDUDUK', });
lyr_LUASLAHAN_1.set('fieldAliases', {'id': 'id', 'LAHN HIJAU': 'LAHN HIJAU', 'LUAS LAHAN': 'LUAS LAHAN', 'LAHNPAKAI': 'LAHNPAKAI', });
lyr_KECAMATAN_0.set('fieldImages', {'id': 'TextEdit', 'NAMA KEC.': 'TextEdit', 'LUAS LAHAN': 'TextEdit', 'L .SAWAH': 'TextEdit', 'L.TERPAKAI': 'TextEdit', 'PENDUDUK': 'TextEdit', });
lyr_LUASLAHAN_1.set('fieldImages', {'id': 'TextEdit', 'LAHN HIJAU': 'TextEdit', 'LUAS LAHAN': 'TextEdit', 'LAHNPAKAI': 'TextEdit', });
lyr_KECAMATAN_0.set('fieldLabels', {'id': 'inline label', 'NAMA KEC.': 'inline label', 'LUAS LAHAN': 'header label', 'L .SAWAH': 'inline label', 'L.TERPAKAI': 'inline label', 'PENDUDUK': 'inline label', });
lyr_LUASLAHAN_1.set('fieldLabels', {'id': 'inline label', 'LAHN HIJAU': 'inline label', 'LUAS LAHAN': 'inline label', 'LAHNPAKAI': 'inline label', });
lyr_LUASLAHAN_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});