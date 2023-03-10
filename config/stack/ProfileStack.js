import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../modules/auth/adapters/screens/Login'
import Profile from '../../modules/profile/adapters/screens/Profile'
import UserLogged from '../../modules/profile/adapters/screens/UserLogged'
const Stack = createNativeStackNavigator();

export default function ProfileStack(){
    return (
        <Stack.Navigator
            initialRouteName='profileStack'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: {backgroundColor: 'purple'}
            }}
        >
            <Stack.Screen
                name = 'profileStack'
                options={{title: 'Perfil'}}
                component={Profile}
            />

            <Stack.Screen
                name="userLogged"
                options={{title: 'Perfil'}}
                component={UserLogged}
            />
    
            <Stack.Screen
                name = 'login'
                options={{title: 'Inicio de Sesión'}}
                component={Login}
            />
            
        </Stack.Navigator>    
      )
}