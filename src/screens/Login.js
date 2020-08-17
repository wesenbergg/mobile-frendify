import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingTop: 100, marginHorizontal: 25, flex: 1}}>
        <Text style={{fontSize: 28, color: 'black', paddingHorizontal: 16, paddingTop: 8}}>Log in</Text>
        <Input placeholder='Username' leftIcon={{ type: 'font-awesome', name: 'user', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />
        <Input placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'lock', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />

        <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
          <Text style={{fontSize: 14, color: 'blue', paddingVertical: 20}}>Create an account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('mainFlow')} >
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}} >Log in</Text>
        </TouchableOpacity>

        <View style={{flexDirection: "row", justifyContent: 'center'}}>
          <TouchableOpacity style={styles.lang} onPress={() => console.log('fi-FI')} >
            <Text style={styles.muted} >Suomi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lang} onPress={() => console.log('en-EN')} >
            <Text style={styles.muted} >English</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={{ alignSelf: 'flex-end', height: 64, width: 64, margin: 15}}
        source={require('../../assets/icon256.png')}
      />
    </ SafeAreaView>
  )
}


Login.navigationOptions = () => {
  return {
    headerShown: false
  }
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
    backgroundColor: "pink",
    borderRadius: 10,
    padding: 10
  },
  lang: {
    padding: 20
  },
  muted: {
    color: 'grey',
    fontSize: 18
  }
});

export default Login
