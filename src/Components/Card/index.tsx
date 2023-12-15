import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import { styles } from './styles';

const Card = ({tipo, dados, lista}) => {
  //Padronização dos cards de episodios e personagens
  const [listaState, setListaState] = useState(false);

  return (
    <View>
      <View
        style={styles.container}>
        {tipo === 'personagem' ? (
          <Image
            style={styles.image}
            source={{uri: dados.image}}
          />
        ) : null}
        <View
          style={{
            margin: 16,
            maxWidth: tipo !== 'personagem' ? 500 : 150,
          }}>
          <Text style={styles.subtitleText}>
            Nome: {dados.name}
          </Text>
          {tipo === 'personagem' ? (
            <Text style={styles.subtitleText}>
              Status: {dados.status}
            </Text>
          ) : null}
          {tipo === 'personagem' ? (
            <Text style={styles.subtitleText}>
              Espécie: {dados.species}
            </Text>
          ) : null}
          {tipo === 'personagem' ? (
            <Text style={styles.subtitleText}>
              Origem: {dados.origin.name}
            </Text>
          ) : null}
          {tipo === 'episodio' ? (
            <Text style={styles.regularText}>Episódio: {dados.episode}</Text>
          ) : null}
          {tipo === 'episodio' ? (
            <Text style={styles.regularText}>
              Data de exibição: {dados.air_date}
            </Text>
          ) : null}
          {tipo === 'local' ? (
            <Text style={styles.regularText}>Tipo: {dados.type}</Text>
          ) : null}
          {tipo === 'local' ? (
            <Text style={styles.regularText}>
              Dimensão: {dados.dimension}
            </Text>
          ) : null}
        </View>
      </View>

      {lista.length > 0 ? (
        <TouchableOpacity
          style={styles.centerButton}
          onPress={() => setListaState(!listaState)}>
          <Text style={{fontWeight: 'bold'}}>
            {listaState
              ? tipo === 'personagem'
                ? 'Ocultar Episódios'
                : 'Ocultar Participantes'
              : tipo === 'personagem'
              ? 'Exibir Episódios'
              : 'Exibir Participantes'}
          </Text>
        </TouchableOpacity>
      ) : null}
      {listaState && lista.length > 0 ? (
        <FlatList
          data={lista}
          renderItem={item => {
            return (
              <Text>
                {tipo === 'personagem'
                  ? 'Episódio: ' + item.item.episodio + ' - '
                  : ''}
                Nome: {item.item.nome}
              </Text>
            );
          }}
          style={styles.list}
        />
      ) : null}
    </View>
  );
};
export default Card;
