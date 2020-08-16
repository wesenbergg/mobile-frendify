import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const Index = () => {
  return (
    <View style={{paddingTop: 100, marginHorizontal: 25}}>
      <Text style={{fontSize: 28, color: 'black', paddingHorizontal: 16, paddingTop: 8}}>Log in</Text>
      <Input placeholder='Username' leftIcon={{ type: 'font-awesome', name: 'user', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />
      <Input placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'lock', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />

      <Text style={{fontSize: 14, color: 'blue', paddingVertical: 20}}>Create an account</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('click')} >
        <Text style={{fontSize: 18}} >Log in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

export default Index
