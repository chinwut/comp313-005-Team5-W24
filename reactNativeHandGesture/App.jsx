import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

function App() {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    const requestCameraPermission = async () => {
      if (!hasPermission) {
        const status = await requestPermission();
        if (status !== 'authorized') {
          Alert.alert(
            'Permission Denied',
            'Camera permission is required to use this feature.',
          );
        }
      }
    };

    requestCameraPermission();
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Camera Access Required</Text>
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
