import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import TabNavigator from "./TabNavigator";
import Details from "../pages/Details";
import StackScreen from "../pages/StackScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Stack Home"
                component={StackScreen}
                options={{
                    headerLeft: () => <Button title="Menu" onPress={() => navigation.openDrawer()} />,
                }}
            />
            <Stack.Screen name="Tabs Navigation" component={TabNavigator} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
}
