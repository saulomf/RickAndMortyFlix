import React, {useState, useEffect} from 'react';
import apiGET from '../api';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
} from 'react-native';
import Card from '../Components/Card';

const Personagens = ({navigation}) => {
  const [personagens, setPersonagens] = useState([]);
  const [personagensCopia, setPersonagensCopia] = useState([]);
  const [text, onChangeText] = useState('');
  const [episodios, setEpisodios] = useState([]);
  const [tipoOrdena, setTipoOrdena] = useState('');

  useEffect(() => {
    getData();
    setTipoOrdena('AZ');
  }, []);

  async function getData() {
    // Responsável por recuperar dados da API
    const response = await apiGET({
      query: `/character`,
    });
    setPersonagens(response);
    setPersonagensCopia(response);
    const response2 = await apiGET({
      query: `/episode`,
    });
    setEpisodios(response2);
  }

  const renderItem = ({item}) => {
    const nomeEpisodios = [];
    item.episode.forEach(element => {
      // Recupera o nome e numero dos episódios
      episodios.forEach(item => {
        if (item.url === element) {
          nomeEpisodios.push({episodio: item.episode, nome: item.name});
        }
      });
    });
    return <Card tipo={'personagem'} dados={item} lista={nomeEpisodios} />; //Renderiza todos os dados
  };

  function atualizaLista() {
    //Atualiza a lista mostrada na tela e recupera a lista completa
    if (text === '') {
      //quando os filtros são removidos
      setPersonagens(personagensCopia);
    } else {
      const filtrados = personagensCopia.filter(elemento => {
        return elemento.name.includes(text);
      });
      setPersonagens(filtrados);
    }
  }

  const ordenaLista = () => {
    //Ordena os episódios alfabeticamnete em ordem crescente e decrescente
    let copia = personagens;
    if (tipoOrdena === 'AZ') {
      setPersonagens(
        copia.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)),
      );
    } else if (tipoOrdena === 'ZA') {
      setPersonagens(
        copia.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0)),
      );
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#404040',
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          height: 40,
          width: 320,
          margin: 12,
          borderWidth: 1,
          borderColor: '#a6a6a6',
          padding: 10,
        }}
        onChangeText={elemento => {
          onChangeText(elemento);
          atualizaLista();
        }}
        onEndEditing={() => atualizaLista()}
        value={text}
        placeholder="Busque por nome"
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
          marginHorizontal: 10,
        }}>
        <Text style={{marginHorizontal: 10, marginTop: 8}}>Ordenar:</Text>
        <Button
          onPress={() => {
            setTipoOrdena('ZA');
            ordenaLista();
          }}
          title="A -> Z"
          color="#a6a6a6"
        />
        <Button
          onPress={() => {
            setTipoOrdena('AZ');
            ordenaLista();
          }}
          title="Z -> A"
          color="#a6a6a6"
        />
      </View>
      <FlatList
        data={personagens}
        renderItem={renderItem}
        keyExtractor={index => index.id}
        extraData={personagens}
      />
      <View style={{height: 100}} />
    </View>
  );
};
export default Personagens;
