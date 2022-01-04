import { StyleSheet } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  loadingSpinner: {
    marginTop: 24,
    marginBottom: 64,
  },
  errorContainer: {
    alignItems: 'center'
  },
  textError: {
    fontWeight: 'bold',
    fontSize: RFValue(16)
  }
});
