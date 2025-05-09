import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation,useRoute,useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import textStyles from '../components/customText';
import containerStyles from '../components/customContainers';
import buttonStyles from '../components/customButtons';
import AltitudeIndicator from '../components/altitudeGraph';

export default function DataScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const route = useRoute();
  console.log(route.params.nameInputValue)

  const nameInputValue = route.params?.nameInputValue || 'Missão 1';
  const connectionSelectedValue = route.params?.connectionSelectedValue || 'uart';
  const rateInputValue = route.params?.rateInputValue || '115200';

  const [isRecording, setIsRecording] = useState(false);
  const handlePressRecordStop = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      console.log('Iniciando gravação...');
    } else {
      console.log('Parando gravação...');
    }
  };
  
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Salvar Dados', // Título do popup
          'Deseja salvar os dados antes de sair?', // Mensagem do popup
          [
            {
              text: 'Não Salvar', // Texto do botão "Cancelar"
              onPress: () => navigation.navigate('Home'), // Ao não salvar, navega para Home
              style: 'cancel', // Estilo do botão (cancel, destructive, default)
            },
            {
              text: 'Salvar', // Texto do botão "Salvar"
              onPress: () => {
                // TODO: Implementar lógica real de salvar dados aqui
                console.log('Dados salvos (simulado)');
                navigation.navigate('Home');
              },
            },
          ],
          { cancelable: true }
        );
        return true;
      };
      const backHandler = navigation.addListener('beforeRemove', (e) => {
         e.preventDefault();
         onBackPress();
      });
      return () => {
        backHandler();
      };
    }, [navigation])
  );

  return (
    <LinearGradient
      colors={['#384E77', '#18314f', '#04020F']} 
      start={{ x: 0.5, y: 0 }} 
      end={{ x: 0.5, y: 1 }} 
      style={containerStyles.gradientcontainer}
      >
        <View style={[containerStyles.innercontainer, {paddingTop: insets.top}]}>
          <View style={[containerStyles.rowcontainer, {paddingTop:'5%'}, {width:'90%'}, {height: '15%'},{gap: '10%'}, {backgroundColor: 'purple'}]}>
            <View style={[{backgroundColor: 'red'}, {alignSelf: 'flex-start'}, {height: '100%'}, {width: '70%'}]}>
              <Text style={[textStyles.maintitle, {width: '100%'}]} numberOfLines={2}>{nameInputValue}</Text>
            </View>
            <View style={[{backgroundColor: 'green'}, {alignSelf: 'flex-end'}, {height: '100%'}, {width: '20%'}]}>
              <Pressable 
                style={({ pressed }) => [styles.roundedButton, {opacity: pressed ? 0.7 : 1,},]} 
                android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false, foreground: true  }}
                onPress={handlePressRecordStop}
                >
                  {isRecording ? (
                    <><Ionicons name="stop-circle-outline" size={30} color="white" />
                    <Text style={[textStyles.buttonText, {fontSize:14}]}>Parar</Text></>
                  ) : (
                    <><MaterialCommunityIcons name="record-rec" size={38} color="white" />
                    <Text style={[textStyles.buttonText, {fontSize:14}]}>Gravar</Text></>
                  )}
              </Pressable>
            </View>
          </View>
          <View style={[containerStyles.rowcontainer, {height: '30%'}, {width:'90%'}, {backgroundColor: 'yellow'}]}>
            <View style={styles.altitudeGraphContainer}>
              <AltitudeIndicator currentAltitude={700} maxAltitude={3500} apogee={930}>
              </AltitudeIndicator>
            </View>
          </View>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  roundedButton:{
    backgroundColor: '#3875e8',
    alignItems: "center",
    justifyContent: 'center',
    aspectRatio: 1,
    height: '80%',
    overflow:'hidden',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  altitudeGraphContainer: {
    alignSelf: 'center',
    alignItems: 'left',
  },
  recordStopButton: {
    height: '80%',
    aspectRatio: 1,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});