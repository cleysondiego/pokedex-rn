import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 250,
    position: 'absolute',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: RFValue(24),
    color: '#FFF',
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  image: {
    height: 250,
    width: 250,
  }
});
