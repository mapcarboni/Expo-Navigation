import React from "react"; // Importa a biblioteca React
import { View, Button, StyleSheet } from "react-native"; // Importa componentes e funções do React Native

export default function StackScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Exibe um botão que, ao ser pressionado, navega para a tela "Stack 2" */}
            <Button title="Ir para Stack" onPress={() => navigation.navigate("Stack 2")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Faz com que a View ocupe todo o espaço disponível
        justifyContent: "center", // Centraliza os filhos verticalmente
        alignItems: "center", // Centraliza os filhos horizontalmente
    },
});
