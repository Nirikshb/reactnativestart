import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TextInput,
    SafeAreaView,
    Switch,
  } from "react-native";
  
  import React, { useEffect, useState } from "react";
  const Login = () => {
    const [name, setName] = useState();
    const [isDark, setisDark] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeHolder="email@email.com"
          autoCorrect={false}
          autoCapitalize="none"
          // secureTextEntry
          // keyboardType="numeric"
        />
        <TextInput
          style={(styles.input, styles.multiline)}
          placeHolder="message"
          multiline
          // secureTextEntry
          // keyboardType="numeric"
        />
        <Text styles={styles.text}> My name is {name} </Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Dark Mode </Text>
  
          <Switch
            value={isDark}
            onValueChange={() => {
              setisDark((isPrevious) => !isPrevious);
            }}
            trackColor={{false : "#767577" , true : 'lightblue'}}
            thumbColor="#f4f3f4"
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "ffff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: StatusBar.currentHeight,
    },
    input: {
      height: 40,
      margin: 12,
      padding: 12,
      width: 250,
      borderWidth: 1,
    },
    text: {
      fontSize: 30,
      padding: 10,
    },
    multiline: {
      fontSize: 30,
      padding: 10,
      width: 250,
      minHeight: 100,
      borderWidth: 1,
      textAlignVertical: "top",
    },
    switchContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
    },
  });
  