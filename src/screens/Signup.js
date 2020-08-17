import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ButtonGroup } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker'

const Signup = () => {
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
    <SafeAreaView>
      <View style={{ paddingTop: 20, marginHorizontal: 25}}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', paddingHorizontal: 16, paddingTop: 8}}>Create Account</Text>

        <Input placeholder='Display name' leftIcon={{ type: 'font-awesome', name: 'user', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />
        <Input placeholder='Username' leftIcon={{ type: 'font-awesome', name: 'user', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />
        <Input placeholder='Password' leftIcon={{ type: 'font-awesome', name: 'lock', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />
        <Input placeholder='Confirm password' leftIcon={{ type: 'font-awesome', name: 'lock', color: "#666" }} leftIconContainerStyle={{paddingRight: 15}} />

        <TouchableOpacity style={styles.date} onPress={showDatepicker} >
          <Text style={{fontSize: 18}} >{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</Text>
        </TouchableOpacity>

        <ButtonGroup
          buttonStyle={{margin: 0}}
          onPress={() => console.log('')}
          selectedIndex={0}
          buttons={['Male', 'Female', 'Other']}
          containerStyle={{height: 50}}
        />

        <Text style={{fontSize: 14, color: 'blue', paddingVertical: 20}}>Allready have an account? Click here!</Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log('click')} >
          <Text style={{fontSize: 18}} >Sign up</Text>
        </TouchableOpacity>
        
      </View>

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

export default Signup
