var size = 0;

var styleCache_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone={}
var style_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone[key]){
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
        styleCache_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};