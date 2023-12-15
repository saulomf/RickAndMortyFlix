import React, {useState, useEffect} from 'react';
import apiGET from '../../api';
import {View, FlatList, Button, Text, TextInput} from 'react-native';
import Card from '../../Components/Card/Card';
import { styles } from './styles';

const Locais = ({navigation}) => {
  const [locais, setLocais] = useState([]);
  const [locaisCopia, setLocaisCopia] = useState([]);
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
      query: `/location`,
    });
    setLocais(response);
    setLocaisCopia(response);
    const response2 = await apiGET({
      query: `/character`,
    });
    setPersonagens(response2);
  }

  const renderItem = ({item}) => {
    const nomePersonagens = [];
    item.residents.forEach(element => {
      // Recupera o nome dos participantes do episódio
      personagens.forEach(item => {
        if (item.url === element) {
          nomePersonagens.push({nome: item.name});
        }
      });
    });
    return <Card tipo={'local'} dados={item} lista={nomePersonagens} />; //Renderiza todos os dados
  };

  function atualizaLista() {
    //Atualiza a lista mostrada na tela e recupera a lista completa
    if (text === '') {
      //quando os filtros são removidos
      setLocais(locaisCopia);
    } else {
      const filtrados = locaisCopia.filter(elemento => {
        return elemento.name.includes(text);
      });
      setLocais(filtrados);
    }
  }

  const ordenaLista = () => {
    //Ordena os episódios alfabeticamnete em ordem crescente e decrescente
    let copia = locais;
    if (tipoOrdena === 'AZ') {
      setLocais(
        copia.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)),
      );
    } else if (tipoOrdena === 'ZA') {
      setLocais(
        copia.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0)),
      );
    }
  };

  return (
    <View
      style={styles.container}>
      <TextInput
        style={styles.searchFieldtext}
        onChangeText={elemento => {
          onChangeText(elemento);
          atualizaLista();
        }}
        onEndEditing={() => atualizaLista()}
        value={text}
        placeholder="Busque por nome"
      />
      <View
        style={styles.headerField}>
        <Text style={styles.headerText}>Ordenar:</Text>
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
        data={locais}
        renderItem={renderItem}
        keyExtractor={index => index.id}
      />
    </View>
  );
};

export default Locais;
