import Slider from '@react-native-community/slider';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Platform,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const statusBarHeight = StatusBar.currentHeight;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [travel, setTravel] = useState('');
  const [city, setCity] = useState('');
  const [days, setDays] = useState(3);

  function handleGenerate() {
    console.log(city);
    console.log(days.toFixed(0));
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor='#F1F1F1'
        barStyle='dark-content'
      />
      <Text style={styles.heading}>Roteiros fácil</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Cidade destino:</Text>
        <TextInput
          placeholder='Ex: Campo Grande, MS'
          style={styles.input}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Text style={styles.label}>
          Tempo de Estadia:
          <Text> {days.toFixed(0)} </Text>
          dias
        </Text>
        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor='green'
          maximumTrackTintColor='#000000'
          value={days}
          onValueChange={(value) => setDays(value)}
        />
      </View>
      <Pressable style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Gerar roteiro</Text>
        <MaterialIcons name='travel-explore' size={24} color='#FFF' />
      </Pressable>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 24 }}
        style={styles.containerScroll}
        showsVerticalScrollIndicator={false}>
        {loading && (
          <View style={styles.content}>
            <Text style={styles.title}>Carregando roteiro...</Text>
            <ActivityIndicator color='#000000' size='large' />
          </View>
        )}
        {travel && (
          <View style={styles.content}>
            <Text style={styles.title}>Roteiro da sua viagem 👇</Text>
            <Text>{travel}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 54,
  },
  form: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#94A3B8',
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FF5656',
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  containerScroll: {
    width: '90%',
    marginTop: 8,
  },
  content: {
    backgroundColor: '#FFF',
    padding: 16,
    width: '100%',
    marginTop: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
  },
});
