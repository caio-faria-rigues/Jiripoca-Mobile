import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Platform  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import textStyles from '../components/customText';
import containerStyles from '../components/customContainers';
import buttonStyles from '../components/customButtons';

export default function Home() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handlePress = () => {
    alert('Botão customizado pressionado!');
  }
  const handleGoToNew = () => {
    navigation.navigate('NewFlight');
  }
  return (
    <LinearGradient
      colors={['#384E77', '#18314f', '#04020F']} 
      start={{ x: 0.5, y: 0 }} 
      end={{ x: 0.5, y: 1 }} 
      style={containerStyles.gradientcontainer}
      >
        <View style={[containerStyles.innercontainer, {paddingTop: insets.top}]}>
          <Text style={textStyles.maintitle}>Seja {"\n"}bem-vindo!</Text>
          <View style={containerStyles.rowcontainer}>
            <Pressable 
              style={({ pressed }) => [buttonStyles.roundedButton, {opacity: pressed ? 0.7 : 1,},]} 
              android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false, foreground: true  }}
              onPress={handleGoToNew}>
              <Text style={textStyles.buttonText}>Nova Missão</Text>
            </Pressable>
            <Pressable 
              style={({ pressed }) => [buttonStyles.roundedButton, {opacity: pressed ? 0.7 : 1,},]}
              android_ripple={{ color: 'rgba(255, 255, 255, 0.2)', borderless: false, foreground: true  }} 
              onPress={handlePress}>
              <Text style={textStyles.buttonText}>Abrir Missão</Text>
            </Pressable>
          </View>
          <Text> Home </Text>
          <StatusBar style="auto" />
          <Button title="Clique aqui" onPress={() => alert('Botão pressionado!')} />
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  roundedButton:{
    backgroundColor: '#3875e8',
    alignItens: "center",
    justifyContent: 'center',
    width:'40%',
    height: '100%',
    overflow:'hidden',
    borderRadius:10,
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
});