var size = 0;

var styleCache_Subzone_Layer={}
var style_Subzone_Layer = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
    if (feature.get("SUBZONE_N") !== null) {
        var labelText = String(feature.get("SUBZONE_N"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Subzone_Layer[key]){
        var text = new ol.style.Text({
              font: '8.125px \'Helvetica\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
              stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 0
              }),
            });
        styleCache_Subzone_Layer[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Subzone_Layer[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};