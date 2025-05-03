// components/AltitudeIndicator.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AltitudeIndicator = ({ 
    altitude,
    apogee, 
    minAltitude = 0, 
    maxAltitude = 1000, 
    height = 200, 
    width = 60, 
    altitudeIndicatorColor = 'red',
    apogeeIndicatorColor = 'yellow', 
    containerColor = '#eee',
    borderColor = '#ccc' }) => {

  const clampedAltitude = Math.max(minAltitude, Math.min(maxAltitude, altitude));
  const clampedApogee = Math.max(minAltitude, Math.min(maxAltitude, apogee));
  const altitudeRange = maxAltitude - minAltitude;
  const altitudePercentage = (clampedAltitude - minAltitude) / altitudeRange;

  const apogeePercentage = (clampedApogee - minAltitude) / altitudeRange;

  const altitudeIndicatorPositionFromTop = height - (altitudePercentage * height);
  const apogeeIndicatorPositionFromTop = height - (apogeePercentage * height);
  console.log(apogeeIndicatorPositionFromTop)

  return (
    <View style={[styles.container, { height: height, width: width, backgroundColor: containerColor, borderColor: borderColor }]}>
      <View
        style={[
          styles.altitudeIndicator,
          {
            backgroundColor: altitudeIndicatorColor,
            top: altitudeIndicatorPositionFromTop - (styles.altitudeIndicator.height / 2),
          },
        ]}
      />
      <View
        style={[
          styles.altitudeIndicator,
          {
            backgroundColor: apogeeIndicatorColor,
            top: apogeeIndicatorPositionFromTop - (styles.altitudeIndicator.height / 2),
          },
        ]}>
      </View>

      {/* Opcional: Adicionar marcadores de escala se necessário */}
      {/* <Text style={[styles.scaleMarker, { top: height - 10 }]}>{minAltitude}</Text> */}
      {/* <Text style={[styles.scaleMarker, { top: 0 }]}>{maxAltitude}</Text> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    position: 'relative',
    overflow: 'hidden',
  },
  altitudeIndicator: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 5,
  },
  apogeeIndicator: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 5,
  },
  // scaleMarker: { // Estilo para marcadores de escala (opcional)
  //   position: 'absolute',
  //   right: 5,
  //   fontSize: 10,
  //   color: '#555',
  // },
});

export default AltitudeIndicator;