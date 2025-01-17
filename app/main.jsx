import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import DemoApi from '../components/DemoApi';
import Login from '../components/Login';
export default function MainScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
    
    <Login />

      {/* <Button title="Go Back to Home" onPress={() => router.push("/")} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",

  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
