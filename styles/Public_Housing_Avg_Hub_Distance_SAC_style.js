var size = 0;
var ranges_Public_Housing_Avg_Hub_Distance_SAC = [[0.000000, 359.000400, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,240,217,1.0)'})
    })]],
[359.000400, 1094.270000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,204,138,1.0)'})
    })]],
[1094.270000, 2397.532500, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,141,89,1.0)'})
    })]],
[2397.532500, 4182.076700, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(227,74,51,1.0)'})
    })]],
[4182.076700, 7496.856700, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(179,0,0,1.0)'})
    })]]];
var styleCache_Public_Housing_Avg_Hub_Distance_SAC={}
var style_Public_Housing_Avg_Hub_Distance_SAC = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Hub_Dist_1");
    var style = ranges_Public_Housing_Avg_Hub_Distance_SAC[0][2];
    for (i = 0; i < ranges_Public_Housing_Avg_Hub_Distance_SAC.length; i++){
        var range = ranges_Public_Housing_Avg_Hub_Distance_SAC[i];
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

    if (!styleCache_Public_Housing_Avg_Hub_Distance_SAC[key]){
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
        styleCache_Public_Housing_Avg_Hub_Distance_SAC[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Public_Housing_Avg_Hub_Distance_SAC[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};