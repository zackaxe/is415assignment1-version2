var size = 0;

var styleCache_DayCareCentresDCCSocial={}
var style_DayCareCentresDCCSocial = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.0344829369807,
                  anchor: [10, 10],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/h.svg"
            })
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_DayCareCentresDCCSocial[key]){
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
        styleCache_DayCareCentresDCCSocial[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_DayCareCentresDCCSocial[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};