// components/ButtonGroup.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const ButtonGroup = ({ onButtonPress }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
    onButtonPress(buttonName);
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          styles.firstButton,
          selectedButton === 'Carte' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('Carte')}
      >
        <Ionicons name="map-outline" size={24} color="black" style={styles.icon} />
        <Text>Carte</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selectedButton === 'Liste' && styles.selectedButton]}
        onPress={() => handleButtonPress('Liste')}
      >
        <Text>Liste</Text>
        <MaterialIcons name="list" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#DCDCDC',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstButton: {
    marginRight: -190, // Ajusta el espacio entre el primer y segundo botón
  },
  icon: {
    marginHorizontal: 15,
  },
  selectedButton: {
    backgroundColor: '#D0D0D0',
  },
});

export default ButtonGroup;



