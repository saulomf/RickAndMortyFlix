import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import BotaoMenu from '../../Components/MenuButton';
import { styles } from './styles';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps={'always'}>
        <View
          style={styles.container}>
          <Text
            style={styles.titleText}>
            Bem vindo ao app de Rick and Morty
          </Text>
          <Text
            style={styles.subtitleText}>
            Encontre aqui informações sobre personagens e episódios do melhor
            desenho dos últimos anos
          </Text>
          <BotaoMenu
            nome={'Personagens'}
            imagem={'pessoa'}
            navigation={navigation}
            route={'Personagens'}
          />
          <BotaoMenu
            nome={'Episódios'}
            imagem={'play'}
            navigation={navigation}
            route={'Episodios'}
          />
          <BotaoMenu
            nome={'Locais'}
            imagem={'location'}
            navigation={navigation}
            route={'Locais'}
          />
          <View style={{height: 100}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
