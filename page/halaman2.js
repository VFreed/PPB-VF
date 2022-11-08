import {Pressable, View, StyleSheet, Image, Alert, ScrollView,} from 'react-native';
import {Box, Stack, Text, Container, Heading, Center, NativeBaseProvider,extendTheme,} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const Halaman2 = ({ navigation }) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <View >
          <NativeBaseProvider>
            <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Welcome', { name: 'Halaman Welcome' }) }>
                <Image style={styles.gambar} source={require('../assets/Vector.png')}/>
              </Pressable>
              <Text fontFamily="body" fontWeight="600" fontSize="24" >
                Home Tugas
              </Text>
            </View>

            <ScrollView style={styles.scrolll}>
              <View >
              <Center>
                <Container style={styles.bundar}>
                  <Pressable onPress={() => navigation.navigate('Home', { name: 'Halaman Home' })} rounded="8" overflow="hidden" maxW="200">
                    <View >
                      <Text fontFamily="body" fontSize="30" fontWeight="900" color="white">3</Text>   
                    </View>
                  </Pressable>
                </Container>
              </Center>
              
              <Center>
                <Text fontFamily="body" fontSize="24" fontWeight="600" >PROJECT</Text>
              </Center>

               <Center>
                <Container>
                  <Pressable onPress={() => navigation.navigate('Boxx', { name: 'Halaman Boxx' }) } rounded="8" overflow="hidden" maxW="100">
                    <View style={styles.kotak}>
                        <Heading fontFamily="body" fontSize="24" fontWeight="600" color="white">
                          Profil Data Diri
                        </Heading>
                      <View style={styles.datadiri}>
                        <Image style={styles.gambar} source={require('../assets/iconoir_profile-circled.png')}/>
                        <Text fontFamily="body" fontSize="18" fontWeight="400" color="white">
                          Tekan tombol untuk menampilkan data diri
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                </Container>
              </Center>
              </View>
            </ScrollView>

            <Center>
                <Container style={styles.keluar}>
                  <Pressable onPress={() => navigation.navigate('Welcome', { name: 'Halaman Welcome' }) } rounded="8" overflow="hidden" maxW="200">
                    <View >
                      <Text fontFamily="body" fontSize="24" fontWeight="300" color="white">Keluar</Text>   
                    </View>
                  </Pressable>
                </Container>
            </Center>

          </NativeBaseProvider>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  header: {
    paddingBottom: 10,
    marginTop: '2%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  bundar: {
    width: '20%',
    height: 100,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },

  kotak: {
    width: '90%',
    height: 100,
    backgroundColor: '#8E8E8E',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },

  datadiri: {
    flexDirection: 'row',
  },

  scrolll: {
    flex: 1,
    backgroundColor: '#8BC34A'
  },

  keluar: {

    width: '90%',
    height: 30,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Halaman2;
