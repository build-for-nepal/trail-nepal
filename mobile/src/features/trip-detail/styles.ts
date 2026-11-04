import { StyleSheet } from 'react-native';

// NativeWind's arbitrary shadow classes keep only the colour and radius, so shadows go
// through style. The same shadow as the Explore card.
export const shadows = StyleSheet.create({
  card: { boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)' },
  button: {
    boxShadow:
      '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  },
});
