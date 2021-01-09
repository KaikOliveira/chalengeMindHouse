import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

import { Button } from './styles';

export default function ButtonBasket({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ['#fff', '#ccc'] : ['#F4F44D', '#F3F44D']}
        start={[1, 0.2]}
      >
        <Fontisto
          name="shopping-basket"
          size={22}
          color={focused ? '#000' : '#92929c'}
        />
      </Button>
    </TouchableWithoutFeedback>
  );
}
