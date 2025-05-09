import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ALTITUDE_INDICATOR_COLOR = 'red';
const APOGEE_INDICATOR_COLOR = 'magenta';

const INDICATOR_HEIGHT_PX = 10;
const SCALE_INTERVAL = 500;
const GRAPH_WIDTH_PERCENTAGE_OF_HEIGHT = 0.25;
const SCALE_WIDTH_PERCENTAGE_OF_HEIGHT = 0.20;

export default function AltitudeGraph({ currentAltitude, maxAltitude, apogee }) {
  const [containerHeight, setContainerHeight] = useState(0);

  const handleContainerLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setContainerHeight(height);
  };

  const altitudePercentage = maxAltitude > 0 ? currentAltitude / maxAltitude : 0;
  const apogeePercentage = maxAltitude > 0 ? apogee / maxAltitude : 0;

  const altitudeIndicatorPositionFromTop = containerHeight - (altitudePercentage * containerHeight);
  const apogeeIndicatorPositionFromTop = containerHeight - (apogeePercentage * containerHeight);

  const finalAltitudeIndicatorTop = altitudeIndicatorPositionFromTop - (INDICATOR_HEIGHT_PX / 2);
  const finalApogeeIndicatorTop = apogeeIndicatorPositionFromTop - (INDICATOR_HEIGHT_PX / 2);

  const scaleLabels = [];
  if (maxAltitude > 0) {
    for (let alt = 0; alt <= maxAltitude; alt += SCALE_INTERVAL) {
      scaleLabels.push(alt);
    }
  }

  const graphWidth = containerHeight * GRAPH_WIDTH_PERCENTAGE_OF_HEIGHT;
  const scaleWidth = containerHeight * SCALE_WIDTH_PERCENTAGE_OF_HEIGHT;
  const totalWidth = graphWidth + scaleWidth;

  return (
    <View
      style={[
        styles.mainContainer,
        {
          height: '100%',
          width: containerHeight > 0 ? totalWidth : '100%',
        },
      ]}
      onLayout={handleContainerLayout}
    >
      <View
        style={[
          styles.graphContainer,
          {
            width: containerHeight > 0 ? graphWidth : 'auto',
            height: '100%',
          },
        ]}
      >
        <View style={[styles.graphArea, { zIndex: 0 }]}></View>

        {containerHeight > 0 && (
          <View
            style={[
              styles.altitudeIndicator,
              {
                backgroundColor: ALTITUDE_INDICATOR_COLOR,
                top: finalAltitudeIndicatorTop,
                zIndex: 3,
              },
            ]}
          >
          </View>
        )}

        {containerHeight > 0 && (
           <View
            style={[
              styles.apogeeIndicator,
              {
                backgroundColor: APOGEE_INDICATOR_COLOR,
                top: finalApogeeIndicatorTop,
                zIndex: 3,
              },
            ]}
          >
        </View>
      )}
      </View>

      <View
        style={[
          styles.scaleContainer,
          {
            width: containerHeight > 0 ? scaleWidth : 'auto',
            height: '100%',
          },
        ]}
      >
           {containerHeight > 0 && scaleLabels.map((alt) => {
               const percentage = maxAltitude > 0 ? alt / maxAltitude : 0;
               const positionFromBottom = percentage * containerHeight;
               const positionFromTop = containerHeight - positionFromBottom;

               return (
                 <Text
                   key={alt}
                   style={[
                     styles.scaleLabel,
                     {
                       top: positionFromTop - (styles.scaleLabel.fontSize / 2),
                     }
                   ]}
                 >
                   {alt}
                 </Text>
               );
             })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'stretch',
  },
  graphContainer: {
    backgroundColor: '#eeeeee',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  graphArea: {
    flex: 1,
  },
  altitudeIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: INDICATOR_HEIGHT_PX,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
   apogeeIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: INDICATOR_HEIGHT_PX,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  indicatorText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  scaleContainer: {
      justifyContent: 'flex-end',
      paddingVertical: 5,
      position: 'relative',
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
  },
  scaleLabel: {
      position: 'absolute',
      //right: 5,
      fontSize: 12,
      color: '#333',
      zIndex: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      paddingHorizontal: 3,
      borderRadius: 3,
      textAlign: 'left'
  }
});
