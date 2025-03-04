import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Esta é a tela do Tab Navigation</Text>
            <Text style={styles.paragraph}>Aqui você pode navegar entre as abas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
        gap: 20,
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
    },
    paragraph: {
        fontSize: 18,
        textAlign: "justify",
    },
});
