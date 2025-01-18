import {
	View,
	Text,
	StatusBar,
	StyleSheet,
	TextInput,
	SafeAreaView,
	KeyboardAvoidingView,
	Platform,
	Switch,
	Button,
	Alert
} from 'react-native';
import React, { useEffect, useState } from 'react';

const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	const onSubmit = () => {
		Alert.alert('Latest Alert');
	};

	const validateForm = () => {
		let errors = {};
		if (!userName) {
			errors.userName = 'user name required';
		}
		if (!password) {
			errors.password = 'password name required';
		}

		setErrors(errors);

		return Object.keys(errors)?.length === 0;
	};

	const handleSubmit = () => {
		if (validateForm()) {
			console.log('submit', 'userName');
			setUserName('');
			setPassword('');
			setErrors({});
		}
	};
	return (
		<KeyboardAvoidingView
			behavior="padding"
			keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
			style={styles.container}
		>
			<View style={styles.form}>
				<Text style={styles.loginT}> My Login Form </Text>
				<Text style={styles.label}>UserName</Text>
				<TextInput
					style={styles.input}
					placeHolder="Enter Your Username"
					value={userName}
					onChangeText={setUserName}
				></TextInput>
				{errors.userName ? <Text style={styles.errorText}>{errors.userName}</Text> : null}
				<Text style={styles.username}>{userName}</Text>
				<Text style={styles.label}>Password</Text>
				<TextInput
					style={styles.input}
					placeHolder="Enter Your Password"
					secureTextEntry
					value={setPassword}
				></TextInput>
				{errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
				<Button title="Submit" onPress={handleSubmit}></Button>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		backgroundColor: 'white',
		backgroundColor: 'rgba(140, 26, 255, 0.62)'
	},
	form: {
		// width: 100,
		// height: 70,
		// padding: 80,
		backgroundColor: 'rgba(195, 255, 14, 0.62)',
		shadowColor: '#000',
		shadowOffset: {
			width: -26,
			height: -14
		},
		shadowOpacity: 0.62,
		shadowRadius: 20,
		elevation: 8
	},

	label: {
		fontSize: 16,
		marginBottom: 5,
		marginTop: 16,
		fontWeight: 'bold',
		color: 'white'
	},
	loginT: {
		fontSize: 52,
		color: 'white',
		marginBottom: 20,
		fontFamily: 'Lato',
		fontWeight: 400,
		textAlign: 'center'
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		borderBlockColor: 'white',
		padding: 10,
		width: 250
	},
	username: {
		color: 'white',
		fontSize: 16,
		marginBottom: 5,
		fontWeight: 'bold'
	},
	errorText: {
		fontSize: 16,
		marginBottom: 5,
		fontWeight: 'bold',
		color: 'red'
	}
});
