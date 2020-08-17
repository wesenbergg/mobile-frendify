import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Profile = ({ title, backgroundColor }) => {
  return (
    <View style={{flexDirection: "row", backgroundColor: backgroundColor}}>
      <Text style={{fontSize: 20, color: 'black', paddingHorizontal: 16, paddingTop: 8}}>Profile</Text>
    </View>
  )
}

Profile.defaultProps = {
  title: 'Index',
  backgroundColor: '#0000'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile
