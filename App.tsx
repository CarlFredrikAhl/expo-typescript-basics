import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Texted pressed");
  }
  
  return (
    <View style={styles.container}>
      <Button title="Click me" onPress={() => Alert.alert("Title", "Message",
      [{text: "Yes", onPress: () => alert("Pressed yes")}, 
      {text:"No", onPress: () => alert("Pressed no")}])}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
