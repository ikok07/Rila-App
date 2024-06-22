import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Colors} from "../../config/constants";
import HomeScreen from "../../screens/Home/HomeScreen";
import {MaterialIcons, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import SettingsScreen from "../../screens/Settings/SettingsScreen";
import VolunteerNavigation from "../../components/Navigation/VolunteerNavigation"
import TipsNavigation from "./TipsNavigation";

const TabStack = createBottomTabNavigator()

export default function TabNavigation() {
    return <TabStack.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.accent,
        }}
        initialRouteName="Volunteer"
    >
        <TabStack.Screen
            name="Signals"
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => <MaterialIcons name="sos" color={color} size={22} />,
                title: "Сигнали"
            }}
        />
        <TabStack.Screen
            name="VolunteerTab"
            component={VolunteerNavigation}
            options={{
                tabBarIcon: ({color}) => <MaterialIcons name="volunteer-activism" color={color} size={22} />,
                title: "Доброволец"
            }}
        />
        <TabStack.Screen
            name="Assistant"
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => <MaterialCommunityIcons name="robot-excited" color={color} size={22} />,
                title: "Асистент"
            }}
        />
        <TabStack.Screen
            name="TipsTab"
            component={TipsNavigation}
            options={{
                tabBarIcon: ({color}) => <MaterialIcons name="info" color={color} size={22} />,
                title: "Съвети"
            }}
        />
        <TabStack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                tabBarIcon: ({color}) => <Ionicons name="settings" color={color} size={22}/>,
                title: "Settings"
            }}
        />
    </TabStack.Navigator>
}