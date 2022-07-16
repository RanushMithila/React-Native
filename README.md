# React-Native

This is my First React Native App


## Language
![react logo](https://skills.thijs.gg/icons?i=react)

## Examples

```

//console.log("App executed");
  //const handlePress = () => console.log("Text Press Outside Function!!!!!");

  //console.log(require('./assets/icon.png')); <----- This return 3 thats mean
  // if I want to add ./assets/icon.png that image I can call it simplly 3

  /*
      Image

    <Image /> - if I don't add any extra word between image tag
    <Image> </Image> - If I want to add anything between image tag


    Local image
    <Image source={require('./assets/icon.png')} />
    <Image source={3} />

    Network Image
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }} />

    Blur Image
    <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }} />

      fade
      <Image blurRadius={10}
      fadeDuration={1000}
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }} />

        add touchable

          <TouchableWithoutFeedback onPress={() => console.log("Image Taped.")}>

      <Image
      fadeDuration={1000}
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }} />

      </TouchableWithoutFeedback>
  */


import React, { useState } from 'expo-status-bar';

//without safearea
//import { StyleSheet, Text, View} from 'react-native';

//with safearea
//import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//if I want to add image
//import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

//Add touchable
/*
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView
} from 'react-native';
*/

//add anouther
/*
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button
} from 'react-native';

*/
//add platform identifier => detect os,status bar => get the size of status bar
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar
} from 'react-native';

export default function App() {

  return (

    /*
    work only with ios
    <SafeAreaView style={styles.container}>
      <Button
      color='red'
      title='Click Me'
      onPress={() =>
        Alert.prompt('This is Prompt', 'What is your Name?', text => console.log(text))
      }
      />
    </SafeAreaView>
*/

    //custom alert

    <SafeAreaView style={[styles.container,containerStyles]}>
      <Button
      color='red'
      title='Click Me'
      onPress={() => Alert.alert('My Title', 'This is the alert', [
        {text: 'Yes', onPress: () => console.log('Yes')},
        {text: 'No!!!', onPress: () => console.log('No!!!')},
      ])} />
    </SafeAreaView>

    /*
    <SafeAreaView style={styles.container}>
      <Button
      color='red'
      title='Click Me'
      onPress={() => alert('Button Taped.')} />
    </SafeAreaView>

==========================================================================================

    <SafeAreaView style={styles.container}>
      <Text> Hello World </Text>
      <TouchableOpacity onPress={() => console.log("Image Taped.")}>
      <Image
      fadeDuration={1000}
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }} />

      </TouchableOpacity>
      <View style={{width:200, height: 70,backgroundColor:'blue'}}></View>
    </SafeAreaView>
==========================================================================================

    <SafeAreaView style={styles.container}>
      <Text>Hello World!!. this is loooooong text so this cant display in single line but if I want to display it in single line it can be use like fill one line and put a three dots to end</Text>
      <Text> </Text>
      <Text>This is online event</Text>
      <Text numberOfLines={1} onPress={() => console.log("Text Pressed!")}>Hello World!!. this is loooooong text so this cant display in single line but if I want to display it in single line it can be use like fill one line and put a three dots to end</Text>

      <Text onPress={handlePress}>Hello World!!. this is loooooong text so this cant display in single line but if I want to display it in single line it can be use like fill one line and put a three dots to end</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
    */

  );
}

const containerStyles = {
  backgroundColor: 'orange'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /*
    justifyContent: 'center',
    alignItems: 'center',
    */
   paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});


```

```
import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Dimensions
} from 'react-native';
//import { useDimensions } from '@react-native-community/hooks';

export default function App() {
/*
  console.log(Dimensions.get('screen'));

  ==================================================

  Object {
  "fontScale": 1,
  "height": 1280,
  "scale": 1.5,
  "width": 800,
}
*/

  //console.log(useDimensions());
  return (

    <SafeAreaView style={[styles.container,containerStyles]}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '30%',
      }}>

      </View>
    </SafeAreaView>


  );
}

const containerStyles = {
  backgroundColor: 'orange'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});

```
