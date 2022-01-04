import { StyleSheet } from "react-native";

import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  typesContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    marginTop: 8
  },
  typesText: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    color: '#fff',
    fontSize: RFValue(16)
  },
  contentContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  skillsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  skillsTitle: {
    color: '#000',
    marginVertical: 8,
    fontSize: RFValue(24),
    textAlign: 'center'
  },
  textSkills: {
    textAlign: 'center',
    backgroundColor: '#ddd',
    paddingHorizontal: 24,
    paddingVertical: 8,
    color: '#000',
    marginBottom: 24
  }
});
