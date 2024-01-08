import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import dayjs from 'dayjs';

const CalculadoraDiasHastaCumpleanos = () => {
  const [fechaCumpleanos, setFechaCumpleanos] = useState('');
  const [diasHastaProximoCumpleanos, setDiasHastaProximoCumpleanos] = useState(null);

  const calcularDiasHastaProximoCumpleanos = () => {
    if (!dayjs(fechaCumpleanos).isValid()) {
      alert('Por favor, introduce una fecha de cumpleaños válida.');
      return;
    }

    const hoy = dayjs();
    const proximoCumpleanos = dayjs(fechaCumpleanos).set('year', hoy.year());

    if (proximoCumpleanos.isBefore(hoy)) {
      proximoCumpleanos.add(1, 'year');
    }

    const diasHastaProximoCumpleanos = proximoCumpleanos.diff(hoy, 'day');
    setDiasHastaProximoCumpleanos(diasHastaProximoCumpleanos);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Introduce tu fecha de cumpleaños:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Formato: AAAA-MM-DD"
        onChangeText={(texto) => setFechaCumpleanos(texto)}
        value={fechaCumpleanos}
      />
      <Button title="Calcular días hasta el próximo cumpleaños" onPress={calcularDiasHastaProximoCumpleanos} />
      {diasHastaProximoCumpleanos !== null && (
        <Text style={{ marginTop: 10 }}>
          Días hasta tu próximo cumpleaños: {diasHastaProximoCumpleanos}
        </Text>
      )}
    </View>
  );
};

export default CalculadoraDiasHastaCumpleanos;
