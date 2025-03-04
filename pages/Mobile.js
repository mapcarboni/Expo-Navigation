import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Mobile({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mobile Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details")}>
                <Text style={styles.buttonText}>Go to Details</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
    button: {
        backgroundColor: "blue",
        padding: 14,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});
