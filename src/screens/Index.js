import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Index = ({ title, backgroundColor }) => {
  return (
    <View style={{flexDirection: "row", backgroundColor: backgroundColor}}>
      <Text style={{fontSize: 20, color: 'black', paddingHorizontal: 16, paddingTop: 8}}>This is landing page</Text>
    </View>
  )
}

Index.defaultProps = {
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

export default Index
