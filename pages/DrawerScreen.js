import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Esta é a tela principal do Drawer Navigation</Text>
            <Text style={styles.paragraph}>Você pode acessar o Stack Navigation pelo menu</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
        padding: 20,
        gap: 25,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    paragraph: {
        fontSize: 20,
        textAlign: "justify",
    },
});
