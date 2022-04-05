import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';

const Card = ({tipo, dados, lista}) => {
  //Padronização dos cards de episodios e personagens
  const [listaState, setListaState] = useState(false);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#a6a6a6',
          margin: 16,
        }}>
        {tipo === 'personagem' ? (
          <Image
            style={{height: 150, width: 150, backgroundColor: '#ffffff'}}
            source={{uri: dados.image}}
          />
        ) : null}
        <View
          style={{
            margin: 16,
            maxWidth: 150,
          }}>
          <Text style={{fontWeight: 'bold', lineHeight: 18}}>
            Nome: {dados.name}
          </Text>
          {tipo === 'personagem' ? (
            <Text style={{fontWeight: 'bold', lineHeight: 18}}>
              Status: {dados.status}
            </Text>
          ) : null}
          {tipo === 'personagem' ? (
            <Text style={{fontWeight: 'bold', lineHeight: 18}}>
              Espécie: {dados.species}
            </Text>
          ) : null}
          {tipo === 'personagem' ? (
            <Text style={{fontWeight: 'bold', lineHeight: 18}}>
              Origem: {dados.origin.name}
            </Text>
          ) : null}
          {tipo === 'episodio' ? (
            <Text style={{fontWeight: 'bold'}}>Episódio: {dados.episode}</Text>
          ) : null}
          {tipo === 'episodio' ? (
            <Text style={{fontWeight: 'bold'}}>
              Data de exibição: {dados.air_date}
            </Text>
          ) : null}
        </View>
      </View>

      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: -5, marginBottom: 5}}
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
      {listaState ? (
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
          style={{alignSelf: 'center', marginHorizontal: 16}}
        />
      ) : null}
    </View>
  );
};
export default Card;
