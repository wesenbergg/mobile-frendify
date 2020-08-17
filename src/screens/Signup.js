import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ButtonGroup } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker'

const Signup = ({ navigation }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [gender, setGender] = useState(0) //0 male, 1 female, 2 other
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  const showDatepicker = () => {
    showMode('date');
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 25, justifyContent: 'space-between', backgroundColor: 'white' }}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', paddingHorizontal: 16, paddingTop: 8}}>Create Account</Text>

        <Input placeholder='Name' leftIcon={{ type: 'font-awesome', name: 'user', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />
        <Input placeholder='Unique username' leftIcon={{ type: 'font-awesome', name: 'user', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />
        <Input placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'lock', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />
        <Input placeholder='Confirm password' leftIcon={{ type: 'font-awesome', name: 'lock', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />

        <View>
          <Text style={{fontSize: 18 }} >Date of birth</Text>
          <TouchableOpacity style={styles.date} onPress={showDatepicker} >
            <Text style={{fontSize: 18}} >{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{fontSize: 18 }}>Gender</Text>
          <ButtonGroup
            buttonStyle={{margin: 0}}
            onPress={(i) => setGender(i)}
            selectedIndex={gender}
            buttons={['Male', 'Female', 'Other']}
            containerStyle={{height: 50}}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 14, color: 'blue', paddingVertical: 20}}>Allready have an account? Click here!</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
          <Text style={{fontSize: 18}} >Sign up</Text>
        </TouchableOpacity>
        
      {
        show && <DateTimePicker
          style={{display: 'none'}}
          testID="dateTimePicker"
          value={new Date(1598051730000)}
          display="default"
          onChange={onChange}
        />
      }
    </SafeAreaView>
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
  date: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#eee'
  }
});

Signup.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default Signup
