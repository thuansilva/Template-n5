import React from 'react';
import {ImageBackground, StyleSheet, Text, StatusBar, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});

const Main = () => (
  <>
    <View>
      <StatusBar backgroundColor="transparent" translucent />
    </View>
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
      }}>
      <Text style={styles.welcome}>Hello N5!</Text>
    </ImageBackground>
  </>
);

export default Main;
