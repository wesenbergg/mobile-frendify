import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

//  style={{flexDirection: "row", backgroundColor: backgroundColor}}
const Index = ({ title, backgroundColor }) => {
  return (
    <View style={{paddingTop: 100, marginHorizontal: 25}}>
      <Text style={{fontSize: 20, color: 'black', paddingHorizontal: 16, paddingTop: 8}}>Sign up</Text>
      <Input placeholder='Username' />
      <Input placeholder='Password' />

      <Text style={{fontSize: 14, color: 'blue', paddingVertical: 20}}>Create an account</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('click')} >
        <Text style={{fontSize: 18}} >Log in</Text>
      </TouchableOpacity>
    </View>
  )
}




Index.defaultProps = {
  title: 'Login',
  backgroundColor: '#0000'
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
