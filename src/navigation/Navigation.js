import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
=======
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
>>>>>>> 501185bc355d74f1f130e2f0f2b03d969ef10d54
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import NewFlight from '../screens/NewFlight';
import DataScreen from '../screens/Data'; // Tela de Dados (aba)
import MapScreen from '../screens/Map';   // Tela do Mapa (aba)
import SettingsScreen from '../screens/Settings'; // Tela de Configurações (aba)

const RootStack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

<<<<<<< HEAD
const { height: screenHeight } = Dimensions.get('window');
const TAB_BAR_BASE_HEIGHT_PERCENTAGE = 7;

function BottomTabNavigator() {
  const insets = useSafeAreaInsets();

  const tabBarBaseHeight = screenHeight * (TAB_BAR_BASE_HEIGHT_PERCENTAGE / 100);

  const totalTabBarHeight = tabBarBaseHeight + insets.bottom;
=======
function BottomTabNavigator() {
>>>>>>> 501185bc355d74f1f130e2f0f2b03d969ef10d54
  return (
    <BottomTab.Navigator
      screenOptions={{
        // Oculta o cabeçalho padrão nas telas DENTRO das abas
        headerShown: false,
        tabBarActiveTintColor: '#3875e8', // Cor do ícone/texto da aba ativa
        tabBarInactiveTintColor: '#888', // Cor do ícone/texto da aba inativa
        tabBarStyle: { // Estilo da barra inferior
          backgroundColor: '#ffffff', // Cor de fundo da barra
<<<<<<< HEAD
          paddingBottom: insets.bottom, // Padding na parte inferior
          paddingTop: 5, // Padding na parte superior
          height: totalTabBarHeight, // Altura da barra
=======
          paddingBottom: 5, // Padding na parte inferior
          paddingTop: 5, // Padding na parte superior
          height: 60, // Altura da barra
>>>>>>> 501185bc355d74f1f130e2f0f2b03d969ef10d54
        },
      }}
    >
      {/* Defina as telas que aparecerão como abas */}
      <BottomTab.Screen
        name="Data" // Nome da rota/aba para a tela de Dados
        component={DataScreen}
        options={{
          title: 'Dados', // Título exibido na aba
          tabBarIcon: ({ color, size }) => ( // Exemplo de ícone
            <Ionicons name="bar-chart-sharp" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Map" // Nome da rota/aba para a tela do Mapa
        component={MapScreen}
        options={{
          title: 'Mapa', // Título exibido na aba
          tabBarIcon: ({ color, size }) => ( // Exemplo de ícone
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings" // Nome da rota/aba para a tela de Configurações
        component={SettingsScreen}
        options={{
          title: 'Configurações', // Título exibido na aba
          tabBarIcon: ({ color, size }) => ( // Exemplo de ícone
            <Ionicons name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Este componente configura a navegação principal (Stack Navigator)
function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator 
        screenOptions={{ 
          headerShown: false,
          contentStyle: { backgroundColor: '#04020F' },
          cardStyle: { backgroundColor: '#04020F' },
          presentation:  "transparentModal",
          animation: 'simple_push',
        }}
      >
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Início'}}
        />
        <RootStack.Screen
          name="NewFlight"
          component={NewFlight}
          options={{ title: 'Novo Item'}}
        />
        <RootStack.Screen
          name="MainTabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  navigationContainerStyle: {
    backgroundColor: '#04020F',
    card: '#04020F',
  },
});

export default AppNavigator;
