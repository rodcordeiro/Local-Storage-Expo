import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const { Navigator, Screen } = createStackNavigator();

import Loader from './pages/Loader';
import MainPage from './pages/MainPage';

export default  function Routes(){

    const encKey = async () => {
        try {
          const valid = await SecureStore.isAvailableAsync()
          return await SecureStore.getItemAsync("encKey")
          .then(response =>{
            console.log(response);
            return true
          })     
        } catch (error) {
          console.log(error.message)
          return false
        }
    
      }  
    
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor:"#f2f3f5",
                }
            }}>
                {
                encKey() ? <Screen name="MainPage" component={MainPage}/> : <Screen name="Loader" component={Loader}/> 
                }
                
            </Navigator>
            <StatusBar hidden={true} />
        </NavigationContainer>
    )
}