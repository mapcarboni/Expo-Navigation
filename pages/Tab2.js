import React from "react"; // Importa a biblioteca React
import { View, Text } from "react-native"; // Importa os componentes View e Text da biblioteca react-native

export default function Tab2() {
    return (
        <View style={styles.container}>
            { /* Exibe um texto com estilo title */ }
            <Text style={styles.title}>Página Tab 2</Text>
        </View>
    );
}

// Define os estilos utilizados no componente
const styles = {
    container: {
        flex: 1, // Faz a View ocupar todo o espaço disponível
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "purple", // Define a cor de fundo como roxa
    },
    title: {
        fontSize: 30, // Define o tamanho da fonte como 30
    },
};
