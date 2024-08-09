import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function KeyboardCalc({ type = 'numbers', text, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.keyboard,
        type === 'numbers' && styles.keyboardNumbers,
        type === 'operators' && styles.keyboardOperators,
        type === 'funcs' && styles.keyboardFuncs,
        type === 'nullNumber' && styles.nullNumberKeyboard,
      ]}
      onPress={() => onPress(text)}
    >
      <Text
        style={[
          styles.buttonText,
          type === 'numbers' && styles.buttonTextNumbers,
          type === 'operators' && styles.buttonTextOperators,
          type === 'funcs' && styles.buttonTextFuncs,
          type === 'nullNumber' && styles.buttonTextNullNumber,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    borderRadius: 100,
    textAlign: 'center',
    alignItems: 'center',
    padding: 25,
    margin: 5,
  },
  keyboardNumbers: {
    backgroundColor: '#333',
  },
  keyboardOperators: {
    backgroundColor: '#f79b23',
  },
  keyboardFuncs: {
    backgroundColor: '#ccc',
  },
  nullNumberKeyboard: {
    flex: 3,
    alignItems: 'flex-start',
    paddingStart: '10%',
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 30,
  },
  buttonTextNumbers: {
    color: '#fff',
  },
  buttonTextOperators: {
    color: '#fff',
  },
  buttonTextFuncs: {
    color: '#000',
  },
  buttonTextNullNumber: {
    color: '#fff',
  },
});
