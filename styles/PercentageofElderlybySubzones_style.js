var size = 0;
var ranges_PercentageofElderlybySubzones = [[0.000000, 4.181180, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})
    })]],
[4.181180, 11.658170, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,221,240,1.0)'})
    })]],
[11.658170, 17.584370, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(115,179,216,1.0)'})
    })]],
[17.584370, 41.176470, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,121,185,1.0)'})
    })]],
[41.176470, 80.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]]];
var styleCache_PercentageofElderlybySubzones={}
var style_PercentageofElderlybySubzones = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("percentage");
    var style = ranges_PercentageofElderlybySubzones[0][2];
    for (i = 0; i < ranges_PercentageofElderlybySubzones.length; i++){
        var range = ranges_PercentageofElderlybySubzones[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_PercentageofElderlybySubzones[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_PercentageofElderlybySubzones[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_PercentageofElderlybySubzones[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};