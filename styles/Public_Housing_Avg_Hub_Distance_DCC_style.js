var size = 0;
var ranges_Public_Housing_Avg_Hub_Distance_DCC = [[0.000000, 318.099100, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,252,245,1.0)'})
    })]],
[318.099100, 993.136200, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(202,234,195,1.0)'})
    })]],
[993.136200, 1766.476900, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(123,200,124,1.0)'})
    })]],
[1766.476900, 2573.082400, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(42,146,74,1.0)'})
    })]],
[2573.082400, 3783.087400, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,68,27,1.0)'})
    })]]];
var styleCache_Public_Housing_Avg_Hub_Distance_DCC={}
var style_Public_Housing_Avg_Hub_Distance_DCC = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Hub_Distan");
    var style = ranges_Public_Housing_Avg_Hub_Distance_DCC[0][2];
    for (i = 0; i < ranges_Public_Housing_Avg_Hub_Distance_DCC.length; i++){
        var range = ranges_Public_Housing_Avg_Hub_Distance_DCC[i];
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

    if (!styleCache_Public_Housing_Avg_Hub_Distance_DCC[key]){
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
        styleCache_Public_Housing_Avg_Hub_Distance_DCC[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Public_Housing_Avg_Hub_Distance_DCC[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};