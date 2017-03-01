var size = 0;
var ranges_Public_Housing_Avg_Hub_Distance_SHC = [[0.000000, 504.280000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(241,238,246,1.0)'})
    })]],
[504.280000, 1533.906100, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(215,181,216,1.0)'})
    })]],
[1533.906100, 2689.150100, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(223,101,176,1.0)'})
    })]],
[2689.150100, 4368.679000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(221,28,119,1.0)'})
    })]],
[4368.679000, 7583.110000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(152,0,67,1.0)'})
    })]]];
var styleCache_Public_Housing_Avg_Hub_Distance_SHC={}
var style_Public_Housing_Avg_Hub_Distance_SHC = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Hub_Dist_2");
    var style = ranges_Public_Housing_Avg_Hub_Distance_SHC[0][2];
    for (i = 0; i < ranges_Public_Housing_Avg_Hub_Distance_SHC.length; i++){
        var range = ranges_Public_Housing_Avg_Hub_Distance_SHC[i];
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

    if (!styleCache_Public_Housing_Avg_Hub_Distance_SHC[key]){
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
        styleCache_Public_Housing_Avg_Hub_Distance_SHC[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Public_Housing_Avg_Hub_Distance_SHC[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};