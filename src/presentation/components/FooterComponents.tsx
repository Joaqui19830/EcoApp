import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogoSanJuan from '../assets/img/svg/san-juan.svg';
import Logowhatsapp from '../assets/img/svg/whatsapps.svg';

export const FooterComponent = () => {
  return (
    <View style={styles.containerContent}>
      <View style={styles.containerView}>
        <Logowhatsapp
          width={40}
          height={40}
          style={{marginLeft: 25}}
          fill={'white'}
        />
        <Text style={styles.contentWsp}>WhatsApp</Text>
      </View>
      <View style={styles.item}>
        <LogoSanJuan height={40} style={{marginTop: 8}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFB742',
    width: 200,
    height: 70,
    alignItems: 'center',
    borderRadius: 10,
  },
  contentWsp: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginRight: 30,
  },
  item: {
    width: 200,
    height: 70,
    borderRadius: 10,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#FFB742',
    marginVertical: 20,
  },
});
