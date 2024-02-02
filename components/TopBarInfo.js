// components/TopBarInfo.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const TopBarInfo = () => {
  return (
    <View style={styles.topBarContainer}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="location" size={24} color="#026E62" style={styles.icon} />
        <Text>Nice {'<'} 10 km</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="category" size={24} color="#026E62" style={styles.icon} />
        <Text>Vas categories favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="calendar" size={24} color="#026E62" style={styles.icon} />
        <Text>Cette semaine</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    borderColor: '#ddd', // Cambia el color del borde a gris claro
    borderWidth: 1, // Añade un ancho de borde para que sea visible
  },
  icon: {
    marginBottom: 5,
  },
});

export default TopBarInfo;
