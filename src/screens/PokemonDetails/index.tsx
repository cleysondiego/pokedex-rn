import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getColorByPokemonType } from '../../utils/getColorByPokemonType';
import { IStackParamList } from '../../types/IStackParamList';

import { PokemonDetailsHeader } from './PokemonDetailsHeader';
import { styles } from './styles';

type IProps = NativeStackScreenProps<IStackParamList, 'PokemonDetails'>;

export function PokemonDetails({ route }: IProps) {
  const { pokemon } = route.params;

  const colorByPokemonType = getColorByPokemonType(pokemon.types);

  return (
    <SafeAreaView>
      <PokemonDetailsHeader
        types={pokemon.types}
        name={pokemon.name}
        image={pokemon.image}
      />

      <FlatList
        data={pokemon.types}
        horizontal={true}
        contentContainerStyle={styles.typesContainer}
        keyExtractor={( item ) => item.name}
        renderItem={({ item }) => (
          <Text
            style={[styles.typesText, { backgroundColor: colorByPokemonType }]}
          >
            {item.name}
          </Text>
        )}
      />

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.skillsTitle}>Skills</Text>
          <FlatList
            data={pokemon.skills}
            contentContainerStyle={styles.skillsContainer}
            keyExtractor={( item ) => item.name}
            renderItem={({ item }) => (
              <Text
                style={styles.textSkills}
              >
                {item.name}
              </Text>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
