import React from 'react';
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

interface Props extends TouchableWithoutFeedbackProps {}

export function BackButton({ ...rest }: Props) {
  return (
    <TouchableWithoutFeedback {...rest}>
      <MaterialIcons
        name='chevron-left'
        size={32}
        color='#fff'
      />
    </TouchableWithoutFeedback>
  );
}
