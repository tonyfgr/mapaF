// components/NavigationBar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const NavigationBar = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
      <TouchableOpacity onPress={() => console.log('Accueil')}>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text>Accueil</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Chercher')}>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="search-outline" size={24} color="#313131" />
          <Text>Chercher</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Agregar')}>
        <View style={{ alignItems: 'center' }}>
          <MaterialIcons name="add-circle-outline" size={35} color="#313131" />
          
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Favorits')}>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="heart-outline" size={24} color="#313131" />
          <Text>Favorits</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Agenda')}>
        <View style={{ alignItems: 'center' }}>
          <Ionicons name="calendar-outline" size={24} color="#313131" />
          <Text>Agenda</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;

