import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Colors} from "../../config/constants";
import HomeScreen from "../../screens/Home/HomeScreen";
import {Ionicons} from "@expo/vector-icons";
import SettingsScreen from "../../screens/Settings/SettingsScreen";

const TabStack = createBottomTabNavigator()

export default function TabNavigation() {
    return <TabStack.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.accent
        }}
    >
        <TabStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => <Ionicons name="home" color={color} size={24} />
            }}
        />
        <TabStack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                tabBarIcon: ({color}) => <Ionicons name="settings" color={color} size={24}/>,
                title: "Settings"
            }}
        />
    </TabStack.Navigator>
}