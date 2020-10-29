import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import * as SecureStore from 'expo-secure-store';

export default function Loader() {
  const [ key, setKey ] = useState<string>('')

  async function handleSaveKey(){
    console.log("pressed")
    try {
      const response = await SecureStore.setItemAsync("encKey",
      JSON.stringify(key))
          .then(response =>{
            console.log(response)
            setKey('')
            return response            
          })
          .catch(error=>{
            console.log(error)
          })
      console.log(response)
    } catch (error) {
      console.log(error)      
    }

  }

  return (
    <View style={styles.container}>
      <Text>Você não está cadastrado ainda, favor insira a senha abaixo para acessar</Text>
      <TextInput 
        style={{
          backgroundColor: "#fefefe",
          borderColor:"#181818",
          borderWidth:2,
          padding:5
        }}
        value={key}
        onChangeText={setKey}
      />
      <RectButton
        style={{
          padding:20,
          backgroundColor:"#09f"
        }}
        onPress={handleSaveKey}
      >
        <Text>Save</Text>
      </RectButton>
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
