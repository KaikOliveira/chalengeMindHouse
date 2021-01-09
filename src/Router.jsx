import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Ionicons } from '@expo/vector-icons' ;

import PayButton from './pages/fdsa';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#908080' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#c58080' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const icons ={
  Home: {
      lib: AntDesign,
      name: 'home',
  },
  Wallet: {
      lib: AntDesign,
      name: 'creditcard',
  },

  Notifications: {
      lib: Ionicons,
      name: 'ios-notifications-outline',
  },
  Settings: {
      lib: AntDesign,
      name: 'setting',
  }
};

export default function Router() {
  return (
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions= {( { route, navigation } ) => ({
            tabBarIcon: ({ color, size, focused }) => {
                if (route.name === "Pay"){
                    return (
                        <PayButton
                            onPress={() => navigation.navigate("Pay")}
                            focused={focused}
                            />
                    );


                }
                const { lib: Icon, name } = icons[route.name];
                return  <Icon name={name} size={size} color={color} /> ;

            },
        })}
        tabBarOptions={{
            style: {
                backgroundColor: '#131418',
                borderTopColor: 'rgba(255,255,255,0.2)',
            },
            activeTintColor:'#fff',
            inactiveTintColor:'#92929c'
        }}
    >
        <Tab.Screen name="Home"
         component={HomeScreen}
         options={{
             title:'Inicio',
         }}
         />
        <Tab.Screen name="Wallet"
         component={SettingsScreen}
         options={{
            title:'Carteira',
        }}
         />
        <Tab.Screen name="Pay"
         component={HomeScreen}
         options={{
             title:'',
         }}

        />



        <Tab.Screen name="Notifications"
         component={SettingsScreen}
         options={{
            title:'Notificações',
        }}
        />
        <Tab.Screen name="Settings"
         component={HomeScreen}
         options={{
            title:'Ajustes',
        }}
        />
    </Tab.Navigator>
    </NavigationContainer>
);
}
