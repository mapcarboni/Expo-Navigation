import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import DrawerScreen from "../pages/DrawerScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home usando Drawer" component={DrawerScreen} />
            <Drawer.Screen name="Go to Stack Navigation" component={StackNavigator} />
        </Drawer.Navigator>
    );
}
