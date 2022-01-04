import React from 'react';
import { Image, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { IPokemonType } from '../../../types/IPokemon';
import { getColorByPokemonType } from '../../../utils/getColorByPokemonType';

import { styles } from './styles';

interface IProps {
  types: IPokemonType[];
  name: string;
  image: string;
}

export function PokemonDetailsHeader({ types, name, image }: IProps) {
  const navigation = useNavigation();

  const colorByPokemonType = getColorByPokemonType(types);

  function handleOnBack() {
    navigation.goBack();
  }

  return (
    <View>
      <View style={[styles.background, { backgroundColor: colorByPokemonType }]} />
      <View style={styles.content}>
        <View>
          <BackButton onPress={handleOnBack} />
        </View>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </View>
    </View>
  );
}
