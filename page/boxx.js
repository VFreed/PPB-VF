import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Boxx = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Tugas Praktikum 4</Text>
      <View>
        <Text style={styles.isi}>
          Halaman ini disusun untuk memenuhi pengumpulan tugas praktikum minggu
          4
        </Text>
      </View>
      <View style={styles.containerbox}>
        <View style={styles.box1}>
          <Text style={styles.judulbox}>Nama Saya</Text>
          <Text style={styles.isibox}>Ival Yudha Prawira</Text>
          <Text style={styles.judulbox}>Program Studi</Text>
          <Text style={styles.isibox}>Teknologi Informasi</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.judulbox}>Panggilan</Text>
          <Text style={styles.isibox}>Ival</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.judulbox}>Telepon</Text>
          <Text style={styles.isibox}>085234440024</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.judulbox}>NIM</Text>
          <Text style={styles.isibox}>1202200018</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDff',

    padding: 8,
  },

  judul: {
    margin: 24,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },

  isi: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'justify',
  },

  judulbox: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },

  isibox: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  containerbox: {
    flex: 1,
    alignItems: 'center',
  },

  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    align: 'center',
    width: '95%',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#c7ff29',
    padding: 5,
  },

  box2: {
    justifyContent: 'center',
    alignItems: 'center',
    align: 'center',
    width: '95%',
    marginBottom: 15,
    backgroundColor: '#c7ff29',
    padding: 5,
  },

  box3: {
    justifyContent: 'center',
    alignItems: 'center',
    align: 'center',
    width: '95%',
    marginBottom: 15,
    backgroundColor: '#c7ff29',
    padding: 5,
  },

  box4: {
    justifyContent: 'center',
    alignItems: 'center',
    align: 'center',
    width: '95%',
    marginBottom: 15,
    backgroundColor: '#c7ff29',
    padding: 5,
  },
});

export default Boxx;
