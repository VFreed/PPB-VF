import {Pressable, View, StyleSheet, Image, Alert, ScrollView,} from 'react-native';
import {Box, Stack, Text, Container, Heading, Center, NativeBaseProvider,extendTheme,} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  const theme = extendTheme({
    fontConfig: {
      Roboto: {
        100: {
          normal: 'Montserrat-Light',
          italic: 'Montserrat-LightItalic',
        },
        200: {
          normal: 'Montserrat-Light',
          italic: 'Montserrat-LightItalic',
        },
        300: {
          normal: 'Montserrat-Light',
          italic: 'Montserrat-LightItalic',
        },
        400: {
          normal: 'Montserrat-Regular',
          italic: 'Montserrat-Italic',
        },
        500: {
          normal: 'Montserrat-Medium',
        },
        600: {
          normal: 'Montserrat-Medium',
          italic: 'Montserrat-MediumItalic',
        },
        700: {
          normal: 'Montserrat-Bold',
        },
        800: {
          normal: 'Montserrat-Bold',
          italic: 'Montserrat-BoldItalic',
        },
        900: {
          normal: 'Montserrat-Bold',
          italic: 'Montserrat-BoldItalic',
        },
      },
    },
    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
      mono: 'Montserrat',
      customFont: 'Montserrat',
    },
  });

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.main}>
          <NativeBaseProvider>
            <View style={styles.header}>
              <Pressable onPress={() => navigation.navigate('Welcome', { name: 'Halaman Welcome' }) }>
                <Image style={styles.gambar} source={require('../assets/Vector.png')}/>
              </Pressable>
              <Text fontFamily="body" fontWeight="600" fontSize="24">
                Home Panel
              </Text>
              <Pressable onPress={() => Alert.alert('Tombol ini nanti harus anda arahkan ke profil anda')}>
                <Image style={styles.gambar} source={require('../assets/iconoir_profile-circled.png')}/>
              </Pressable>
            </View>

            <ScrollView>
              <Heading ml="10" mt="5" mb="5" fontFamily="body" fontWeight="600" fontSize="26">
                To Do Today
              </Heading>
              {/* praktikum sekarang */}
              
              <Center>
                <Container>
                  <Pressable onPress={() => Alert.alert('Anda menekan praktikum minggu 5') } rounded="8" overflow="hidden" maxW="100">
                    <Image source={require('../assets/navigation.png')} />
                    <View style={styles.box}>
                      <Stack space={2}>
                        <Heading fontFamily="body" fontSize="24" fontWeight="600" color="white">
                          Tentang Navigasi
                        </Heading>
                      </Stack>
                      <Text fontFamily="body" fontSize="18" fontWeight="400" color="white">
                        Pengantar praktikum minggu 5
                      </Text>
                    </View>
                  </Pressable>
                </Container>
              </Center>
              
              <Heading ml="10" mt="10" mb="5" fontFamily="body" fontWeight="600" fontSize="26">
                Past Practice
              </Heading>
              
              <Center>
                {/* flex, box, style */}
                <Container mb="5">
                  <Pressable onPress={() => navigation.navigate('Boxx', { name: 'Halaman Boxx' })
                    } rounded="8" overflow="hidden" maxW="100">
                    <Image source={require('../assets/flex.png')} />
                    <View style={styles.boxpast}>
                      <Stack space={2}>
                        <Heading fontFamily="body" fontSize="24" fontWeight="600" color="white">
                          Box, Flex, Style
                        </Heading>
                      </Stack>
                      <Text fontFamily="body" fontSize="18" fontWeight="400" color="white">
                        Praktikum Minggu ke 4
                      </Text>
                    </View>
                  </Pressable>
                </Container>

                {/* counter */}
                <Container mb="5">
                  <Pressable onPress={() => navigation.navigate('Counterbtt', { name: 'Halaman Counter Button' })
                    }rounded="8" overflow="hidden" maxW="100">
                    <Image source={require('../assets/navigation.png')} />
                    <View style={styles.boxpast}>
                      <Stack space={2}>
                        <Heading fontFamily="body" fontSize="24" fontWeight="600" color="white">
                          Counter Button
                        </Heading>
                      </Stack>
                      <Text fontFamily="body" fontSize="18" fontWeight="400" color="white">
                        Praktikum Minggu ke 3
                      </Text>
                    </View>
                  </Pressable>
                </Container>
                
              </Center>
            </ScrollView>
          </NativeBaseProvider>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    paddingBottom: 10,
    marginTop: '2%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  box: {
    padding: 8,
    borderRadius: 10,
    width: 319,
    backgroundColor: '#52ACFF',
  },

  boxpast: {
    padding: 8,
    borderRadius: 10,
    width: 319,
    backgroundColor: '#6E8FAD',
  },
});

export default Home;
