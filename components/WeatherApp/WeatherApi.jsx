import {
	Alert,
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	FlatList,
	ScrollView
} from 'react-native';
import React, { useState, useEffect } from 'react';

const WeatherApi = ({ registerFunction, ...props }) => {
	console.log(registerFunction, 'fetchWeather');

	const [weather, setWeather] = useState(null);

	const API_URL =
		// 'https://api.openweathermap.org/data/2.5/weather?lat=19.0760&lon=72.8777&appid=0fb50a5969db8bc052b18a71aa77d567';
		`https://api.openweathermap.org/data/2.5/weather?lat=${props?.searchLat}&lon=${props?.searchLong}&appid=0fb50a5969db8bc052b18a71aa77d567`;

	useEffect(() => {
		fetchWeather();
	}, []);

	const fetchWeather = async () => {
		try {
			const response = await fetch(API_URL);
			const data = await response.json();
			setWeather(data);
			console.log(data, 'Fetched Weather Data');
		} catch (error) {
			console.error(error, 'Error fetching weather data');
		}
	};

	if (!weather) {
		return (
			<View style={styles.container}>
				<Text>Loading Weather Data...</Text>
			</View>
		);
	}

	return (
		<ScrollView style={styles.container}>
			{/* <Text>{props.searchLat}</Text>
			<Text>{props.searchLong}</Text> */}
			<Text style={styles.header}>Weather Data</Text>
			{/* <Text>{weather && <Text>WEATHER DATA CHECK</Text>}</Text> */}
			{weather ? (
				<View>
					<Text style={styles.item}>Name: {weather?.name || 'N/A'}</Text>
					<Text style={styles.item}>Country: {weather?.sys?.country || 'N/A'}</Text>
					<Text style={styles.item}>Temperature: {weather?.main?.temp || 'N/A'} K</Text>
					<Text style={styles.item}>Feels Like: {weather?.main?.feels_like || 'N/A'} K</Text>
					<Text style={styles.item}>Weather: {weather?.weather?.[0]?.description || 'N/A'}</Text>
					<Text style={styles.item}>Visibility: {weather?.visibility || 'N/A'} meters</Text>
					<Text style={styles.item}>Wind Speed: {weather?.wind?.speed || 'N/A'} m/s</Text>
				</View>
			) : (
				<Text>No Value Found</Text>
			)}
		</ScrollView>
	);
};

export default WeatherApi;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#f5f5f5'
	},
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20
	},
	item: {
		fontSize: 16,
		marginBottom: 10
	}
});
