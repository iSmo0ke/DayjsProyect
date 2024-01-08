import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculadoraDiasHastaCumpleanos from './componentes/Componente1';

const App = () => {
  return (
    <View style={styles.container}>
      <CalculadoraDiasHastaCumpleanos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
