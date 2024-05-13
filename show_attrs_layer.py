from osgeo import ogr

# Abre el archivo Shapefile
shapefile = './shp/mi_capa.shp'
driver = ogr.GetDriverByName('ESRI Shapefile')
dataSource = driver.Open(shapefile, 0)

# Obtén la capa (layer) del Shapefile
layer = dataSource.GetLayer()

# Itera sobre las features (entidades) en la capa
for feature in layer:
    # Accede a los atributos y geometría de cada feature
    geometry = feature.GetGeometryRef()
    attributes = feature.items()
    print(attributes)
    print("================================================================")
    #print(attributes, geometry)

