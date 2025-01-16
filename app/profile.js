import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
// import DemoApi from "../components/DemoApi";
import { Login } from "../components/Login";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Profile Screen will also take you to home page
      </Text>

      {/* <DemoApi /> */}
    {/* <Login /> */}

      <Text style={styles.padding}>Welcome To Profile </Text>
      <Button title="Go to Main Page" onPress={() => router.push("/main")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  padding: {
    marginTop: 20,
    marginBottom: 20,
  },
});
