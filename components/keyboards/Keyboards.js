import React from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardCalc } from './Keyboard';

export function KeyboardsCalc({ btns = [{ type: 'numbers', text: "1" }], onPress }) {
  return (
    <View style={styles.btns}>
      {btns.map((btn, index) => (
        <KeyboardCalc key={index} {...btn} onPress={onPress} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  btns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
