import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { styles } from './styles';

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
      style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(route);
        }}>
        <Image
          style={styles.image}
          source={getLocalImage()}
        />
        <Text style={styles.regulartext}>{nome}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BotaoMenu;
