import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../../../config/themes/theme';
// import FootImage from '../../assets/SVG/foot-image';
import Logo from '../../assets/img/svg/dashboard-top-image.svg';

import {FooterComponent} from '../../components/FooterComponents';
import {ListComponent} from '../../components/ListComponent';
import {SaldoComponent} from '../../components/SaldoComponent';
import {ThreeIcon} from '../../icons/IconPrueba';

export const EcoScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <View style={styles.containerEco}>
        <View style={{right: 5}}>
          <Logo height={100} width={180} />
        </View>
        <View>
          <Text style={styles.icon}>
            <ThreeIcon />
          </Text>
        </View>
      </View>

      <SaldoComponent />
      <ListComponent />
      <FooterComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  containerEco: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    marginTop: 5,
    marginRight: 5,
  },
});
