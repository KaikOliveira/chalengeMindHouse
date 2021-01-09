import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Fontisto } from '@expo/vector-icons';

import PageMaintenance from './components/PageMaintenance/index';

import ButtonBasket from './components/ButtonBasket';

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
          component={PageMaintenance}
          options={{
            title: 'Pesquisa',
          }}
        />
        <Tab.Screen
          name="Basket"
          component={PageMaintenance}
          options={{
            title: '',
          }}
        />

        <Tab.Screen
          name="Requests"
          component={PageMaintenance}
          options={{
            title: 'Pedidos',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={PageMaintenance}
          options={{
            title: 'Perfil',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
