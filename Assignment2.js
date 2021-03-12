// Define icon class
var LeafIcon = L.Icon.extend({
    options: {
    iconSize:     [25, 41], // size of the icon
    iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor:  [1, -34] // point from which the popup should open relative to the iconAnchor */
    }
});

// Create icons of different colours, one for each layer
var blueIcon = new LeafIcon({iconUrl: 'media/blue-icon.png'}),
    brownIcon = new LeafIcon({iconUrl: 'media/brown-icon.png'}),
	greenIcon = new LeafIcon({iconUrl: 'media/green-icon.png'}),
	oliveIcon = new LeafIcon({iconUrl: 'media/olive-icon.png'}),
	purpleIcon = new LeafIcon({iconUrl: 'media/purple-icon.png'}),
	whiteIcon = new LeafIcon({iconUrl: 'media/white-icon.png'}),
	yellowIcon = new LeafIcon({iconUrl: 'media/yellow-icon.png'});
	
// Checks the medium to decide whether or not to include the feature in a particular layer

function includeFeature(medium,lyrmedium) {
   var lowcasemedium = medium.toLowerCase();
   return (lowcasemedium == lyrmedium ) ? true : false;
}

// Checks that the medium doesn't belong to any of the other layers
function otherMedium(medium) {
   var lowcasemedium = medium.toLowerCase();
   if ((lowcasemedium != "bronze") && (lowcasemedium != "aluminum") && (lowcasemedium != "masonry") &&
      (lowcasemedium != "granite") && (lowcasemedium != "stainless steel") && (lowcasemedium != "wood")) {
	  return true; }
   else { return false;}
}

function loadlayers(data){
	
//Load the GeoJSON layers filtering by a specific medium

BronzeLyr = L.geoJson(data, {
		filter: function (feature, layer) {
			if (feature.properties.Medium) {
				// If the property "Medium" exists and is Bronze, return True
				return includeFeature(feature.properties.Medium, "bronze")
			}
		},
        pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: blueIcon});
        },		
		onEachFeature: onEachFeature
}
).addTo(mymap);

AluminumLyr = L.geoJson(data, {
		filter: function (feature, layer) {
			if (feature.properties.Medium) {
				// If the property "Medium" exists and is aluminum, return True
				return includeFeature(feature.properties.Medium, "aluminum")
			}
		},
        pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: whiteIcon});
        },		
		onEachFeature: onEachFeature
}
).addTo(mymap);

MasonryLyr = L.geoJson(data, {
		filter: function (feature, layer) {
			if (feature.properties.Medium) {
				// If the property "Medium" exists and starts with masonry, return True
				return includeFeature(feature.properties.Medium, "masonry")
			}
		},
        pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: brownIcon});
    },		
		onEachFeature: onEachFeature
}
).addTo(mymap);

GraniteLyr = L.geoJson(data, {
		filter: function (feature, layer) {
			if (feature.properties.Medium) {
				// If the property "Medium" exists and starts with granite, return True
				return includeFeature(feature.properties.Medium, "granite");
			}
		},
        pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: yellowIcon});
    },		
		onEachFeature: onEachFeature
}
).addTo(mymap);

StainlessSteelLyr = L.geoJson(data, {
		filter: function (feature, layer) {
			if (feature.properties.Medium) {
				// If the property "Medium" exists and starts with "stainless steele", return True
				return includeFeature(feature.properties.Medium, "stainless steel");
			}
		},
        pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: purpleIcon});
        },		
		onEachFeature: onEachFeature
}
).addTo(mymap);

WoodLyr = L.geoJson(data, {
		filter: function (feature, layer) {
			if (feature.properties.Medium) {
				// If the property "Medium" exists and starts with wood, return True
				return includeFeature(feature.properties.Medium, "wood");
			}
		},
        pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: greenIcon});
        },
		onEachFeature: onEachFeature
}
).addTo(mymap);

OtherLyr = L.geoJson(data, {
		filter: function (feature, layer) {
			if (feature.properties.Medium) {
				// If the property "Medium" exists and starts with wood, return True
				return otherMedium(feature.properties.Medium);
			}
		},
        pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: oliveIcon});
        },		
		onEachFeature: onEachFeature
}
).addTo(mymap);
}