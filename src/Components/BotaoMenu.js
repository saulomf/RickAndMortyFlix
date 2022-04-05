import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

const BotaoMenu = ({navigation, nome, imagem, route}) => {
  //Padrnozação dos botões do menu inicial
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#a6a6a6',
        margin: 20,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(route);
        }}>
        <Image
          style={{height: 150, width: 150, backgroundColor: '#ffffff'}}
          source={
            imagem === 'pessoa'
              ? require('./assets/pessoa.png')
              : require('./assets/play.png')
          }
        />
        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>{nome}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BotaoMenu;
