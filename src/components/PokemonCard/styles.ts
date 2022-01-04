import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    margin: 8,
    borderRadius: 16,
    padding: 8
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 100,
    width: 100
  },
  name: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: RFValue(16)
  },
  type: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: RFValue(12)
  }
});
