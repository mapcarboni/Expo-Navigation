import React from "react"; // Importa a biblioteca React
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa a função para criar um stack navigator nativo
import StackScreen from "../pages/StackScreen"; // Importa o componente StackScreen
import Stack2 from "../pages/Stack2"; // Importa o componente Stack2

const Stack = createNativeStackNavigator(); // Cria uma instância do stack navigator

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Stack Screen">
            <Stack.Screen name="Stack Screen" component={StackScreen} /> 
            <Stack.Screen name="Stack 2" component={Stack2} />
        </Stack.Navigator>
    );
}
