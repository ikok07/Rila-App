import { createNativeStackNavigator } from "@react-navigation/native-stack"
import VolunteerMainScreen from "../../screens/Volunteer/VolunteerMainScreen"
import { Colors } from "../../config/constants"
import VolunteerApplyScreen from "../../screens/Volunteer/VolunteerApplyScreen";

const Stack = createNativeStackNavigator()

export default function VolunteerNavigation() {
    return <Stack.Navigator
        screenOptions={{
            contentStyle: {backgroundColor: Colors.bg}
        }}
    >
        <Stack.Screen name="VolunteerScreen" component={VolunteerMainScreen} options={{
            title: "Стани доброволец"
        }} />
        <Stack.Screen name="VolunteerApplyScreen" component={VolunteerApplyScreen} options={{
            title: "Стани доброволец"
        }} />
    </Stack.Navigator>
}