import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import LogoEco from '../assets/img/svg/eco.svg';
import LogoAuto from '../assets/img/svg/icon-car-solid.svg';
import LogoPesos from '../assets/img/svg/icon-circle-dollar-to-slot-solid.svg';
import LogoInfringement from '../assets/img/svg/icon-file-solid.svg';
import Location from '../assets/img/svg/icon-location-dot-solid.svg';
import RechargeLocations from '../assets/img/svg/icon-shop-solid.svg';
import MyAccount from '../assets/img/svg/icon-user-regular.svg';

const DATA = [
  {
    id: 1,
    title: 'Estacionar',
    subtitle: 'Realzar registro de estacionamiento',
    icon: <LogoAuto width={40} height={40} />,
  },
  {
    id: 2,
    title: '¿Dónde estacionará?',
    subtitle: 'Ubicar vehículo',
    icon: <Location width={40} height={40} />,
  },
  {
    id: 3,
    title: 'Mi Cuenta',
    subtitle: 'Ver saldos y movimientos',
    icon: <MyAccount width={40} height={40} />,
  },
  {
    id: 4,
    title: 'Recarga',
    subtitle: 'Realizar recarga de saldo',
    icon: <LogoPesos width={40} height={40} />,
  },
  {
    id: 5,
    title: 'Lugares de Recarga',
    subtitle: 'Buscar punto de venta cercano',
    icon: <RechargeLocations width={40} height={40} />,
  },
  {
    id: 6,
    title: 'Infracciones',
    subtitle: 'Ver registro de infracciones',
    icon: <LogoInfringement width={40} height={40} />,
  },
];

type ItemProps = {title: string; subtitle: string; icon: any};

const Item = ({title, subtitle, icon}: ItemProps) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
    <View style={styles.icon}>{icon}</View>
  </View>
);

// interface Props {
//   style?: StyleProp<ViewStyle>;
// }

export const ListComponent = (/*{style}: Props*/) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} subtitle={item.subtitle} icon={item.icon} />
        )}
        keyExtractor={(item: any) => item.id}
      />
      <LogoEco width={150} height={150} style={{marginLeft: 40, top: -20}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 30,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    marginBottom: 10,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#FFB742',
    padding: 10,
    // marginVertical: 20,
    marginHorizontal: 40,
  },
  title: {
    fontSize: 20,
    color: '#21445B',
  },
  subTitle: {
    fontSize: 15,
    color: '#21445B',
  },
  icon: {
    marginRight: 20,
  },
});
