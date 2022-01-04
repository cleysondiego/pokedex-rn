import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { PokemonCard } from '../../components/PokemonCard';
import { getFormattedPokemons } from '../../sevices/pokemonApiService';
import { IPokemon } from '../../types/IPokemon';

import { styles } from './styles';

export function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | undefined>(undefined);

  async function loadData() {
    try {
      const { pokemonDetails, next } = await getFormattedPokemons(nextUrl);
      setPokemons([...pokemons, ...pokemonDetails]);
      setNextUrl(next);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView>
      {
        pokemons.length > 0 ? (
          <FlatList
            data={pokemons}
            numColumns={2}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.container}
            onEndReached={loadData}
            onEndReachedThreshold={0.2}
            ListFooterComponent={
              <ActivityIndicator
                style={styles.loadingSpinner}
                size='large'
                color='#ff0000'
              />
            }
          />
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.textError}>Could not load data. Close the application and try again!</Text>
          </View>
        )
      }
      
    </SafeAreaView>
  );
}
