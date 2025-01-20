import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import DemoApi from '../components/DemoApi';
import Login from '../components/Login';
import TodoApp from "../components/TodoApp";
import Weather from "../components/weatherApp/Weather";

export default function MainScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
    
    {/* <Login /> */}
    {/* <DemoApi /> */}
    {/* <TodoApp /> */}
    <Weather />

      <Button title="Go Back to Home" onPress={() => router.push("/")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: "center",
    alignItems: "center",

  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
