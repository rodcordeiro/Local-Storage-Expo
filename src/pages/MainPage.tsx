import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as SecureStore from 'expo-secure-store';

export default function MainPage() {
    try {
        async () =>{
            await SecureStore.deleteItemAsync("encKey")
        }
    } catch (error) {
        
    }
  return (
    <View style={styles.container}>
      <Text>Conectado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
