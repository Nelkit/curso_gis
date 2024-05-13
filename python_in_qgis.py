for layer in QgsProject. instance ().mapLayers().values ():
    print(layer.name ())


SF = iface.addVectorLayer('/Users/nelkitchavezcalona/Desktop/shp/mi_capa.shp','Honduras','ogr')
QgsProject.instance().addMapLayer(SF)
if SF.isValid():
    QgsProject.instance().addMapLayer(SF)

renderer = SF.renderer()
renderer
symbol = renderer.symbol()
symbol.setColor(QColor('pink'))