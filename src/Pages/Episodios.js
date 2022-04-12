import React, {useState, useEffect} from 'react';
import apiGET from '../api';
import {View, FlatList, Button, Text, TextInput} from 'react-native';
import Card from '../Components/Card';

const Episodios = ({navigation}) => {
  const [episodios, setEpisodios] = useState([]);
  const [episodiosCopia, setEpisodiosCopia] = useState([]);
  const [text, onChangeText] = useState('');
  const [personagens, setPersonagens] = useState([]);
  const [tipoOrdena, setTipoOrdena] = useState('');

  useEffect(() => {
    getData();
    setTipoOrdena('AZ');
  }, []);

  async function getData() {
    // Responsável por recuperar dados da API
    const response = await apiGET({
      query: `/episode`,
    });
    setEpisodios(response);
    setEpisodiosCopia(response);
    const response2 = await apiGET({
      query: `/character`,
    });
    setPersonagens(response2);
  }

  const renderItem = ({item}) => {
    const nomePersonagens = [];
    item.characters.forEach(element => {
      // Recupera o nome dos participantes do episódio
      personagens.forEach(item => {
        if (item.url === element) {
          nomePersonagens.push({nome: item.name});
        }
      });
    });
    return <Card tipo={'episodio'} dados={item} lista={nomePersonagens} />; //Renderiza todos os dados
  };

  function atualizaLista() {
    //Atualiza a lista mostrada na tela e recupera a lista completa
    if (text === '') {
      //quando os filtros são removidos
      setEpisodios(episodiosCopia);
    } else {
      const filtrados = episodiosCopia.filter(elemento => {
        return elemento.name.includes(text);
      });
      setEpisodios(filtrados);
    }
  }

  const ordenaLista = () => {
    //Ordena os episódios alfabeticamnete em ordem crescente e decrescente
    let copia = episodios;
    if (tipoOrdena === 'AZ') {
      setEpisodios(
        copia.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)),
      );
    } else if (tipoOrdena === 'ZA') {
      setEpisodios(
        copia.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0)),
      );
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#404040',
        alignItems: 'center',
        flex: 1,
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
        data={episodios}
        renderItem={renderItem}
        keyExtractor={index => index.id}
      />
    </View>
  );
};
export default Episodios;
