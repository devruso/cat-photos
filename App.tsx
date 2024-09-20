import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <View>
        <Text>This is my first app</Text>
      </View>
      <TouchableOpacity style={styles.viewStyle} onPress={()=>console.log('hello world!')}>
        <Text>Button</Text>
      </TouchableOpacity>
      <Button title='Very nice' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewStyle:{
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 100,
    height: 50,
  }
});
