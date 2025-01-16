import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Switch,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    Alert.alert("Latest Alert");
  };
  return (
    <View style={styles.container}>
      <View stlye={styles.form}>
        <Text> </Text>
        <Text style={styles.label}>UserName</Text>
        <TextInput
          style={styles.input}
          placeHolder="Enter Your Username"
          value={userName}
          onChangeText={setUserName}
        />
        <Text style={styles.username}>{userName}</Text>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeHolder="Enter Your Password"
          secureTextEntry
          value={setPassword}
        />

        <Button title="Submit" onPress={onSubmit}></Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  form: {
    backgroundColor: "black",
    borderBottomColor: "black",
    borderColor: "orange",
    padding: 20,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 100,
      height: 2,
    },
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },
  username: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
});
