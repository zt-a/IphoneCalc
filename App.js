import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardsCalc } from './components/keyboards/Keyboards';

export default function App() {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);
  const operators = ['+', '-', '/', '*'];

  const handleButtonPress = (text) => {
    if (text === 'AC') {
      setInput('0');
      setResult('');
      setShowResult(false);
    } else if (text === '+/-') {
      setInput(input.includes('-') ? input.slice(1) : `-${input}`);
      setShowResult(false);
    } else if (text === '%') {
      setInput(`${parseFloat(input) / 100}`);
      setShowResult(false);
    } else if (text === '=') {
      try {
        setResult(eval(input).toString());
        setShowResult(true);
        setInput('0')
      } catch {
        setResult('Error');
        setShowResult(true);
      }
    } else {
      if (
        input === '' ||
        (operators.includes(input[input.length - 1]) && operators.includes(text)) ||
        (input === '0' && operators.includes(text))
      ) {
        setShowResult(false);
      } else {
        setInput(input === '0' ? text : input + text);
        setShowResult(false);
      }
      
    }
  };

  const btns = [
    [
      { type: 'funcs', text: 'AC', onPress: () => handleButtonPress('AC') },
      { type: 'funcs', text: '+/-', onPress: () => handleButtonPress('+/-') },
      { type: 'funcs', text: '%', onPress: () => handleButtonPress('%') },
      { type: 'operators', text: '/', onPress: () => handleButtonPress('/') },
    ],
    [
      { type: 'numbers', text: '7', onPress: () => handleButtonPress('7') },
      { type: 'numbers', text: '8', onPress: () => handleButtonPress('8') },
      { type: 'numbers', text: '9', onPress: () => handleButtonPress('9') },
      { type: 'operators', text: '*', onPress: () => handleButtonPress('*') },
    ],
    [
      { type: 'numbers', text: '4', onPress: () => handleButtonPress('4') },
      { type: 'numbers', text: '5', onPress: () => handleButtonPress('5') },
      { type: 'numbers', text: '6', onPress: () => handleButtonPress('6') },
      { type: 'operators', text: '-', onPress: () => handleButtonPress('-') },
    ],
    [
      { type: 'numbers', text: '1', onPress: () => handleButtonPress('1') },
      { type: 'numbers', text: '2', onPress: () => handleButtonPress('2') },
      { type: 'numbers', text: '3', onPress: () => handleButtonPress('3') },
      { type: 'operators', text: '+', onPress: () => handleButtonPress('+') },
    ],
    [
      { type: 'nullNumber', text: '0', onPress: () => handleButtonPress('0') },
      { type: 'numbers', text: ',', onPress: () => handleButtonPress('.') },
      { type: 'operators', text: '=', onPress: () => handleButtonPress('=') },
    ],
  ];

  const calculateFontSize = (text) => {
    const length = text.length;
    let fontSize = 60; // начальный размер шрифта

    if (length > 15) {
      fontSize = 50;
    } else if (length > 10) {
      fontSize = 40;
    }

    return fontSize;
  };

  const calculateMarginTop = (text) => {
    const length = text.length;
    let marginTop = 0; // начальный отступ сверху

    if (length > 15) {
      marginTop = 20;
    } else if (length > 10) {
      marginTop = 10;
    }

    return marginTop;
  };

  const textToShow = showResult ? result : input;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.results}>
        <Text
          style={[
            styles.resultText,
            {
              fontSize: calculateFontSize(textToShow),
              marginTop: calculateMarginTop(textToShow),
            },
          ]}
        >
          {textToShow}
        </Text>
      </View>
      <View style={styles.calcKeyboards}>
        {btns.map((row, index) => (
          <KeyboardsCalc key={index} btns={row} onPress={handleButtonPress} />
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  results: {
    height: '40%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  resultText: {
    color: '#fff',
  },
  calcKeyboards: {
    height: '60%',
  },
});
