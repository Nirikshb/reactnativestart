import { View, Text, StyleSheet, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import WeatherApi from './WeatherApi';

const Weather = () => {
	const [searchLat, setSearchLat] = useState('');
	const [searchLong, setSearchLong] = useState('');
	const [triggerApi, setTriggerApi] = useState(false);  // Flag to trigger API call in child

	const onSearchCity = () => {
		setSearchLat(searchLat);
		setSearchLong(searchLong);
    // setChildFunction();

		// setSearchLat(searchLat)
		// console.log('====================================', searchCity);
		// Alert.alert('City Searched');
		// console.log('search city');
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Weather App</Text>

			<View style={styles.mainContainer}>
				<Text style={styles.label}>Search City</Text>

				<TextInput
					style={styles.input}
					value={searchLat}
					onChangeText={setSearchLat}
					placeholder="Search City"
				/>

				<TextInput
					style={styles.input}
					value={searchLong}
					onChangeText={setSearchLong}
					placeholder="Search City"
				/>

				<Pressable style={styles.press} onPress={onSearchCity}>
					<Text style={styles.pressText}>Search City!</Text>
				</Pressable>
			</View>

			<ScrollView>
				<WeatherApi searchLat={searchLat}
					searchLong={searchLong}
					triggerApi={triggerApi}
				/>
			</ScrollView>
		</View>
	);
};

export default Weather;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		fontSize: 45,
		fontStyle: 'italic',
		fontWeight: 500,
		textAlign: 'center'
	},
	mainContainer: {
		flex: 1
		// marginBottom : 30
	},
	input: {
		borderBlockColor: 'black',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 4,
		width: 250,
		height: 50
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
		marginTop: 16,
		fontWeight: 'bold',
		color: 'black',
		marginTop: 20
	},
	press: {
		marginTop: 20,
		fontSize: 16,
		fontWeight: 500,
		color: 'black',
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 8,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	pressText: {
		textAlign: 'center',
		paddingVertical: 10,
		paddingHorizontal: 5
	}
});
