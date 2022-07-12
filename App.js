import React from 'react';

import { 
  View,
  Text
} from 'react-native';

export default function App() {
 
  return (

    <View style={{
      backgroundColor: '#fff',
      flex: 1,      
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        flex: 1,
      }}>
        <Text>Head</Text>
      </View>
      <View style={{
        backgroundColor: 'gold',
        flex: 1,
      }} />
      <View style={{
        backgroundColor: 'tomato',
        flex: 1,
      }} />
    </View>
      

  );
}

