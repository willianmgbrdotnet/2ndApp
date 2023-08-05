import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Title from './src/components/Title/';
import Main from './src/components/Main/';
import Form from './src/components/Form/';

import FotoFundo from './src/images/IMCpexels.jpg';


export default function App() {
  return (
    <ImageBackground source={FotoFundo} style={styles.imagemFundo}>
    <View style={styles.container}>
      <Title/>
      <Main/>
      <Form/>
    </View>
    </ImageBackground>
  );
}

//O estilo dos componentes é feito no StyleSheet e apenas referenciado nas suas tags
const styles = StyleSheet.create({
  imagemFundo:{
    flex:1,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
