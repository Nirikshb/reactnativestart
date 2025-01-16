import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import {Link } from "expo-router";

const DemoApi = () => {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        ""
      );
      const json = await response.json();
      setData(json.data?.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: item.metals[0].images.front }}
        style={styles.image}
      />
      <Text style={styles.textline}>{item.title}</Text>
      {/* <Text>Product Name: {item.metals[0].carats[0].product_name}</Text> */}
      <Text style={styles.textline}>MRP: {item.metals[0].carats[0].mrp}</Text>
      <Text style={styles.strike}>{item.metals[0].carats[0].price}</Text>
      <Link style={styles.strike} href='/pdp/1'>A</Link>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccc",
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",

    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  strike: {
    textDecorationLine: "line-through",
  },
  row: {
    // justifyContent: 'space-between',
  },
  textline: {
    marginBottom: 4,
  },
});

export default DemoApi;
