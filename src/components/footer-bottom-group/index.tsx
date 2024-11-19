import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const CustomButtonGroup = ({ laterText = "‹‹  Pular", doItText = "Começar ›››", onPressContinue = () => { }, onPressBack = () => { } }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.laterButton}>
        <Text
          onPress={() => onPressBack()}
          style={styles.laterText}>{laterText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.doItButton}>
        <Text onPress={() => onPressContinue()} style={styles.doItText}>{doItText}</Text>
      </TouchableOpacity>
    </View>
  );
};


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#7F58FF',
    borderTopEndRadius: 25,
    borderTopStartRadius: 0,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 1,
    alignSelf: 'center',
    marginTop: 20,
  },
  laterButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  laterText: {
    color: '#E0D7FF',
    fontSize: 16,
  },
  doItButton: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  doItText: {
    color: '#7F58FF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CustomButtonGroup;
