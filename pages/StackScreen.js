import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function StackScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Esta é a tela do Stack Navigation</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Tabs Navigation")}>
                <Text style={styles.buttonText}>Ir para Tabs</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "salmon",
        padding: 20,
        gap: 15,
    },
    button: {
        backgroundColor: "green",
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    text: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
    }
});
