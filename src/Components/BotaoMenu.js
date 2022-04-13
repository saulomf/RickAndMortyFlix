import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

const BotaoMenu = ({navigation, nome, imagem, route}) => {
  //Padronização dos botões do menu inicial

  const getLocalImage = () => {
    switch (imagem) {
      case 'pessoa':
        return require('.././assets/pessoa.png');
      case 'play':
        return require('.././assets/play.png');
      case 'location':
        return require('.././assets/location.png');
      default:
        break;
    }
  };

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
          style={{
            height: 150,
            width: 150,
            backgroundColor: '#ffffff',
            tintColor: '#2f2f2f',
          }}
          source={getLocalImage()}
        />
        <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>{nome}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BotaoMenu;
