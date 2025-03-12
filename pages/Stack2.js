import React from "react"; // Importa a biblioteca React
import { View, Text } from "react-native"; // Importa os componentes View e Text da biblioteca react-native

export default function Stack2() {
    return (
        // Renderiza um componente View com os estilos definidos
        <View style={styles.container}>
            {/* Renderiza um componente Text com o estilo title */}
            <Text style={styles.title}>Página Stack</Text>
        </View>
    );
}

// Define os estilos utilizados no componente
const styles = {
    container: {
        flex: 1, // O componente ocupa todo o espaço disponível
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "lightblue", // Define a cor de fundo como azul claro
    },
    title: {
        fontSize: 30, // Define o tamanho da fonte como 30
    },
};
