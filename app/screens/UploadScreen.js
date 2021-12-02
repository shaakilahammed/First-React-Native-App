import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';

import colors from '../config/colors';

function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
        {/* <Progress.Pie color={colors.primary} progress={progress} size={50} /> */}
        {/* <Progress.Circle
          color={colors.primary}
          size={50}
          indeterminate={true}
        /> */}
        {/* <Progress.CircleSnail color={colors.primary} size={50} /> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default UploadScreen;
