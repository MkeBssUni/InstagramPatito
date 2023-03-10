import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
//Importar los stacks
import ProfileStack from '../stack/ProfileStack'
import Home from '../../modules/profile/adapters/screens/Home'
import Buscar from '../../modules/profile/adapters/screens/Buscar'

const Tab = createBottomTabNavigator();

export default function Navigation (){
    return(
        <NavigationContainer>
        <Tab.Navigator
            initialRouteName='profile'
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => screenOptions(route, color),
              tabBarActiveTintColor: "purple",
              tabBarInactiveTintColor: "gray",
              headerShown: false
            })}
        >
            <Tab.Screen
                name="home"
                options={{title: 'Inicio',
                headerShown: true,
                headerStyle: {backgroundColor: 'purple'},
            }}
                component={Home}
            />
            
            <Tab.Screen
                name="search"
                options={{title: 'Buscar',
                headerShown: true,
                headerStyle: {backgroundColor: 'purple'},
            }}
                component={Buscar}
            />
            <Tab.Screen
                name="profile"
                options={{title: 'Perfil'}}
                component={ProfileStack}
            />

        </Tab.Navigator>
    </NavigationContainer>
    )
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "profile":
        iconName = "account";
        break;
      case "home":
        iconName = "home";
        break;
      case "search":
        iconName = "magnify";
        break;
    }
  
    return (
      <Icon
      type='material-community'
      name={iconName}
      size={22}
      color={color}
      />)
  };
  