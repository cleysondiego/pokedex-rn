import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { getColorByPokemonType } from '../../utils/getColorByPokemonType';
import { IPokemon } from '../../types/IPokemon';
import { IStackParamList } from '../../types/IStackParamList';

import { styles } from './styles';

interface IProps {
  pokemon: IPokemon;
}

type NavigationType = NativeStackNavigationProp<IStackParamList, 'Home'>;

export function PokemonCard({ pokemon }: IProps) {
  const navigation = useNavigation<NavigationType>();

  const colorByPokemonType = getColorByPokemonType(pokemon.types);

  function handleOnPress() {
    navigation.navigate('PokemonDetails', { pokemon });
  }

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={[styles.card, { backgroundColor: colorByPokemonType }]} >
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.type}>{pokemon.types[0].name}</Text>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}
