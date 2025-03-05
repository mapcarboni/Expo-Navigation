import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabScreen from "../pages/TabScreen";
import Tab2 from "../pages/Tab2";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Tab Screen">
            <Tab.Screen name="Tab Screen" component={TabScreen} />
            <Tab.Screen name="Tab2" component={Tab2} />
        </Tab.Navigator>
    );
}
