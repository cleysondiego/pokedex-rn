import { IPokemon, IPokemonsDetailsResponseData, IPokemonType } from '../types/IPokemon';

export function formatPokemonDetails(originalDetails: IPokemonsDetailsResponseData): IPokemon {
  const { id, order } = originalDetails;
  const name = originalDetails.name.toUpperCase();
  const image = originalDetails.sprites.other['official-artwork'].front_default;
  const types = originalDetails.types.map(({ type }) => { return { name: type.name.toUpperCase() } as IPokemonType} );
  const skills = originalDetails.abilities.map(({ ability }) => { return { name: ability.name.toUpperCase() }} );

  return {
    id,
    name,
    order,
    image,
    types,
    skills
  };
};
