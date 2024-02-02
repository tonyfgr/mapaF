import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import NavigationBar from './components/NavigationBar';
import ButtonGroup from './components/ButtonGroup';
import TopBarInfo from './components/TopBarInfo';

export default function App() {
  const [origin, setOrigin] = useState({
    latitude: 43.699223,
    longitude: 7.278105,
  });

  const handleButtonPress = (buttonName) => {
    console.log(`Botón presionado: ${buttonName}`);
  };

  return (
    <View style={styles.container}>
      <TopBarInfo />
      <NavigationBar />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      />
      <StatusBar style="auto" />
      <ButtonGroup onButtonPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Ajusta la alineación al principio
  },
  map: {
    width: '100%',
    height: '79%',
    marginTop: -30,
  },
});
