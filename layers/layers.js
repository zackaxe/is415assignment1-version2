var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Subzone_Layer = new ol.format.GeoJSON();
var features_Subzone_Layer = format_Subzone_Layer.readFeatures(geojson_Subzone_Layer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subzone_Layer = new ol.source.Vector();
jsonSource_Subzone_Layer.addFeatures(features_Subzone_Layer);var lyr_Subzone_Layer = new ol.layer.Vector({
                source:jsonSource_Subzone_Layer, 
                style: style_Subzone_Layer,
                title: "Subzone_Layer"
            });var format_PercentageofElderlybySubzones = new ol.format.GeoJSON();
var features_PercentageofElderlybySubzones = format_PercentageofElderlybySubzones.readFeatures(geojson_PercentageofElderlybySubzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentageofElderlybySubzones = new ol.source.Vector();
jsonSource_PercentageofElderlybySubzones.addFeatures(features_PercentageofElderlybySubzones);var lyr_PercentageofElderlybySubzones = new ol.layer.Vector({
                source:jsonSource_PercentageofElderlybySubzones, 
                style: style_PercentageofElderlybySubzones,
                title: "Percentage of Elderly by Subzones"
            });var format_Public_Housing_Avg_Hub_Distance_SHC = new ol.format.GeoJSON();
var features_Public_Housing_Avg_Hub_Distance_SHC = format_Public_Housing_Avg_Hub_Distance_SHC.readFeatures(geojson_Public_Housing_Avg_Hub_Distance_SHC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Housing_Avg_Hub_Distance_SHC = new ol.source.Vector();
jsonSource_Public_Housing_Avg_Hub_Distance_SHC.addFeatures(features_Public_Housing_Avg_Hub_Distance_SHC);var lyr_Public_Housing_Avg_Hub_Distance_SHC = new ol.layer.Vector({
                source:jsonSource_Public_Housing_Avg_Hub_Distance_SHC, 
                style: style_Public_Housing_Avg_Hub_Distance_SHC,
                title: "Public_Housing_Avg_Hub_Distance_SHC"
            });var format_SeniorsHomeCareSHC = new ol.format.GeoJSON();
var features_SeniorsHomeCareSHC = format_SeniorsHomeCareSHC.readFeatures(geojson_SeniorsHomeCareSHC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeniorsHomeCareSHC = new ol.source.Vector();
jsonSource_SeniorsHomeCareSHC.addFeatures(features_SeniorsHomeCareSHC);var lyr_SeniorsHomeCareSHC = new ol.layer.Vector({
                source:jsonSource_SeniorsHomeCareSHC, 
                style: style_SeniorsHomeCareSHC,
                title: "Seniors Home Care SHC"
            });var format_Public_Housing_Avg_Hub_Distance_SAC = new ol.format.GeoJSON();
var features_Public_Housing_Avg_Hub_Distance_SAC = format_Public_Housing_Avg_Hub_Distance_SAC.readFeatures(geojson_Public_Housing_Avg_Hub_Distance_SAC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Housing_Avg_Hub_Distance_SAC = new ol.source.Vector();
jsonSource_Public_Housing_Avg_Hub_Distance_SAC.addFeatures(features_Public_Housing_Avg_Hub_Distance_SAC);var lyr_Public_Housing_Avg_Hub_Distance_SAC = new ol.layer.Vector({
                source:jsonSource_Public_Housing_Avg_Hub_Distance_SAC, 
                style: style_Public_Housing_Avg_Hub_Distance_SAC,
                title: "Public_Housing_Avg_Hub_Distance_SAC"
            });var format_SeniorActivityCentresSAC = new ol.format.GeoJSON();
var features_SeniorActivityCentresSAC = format_SeniorActivityCentresSAC.readFeatures(geojson_SeniorActivityCentresSAC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeniorActivityCentresSAC = new ol.source.Vector();
jsonSource_SeniorActivityCentresSAC.addFeatures(features_SeniorActivityCentresSAC);var lyr_SeniorActivityCentresSAC = new ol.layer.Vector({
                source:jsonSource_SeniorActivityCentresSAC, 
                style: style_SeniorActivityCentresSAC,
                title: "Senior Activity Centres SAC"
            });var format_Public_Housing_Avg_Hub_Distance_DCC = new ol.format.GeoJSON();
var features_Public_Housing_Avg_Hub_Distance_DCC = format_Public_Housing_Avg_Hub_Distance_DCC.readFeatures(geojson_Public_Housing_Avg_Hub_Distance_DCC, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Housing_Avg_Hub_Distance_DCC = new ol.source.Vector();
jsonSource_Public_Housing_Avg_Hub_Distance_DCC.addFeatures(features_Public_Housing_Avg_Hub_Distance_DCC);var lyr_Public_Housing_Avg_Hub_Distance_DCC = new ol.layer.Vector({
                source:jsonSource_Public_Housing_Avg_Hub_Distance_DCC, 
                style: style_Public_Housing_Avg_Hub_Distance_DCC,
                title: "Public_Housing_Avg_Hub_Distance_DCC"
            });var format_DayCareCentresDCCSocial = new ol.format.GeoJSON();
var features_DayCareCentresDCCSocial = format_DayCareCentresDCCSocial.readFeatures(geojson_DayCareCentresDCCSocial, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DayCareCentresDCCSocial = new ol.source.Vector();
jsonSource_DayCareCentresDCCSocial.addFeatures(features_DayCareCentresDCCSocial);var lyr_DayCareCentresDCCSocial = new ol.layer.Vector({
                source:jsonSource_DayCareCentresDCCSocial, 
                style: style_DayCareCentresDCCSocial,
                title: "Day Care Centres DCC (Social) "
            });var format_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone = new ol.format.GeoJSON();
var features_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone = format_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone.readFeatures(geojson_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone = new ol.source.Vector();
jsonSource_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone.addFeatures(features_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone);var lyr_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone = new ol.layer.Vector({
                source:jsonSource_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone, 
                style: style_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone,
                title: "Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone"
            });

lyr_Subzone_Layer.setVisible(true);lyr_PercentageofElderlybySubzones.setVisible(true);lyr_Public_Housing_Avg_Hub_Distance_SHC.setVisible(true);lyr_SeniorsHomeCareSHC.setVisible(true);lyr_Public_Housing_Avg_Hub_Distance_SAC.setVisible(true);lyr_SeniorActivityCentresSAC.setVisible(true);lyr_Public_Housing_Avg_Hub_Distance_DCC.setVisible(true);lyr_DayCareCentresDCCSocial.setVisible(true);lyr_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone.setVisible(true);
var layersList = [baseLayer,lyr_Subzone_Layer,lyr_PercentageofElderlybySubzones,lyr_Public_Housing_Avg_Hub_Distance_SHC,lyr_SeniorsHomeCareSHC,lyr_Public_Housing_Avg_Hub_Distance_SAC,lyr_SeniorActivityCentresSAC,lyr_Public_Housing_Avg_Hub_Distance_DCC,lyr_DayCareCentresDCCSocial,lyr_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone];
lyr_Subzone_Layer.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Age65+': 'Age65+', 'percentage': 'percentage', });
lyr_PercentageofElderlybySubzones.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Age65+': 'Age65+', 'percentage': 'percentage', });
lyr_Public_Housing_Avg_Hub_Distance_SHC.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'Hub_Distan': 'Hub_Distan', 'Hub_Dist_1': 'Hub_Dist_1', 'Hub_Dist_2': 'Hub_Dist_2', 'COUNT': 'COUNT', });
lyr_SeniorsHomeCareSHC.set('fieldAliases', {'CENTRE NAM': 'CENTRE NAM', 'CATEGORY': 'CATEGORY', 'DISTRICT': 'DISTRICT', 'ADDRESS': 'ADDRESS', 'POSTAL': 'POSTAL', 'X-COORDINA': 'X-COORDINA', 'Y-COORDINA': 'Y-COORDINA', });
lyr_Public_Housing_Avg_Hub_Distance_SAC.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'Hub_Distan': 'Hub_Distan', 'Hub_Dist_1': 'Hub_Dist_1', 'Hub_Dist_2': 'Hub_Dist_2', 'COUNT': 'COUNT', });
lyr_SeniorActivityCentresSAC.set('fieldAliases', {'CENTRE NAM': 'CENTRE NAM', 'CATEGORY': 'CATEGORY', 'DISTRICT': 'DISTRICT', 'ADDRESS': 'ADDRESS', 'POSTAL': 'POSTAL', 'X-COORDINA': 'X-COORDINA', 'Y-COORDINA': 'Y-COORDINA', });
lyr_Public_Housing_Avg_Hub_Distance_DCC.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'Hub_Distan': 'Hub_Distan', 'Hub_Dist_1': 'Hub_Dist_1', 'Hub_Dist_2': 'Hub_Dist_2', 'COUNT': 'COUNT', });
lyr_DayCareCentresDCCSocial.set('fieldAliases', {'CENTRE NAM': 'CENTRE NAM', 'CATEGORY': 'CATEGORY', 'DISTRICT': 'DISTRICT', 'ADDRESS': 'ADDRESS', 'POSTAL': 'POSTAL', 'X-COORDINA': 'X-COORDINA', 'Y-COORDINA': 'Y-COORDINA', });
lyr_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone.set('fieldAliases', {'SUBZONE_N': 'SUBZONE_N', 'PLN_AREA_N': 'PLN_AREA_N', 'CENTRE NAM': 'CENTRE NAM', 'CATEGORY': 'CATEGORY', 'DISTRICT': 'DISTRICT', 'ADDRESS': 'ADDRESS', 'POSTAL': 'POSTAL', 'X-COORDINA': 'X-COORDINA', 'Y-COORDINA': 'Y-COORDINA', 'COUNT_Elde': 'COUNT_Elde', 'No. of Pub': 'No. of Pub', 'Ratio': 'Ratio', });
lyr_Subzone_Layer.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Age65+': 'TextEdit', 'percentage': 'TextEdit', });
lyr_PercentageofElderlybySubzones.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Age65+': 'TextEdit', 'percentage': 'TextEdit', });
lyr_Public_Housing_Avg_Hub_Distance_SHC.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'Hub_Distan': 'TextEdit', 'Hub_Dist_1': 'TextEdit', 'Hub_Dist_2': 'TextEdit', 'COUNT': 'TextEdit', });
lyr_SeniorsHomeCareSHC.set('fieldImages', {'CENTRE NAM': 'TextEdit', 'CATEGORY': 'TextEdit', 'DISTRICT': 'TextEdit', 'ADDRESS': 'TextEdit', 'POSTAL': 'TextEdit', 'X-COORDINA': 'TextEdit', 'Y-COORDINA': 'TextEdit', });
lyr_Public_Housing_Avg_Hub_Distance_SAC.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'Hub_Distan': 'TextEdit', 'Hub_Dist_1': 'TextEdit', 'Hub_Dist_2': 'TextEdit', 'COUNT': 'TextEdit', });
lyr_SeniorActivityCentresSAC.set('fieldImages', {'CENTRE NAM': 'TextEdit', 'CATEGORY': 'TextEdit', 'DISTRICT': 'TextEdit', 'ADDRESS': 'TextEdit', 'POSTAL': 'TextEdit', 'X-COORDINA': 'TextEdit', 'Y-COORDINA': 'TextEdit', });
lyr_Public_Housing_Avg_Hub_Distance_DCC.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'Hub_Distan': 'TextEdit', 'Hub_Dist_1': 'TextEdit', 'Hub_Dist_2': 'TextEdit', 'COUNT': 'TextEdit', });
lyr_DayCareCentresDCCSocial.set('fieldImages', {'CENTRE NAM': 'TextEdit', 'CATEGORY': 'TextEdit', 'DISTRICT': 'TextEdit', 'ADDRESS': 'TextEdit', 'POSTAL': 'TextEdit', 'X-COORDINA': 'TextEdit', 'Y-COORDINA': 'TextEdit', });
lyr_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone.set('fieldImages', {'SUBZONE_N': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'CENTRE NAM': 'TextEdit', 'CATEGORY': 'TextEdit', 'DISTRICT': 'TextEdit', 'ADDRESS': 'TextEdit', 'POSTAL': 'TextEdit', 'X-COORDINA': 'TextEdit', 'Y-COORDINA': 'TextEdit', 'COUNT_Elde': 'TextEdit', 'No. of Pub': 'TextEdit', 'Ratio': 'TextEdit', });
lyr_Subzone_Layer.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Age65+': 'no label', 'percentage': 'no label', });
lyr_PercentageofElderlybySubzones.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Age65+': 'no label', 'percentage': 'no label', });
lyr_Public_Housing_Avg_Hub_Distance_SHC.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'Hub_Distan': 'no label', 'Hub_Dist_1': 'no label', 'Hub_Dist_2': 'no label', 'COUNT': 'no label', });
lyr_SeniorsHomeCareSHC.set('fieldLabels', {'CENTRE NAM': 'no label', 'CATEGORY': 'no label', 'DISTRICT': 'no label', 'ADDRESS': 'no label', 'POSTAL': 'no label', 'X-COORDINA': 'no label', 'Y-COORDINA': 'no label', });
lyr_Public_Housing_Avg_Hub_Distance_SAC.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'Hub_Distan': 'no label', 'Hub_Dist_1': 'no label', 'Hub_Dist_2': 'no label', 'COUNT': 'no label', });
lyr_SeniorActivityCentresSAC.set('fieldLabels', {'CENTRE NAM': 'no label', 'CATEGORY': 'no label', 'DISTRICT': 'no label', 'ADDRESS': 'no label', 'POSTAL': 'no label', 'X-COORDINA': 'no label', 'Y-COORDINA': 'no label', });
lyr_Public_Housing_Avg_Hub_Distance_DCC.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'Hub_Distan': 'no label', 'Hub_Dist_1': 'no label', 'Hub_Dist_2': 'no label', 'COUNT': 'no label', });
lyr_DayCareCentresDCCSocial.set('fieldLabels', {'CENTRE NAM': 'no label', 'CATEGORY': 'no label', 'DISTRICT': 'no label', 'ADDRESS': 'no label', 'POSTAL': 'no label', 'X-COORDINA': 'no label', 'Y-COORDINA': 'no label', });
lyr_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone.set('fieldLabels', {'SUBZONE_N': 'no label', 'PLN_AREA_N': 'no label', 'CENTRE NAM': 'no label', 'CATEGORY': 'no label', 'DISTRICT': 'no label', 'ADDRESS': 'no label', 'POSTAL': 'no label', 'X-COORDINA': 'no label', 'Y-COORDINA': 'no label', 'COUNT_Elde': 'no label', 'No. of Pub': 'no label', 'Ratio': 'no label', });
lyr_Ratio_Elderly_Centres_To_Total_Elderly_Per_Subzone.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});