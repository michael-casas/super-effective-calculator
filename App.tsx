import { StyleSheet, Text, View } from 'react-native';
import Colors from "./assets/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { 
    fontSize: 30,
    color: Colors.text,
  }
});
