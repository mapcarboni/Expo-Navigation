import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mobile from "../pages/Mobile";
import Profile from "../pages/Profile";
import TabsScreen from "../pages/TabsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tabs Home" component={TabsScreen} />
            <Tab.Screen name="Mobile" component={Mobile} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
