import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';

const DemoApi = () => {
	const [storeIt, setStoreIt] = useState([]);
	useEffect(() => {
		getIt();
	}, []);
	const getIt = () => {
		const url = 'https://fakestoreapi.com/products';
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStoreIt(data);
				// console.log('====================================');
				// console.log(data);
				// console.log('====================================');
			})
			.catch((err) => {
				console.log(err, 'err');
			});
	};

	return (
		<View>
			<Text>My Api Call</Text>
			<FlatList
				data={storeIt}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View key={item.id} style={styles.cardContainer}>
						<Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
						<Text style={styles.title} numberOfLines={2}>Name: {item.title}</Text>
						<Text style={styles.price}>Price: ${item.price}</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default DemoApi;

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: '#c4c4c4',
		borderRadius: 10,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0.2 },
		shadowOpacity: 0.2
	},
	image: {
		width: 150,
		height: 150,
		marginBottom: 10
	},
	errorStyle: {
		color: 'red',
		fontSize: 18
	},
	title : {
		textAlign : 'center',
		
	}
});
