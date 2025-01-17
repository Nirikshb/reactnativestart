import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import DemoApi from '../components/DemoApi';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Dummy Home Page
      </Text>
      <Button title="Go to Main Page" onPress={() => router.push("/main")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
