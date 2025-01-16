import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";

const Pdp = () => {
    const [productData, setProductData] = useState(null);

    const getPdp = async () => {
        try {
            const res = await fetch(
                ""
            );
            const json = await res.json();
            
            // Check if the data exists and set it to state
            if (json.success) {
                setProductData(json.data);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getPdp();
    }, []);

    if (!productData) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{productData.product_name}</Text>

            {/* Display product image */}
            <Image 
                source={{ uri: `https://path_to_image_folder/${productData.image_fsku}.jpg` }} 
                style={styles.productImage}
            />

            <Text style={styles.description}>{productData.short_desc || 'No description available'}</Text>

            <View style={styles.detailsContainer}>
                <Text style={styles.price}>Price: ${productData.price}</Text>
                <Text style={styles.metal}>Metal: {productData.metal}</Text>
                <Text style={styles.category}>Category: {productData.category}</Text>
                <Text style={styles.size}>Width: {productData.min_width} - {productData.max_width} mm</Text>
                <Text style={styles.discount}>Discount: {productData.discount_label}% off</Text>
            </View>

            <Text style={styles.id}>Product ID: {productData.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    productImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        color: "#666",
    },
    detailsContainer: {
        marginTop: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    metal: {
        fontSize: 16,
        color: '#333',
    },
    category: {
        fontSize: 16,
        color: '#333',
    },
    size: {
        fontSize: 16,
        color: '#333',
    },
    discount: {
        fontSize: 16,
        color: '#333',
    },
    id: {
        fontSize: 16,
        color: '#333',
        marginTop: 20,
    },
});

export default Pdp;
