import { Text, Pressable, View, StyleSheet, Image, Alert } from 'react-native';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

const Welcome = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  return (
    <View style={styles.container}>
      <Image style={styles.gambar} source={require('../assets/icon1.png')} />
      <View style={styles.bargo}>
        <Text style={styles.header}>Minggu ke 5</Text>
        <Text style={styles.sub}>
          Praktikum ini kita akan belajar tentang Navigasi antar halaman.
          Silahkan tekan menu di bawah untuk menuju ke halaman lain.
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Home', { name: 'Halaman Home' })}>
          <Text style={styles.btext}>Belajar Sekarang</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Halaman2', { name: 'Halaman2' })}>
          <Text style={styles.btext}>Halaman 2</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  gambar: {
    marginTop: '35%',
    width: 250,
    height: 250,
    marginBottom: 75,
  },

  bargo: {
    width: '85%',
    height: 400,
    backgroundColor: '#8E8E8E',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },

  header: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 38,
    color: '#fff',
    marginBottom: 15,
  },

  sub: {
    fontFamily: 'Montserrat_500Medium',
    width: '85%',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 200,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 30,
  },

  btext: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default Welcome;
