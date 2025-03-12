import React from "react"; // Importa a biblioteca React
import { View, Text } from "react-native"; // Importa os componentes View e Text da biblioteca react-native

export default function DrawerScreen() {
    return (
        // Retorna uma View com estilo container
        <View style={styles.container}>
            {/* Exibe um texto com estilo title */}
            <Text style={styles.title}>Página Drawer</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1, // Faz com que a View ocupe todo o espaço disponível
        justifyContent: "center", // Centraliza os filhos verticalmente
        alignItems: "center", // Centraliza os filhos horizontalmente
        backgroundColor: "lightgreen", // Define a cor de fundo como verde claro
    },
    title: {
        fontSize: 30, // Define o tamanho da fonte como 30
    },
};
