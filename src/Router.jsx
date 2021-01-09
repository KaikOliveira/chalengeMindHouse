import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Fontisto } from '@expo/vector-icons';

import ButtonBasket from './components/ButtonBasket/fdsa';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
      }}
    >
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c58080',
      }}
    >
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Search: {
    lib: AntDesign,
    name: 'search1',
  },
  Requests: {
    lib: AntDesign,
    name: 'bars',
  },
  Profile: {
    lib: Fontisto,
    name: 'persons',
  },
};

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            if (route.name === 'Basket') {
              return (
                <ButtonBasket
                  onPress={() => navigation.navigate('Basket')}
                  focused={focused}
                />
              );
            }
            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#fff',
            borderTopColor: 'rgba(255,255,255,0.2)',
          },
          activeTintColor: '#5ABF2E',
          inactiveTintColor: '#92929c',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SettingsScreen}
          options={{
            title: 'Pesquisa',
          }}
        />
        <Tab.Screen
          name="Basket"
          component={HomeScreen}
          options={{
            title: '',
          }}
        />

        <Tab.Screen
          name="Requests"
          component={SettingsScreen}
          options={{
            title: 'Pedidos',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            title: 'Perfil',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
