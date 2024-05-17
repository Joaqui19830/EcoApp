import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FolderIcon, UpdateIcon} from '../icons/IconPrueba';

export const SaldoComponent = () => {
  return (
    <View style={styles.saldoContainer}>
      <View style={styles.fondoContainer}>
        <View style={styles.element}>
          <Text style={styles.text}>Saldo disponible</Text>
          <Text style={styles.balance}>
            $ 105.<Text style={{fontSize: 25}}>00</Text>
          </Text>
        </View>
        <View style={styles.contentIcon}>
          <Text style={{fontWeight: 'bold', color: 'white', marginLeft: 25}}>
            <FolderIcon />
          </Text>
          <Text style={styles.textSeuo}>(S.E.U.O)</Text>
          <View style={{left: 50}}>
            <UpdateIcon />
          </View>
          <Text style={styles.textAct}>Actualizar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saldoContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: 100,
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fondoContainer: {
    backgroundColor: '#21445B',
    width: 400,
    height: 100,
    borderRadius: 10,
  },
  element: {
    borderRadius: 10,
    // backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
    marginTop: 15,
    fontSize: 20,
  },
  balance: {
    fontWeight: 'bold',
    color: 'white',
    marginRight: 40,
    marginTop: 15,
    fontSize: 30,
  },
  contentIcon: {
    // backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSeuo: {
    fontWeight: 'bold',
    color: 'white',
    right: 45,
    marginTop: 3,
    fontSize: 15,
  },
  textAct: {
    fontWeight: 'bold',
    color: 'white',
    marginRight: 40,
    fontSize: 15,
  },
});
