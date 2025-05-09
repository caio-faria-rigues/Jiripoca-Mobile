import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, ScrollView, TextInput, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import containerStyles from '../components/customContainers';
import textStyles from '../components/customText';
import buttonStyles from '../components/customButtons';

export default function NewFlight() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [nameInputValue, setNameInputValue] = useState('');
  const [rateInputValue, setRateInputValue] = useState('');
  const [connectionSelectedValue, setConectionSelectedValue] = useState("uart");

  const handleGoBack = () => {
    Keyboard.dismiss()
    navigation.navigate('Home');
  }
  const handleGoData = () => {
    Keyboard.dismiss()
    navigation.navigate('MainTabs', {
      screen: 'Data',
      params: {
        nameInputValue: nameInputValue,
        rateInputValue: rateInputValue,
        connectionSelectedValue: connectionSelectedValue,
      },
    });
  }

  return (
    <LinearGradient
      colors={['#384E77', '#18314f', '#04020F']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={containerStyles.gradientcontainer}
      >
        <View style={[containerStyles.innercontainer, {paddingTop: insets.top}]}>
          <Text style={[textStyles.maintitle, {paddingTop:'5%'}]}>Configurar Nova Missão </Text>
          <View style={[containerStyles.rowcontainer, {height:'10%'}]}>
            <Pressable 
              style={({ pressed }) => [buttonStyles.roundedButton, {opacity: pressed ? 0.7 : 1,},]} 
              android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false, foreground: true  }}
              onPress={handleGoData}>
                <Text style={textStyles.buttonText}>Iniciar</Text>
            </Pressable>
            <Pressable 
              style={({ pressed }) => [buttonStyles.roundedButton, {opacity: pressed ? 0.7 : 1,},]} 
              android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false, foreground: true  }}
              onPress={handleGoBack}>
                <Text style={textStyles.buttonText}>Cancelar</Text>
            </Pressable>
          </View>
          <ScrollView style={containerStyles.scrollViewContainer} contentContainerStyle={containerStyles.scrollViewContent}>
            <Text style={[textStyles.defaultText]}>Nome da missão: </Text>
            <TextInput style={[containerStyles.customInput]} onChangeText={setNameInputValue}
              value={nameInputValue}
              placeholder="Digite o nome aqui..."
              placeholderTextColor="#aaaaaa">
            </TextInput>
            <Text style={[textStyles.defaultText]}>Tipo de conexão: </Text>
            <View style={containerStyles.pickerContainer}>
              <Picker
                style={styles.customPicker}
                itemStyle={styles.pickerItem}
                selectedValue={connectionSelectedValue}
                onValueChange={(itemValue, itemIndex) => setConectionSelectedValue(itemValue)
                }>
                <Picker.Item label="UART/USB" value="uart" />
                <Picker.Item label="Bluetooth" value="bluetooth" />
              </Picker>
            </View>
            <Text style={[textStyles.defaultText]}>Baud Rate: </Text>
            <TextInput style={[containerStyles.customInput]} onChangeText={setRateInputValue}
              value={rateInputValue}
              placeholder="Apenas números..."
              placeholderTextColor="#aaaaaa">
            </TextInput>
          </ScrollView>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  customPicker: {
    height: 50,
    width: '100%',
  },
  pickerItem: {
  },
});