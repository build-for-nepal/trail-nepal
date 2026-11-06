import { Alert, Linking } from 'react-native';

/**
 * Opens the phone's dialler on `number`. Where there is no dialler, as on a tablet or a
 * simulator, it says so and shows the number, rather than failing silently.
 */
export function callNumber(number: string) {
  Linking.openURL(`tel:${number.replace(/\s/g, '')}`).catch(() => {
    Alert.alert("Can't call from this device", `Dial ${number}.`);
  });
}
