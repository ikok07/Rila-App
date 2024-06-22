import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SettingsMainPage from "../../components/Settings/SettingsMainPage";
import {Colors} from "../../config/constants";

const Stack = createNativeStackNavigator()

export default function SettingsScreen() {
    return <Stack.Navigator
        screenOptions={{
            contentStyle: {backgroundColor: Colors.bg}
        }}
    >
        <Stack.Screen name="SettingsMain" component={SettingsMainPage} options={{title: "Settings"}} />
    </Stack.Navigator>
}