import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import containerStyles from '../components/customContainers';
import textStyles from '../components/customText';
import buttonStyles from '../components/customButtons';

export default function NewFlight() {
  const insets = useSafeAreaInsets();
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
              android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false, foreground: true  }}>
                <Text style={textStyles.buttonText}>Iniciar</Text>
            </Pressable>
            <Pressable 
              style={({ pressed }) => [buttonStyles.roundedButton, {opacity: pressed ? 0.7 : 1,},]} 
              android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false, foreground: true  }}>
                <Text style={textStyles.buttonText}>Cancelar</Text>
            </Pressable>
          </View>
          <View style={[containerStyles.rowcontainer, {height:'10%'}]}>
            <Text style={[textStyles.defaultText]}>Nome da Missão: </Text>
          </View>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
});