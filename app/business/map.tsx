import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
 const { business } = route.params;

 // Assuming business has latitude and longitude properties
 const { latitude, longitude } = business;

 return (
   <View className={`flex-1`}>
     <MapView
       className={`flex-1`}
       initialRegion={{
         latitude,
         longitude,
         latitudeDelta: 0.05,
         longitudeDelta: 0.05,
       }}
     >
       {/* Marker for the business location */}
       <Marker
         coordinate={{ latitude, longitude }}
         title={business.name}
         description={business.address}
       />
     </MapView>
   </View>
 );
};

export default MapScreen;
