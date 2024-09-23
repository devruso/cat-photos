import { StyleSheet, Text, View } from 'react-native';

export default function CatDetails() {
  return (
    <View style={styles.container}>
      <Text>Cat Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
