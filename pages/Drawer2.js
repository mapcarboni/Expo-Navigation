import React from "react"; // Importa a biblioteca React
import { View } from "react-native"; // Importa o componente View da biblioteca react-native

export default function Drawer2() {
    return (
        <View style={styles.container}></View> // Retorna um componente View com o estilo definido em styles.
    );
}

const styles = {
    container: {
        flex: 1, // Faz com que o componente ocupe todo o espaço disponível
        justifyContent: "center", // Centraliza o conteúdo verticalmente
        alignItems: "center", // Centraliza o conteúdo horizontalmente
        backgroundColor: "yellow", // Define a cor de fundo como amarelo
    },
    title: {
        fontSize: 30, // Define o tamanho da fonte como 30
    },
};
