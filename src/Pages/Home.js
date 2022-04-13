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
import BotaoMenu from '../Components/BotaoMenu';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps={'always'}>
        <View
          style={{
            backgroundColor: '#404040',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              marginVertical: 20,
              color: '#a6a6a6',
              fontWeight: 'bold',
            }}>
            Bem vindo ao app de Rick and Morty
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginVertical: 20,
              color: '#a6a6a6',
              fontWeight: 'bold',
            }}>
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
