import { createNativeStackNavigator } from "@react-navigation/native-stack"
import VolunteerMainScreen from "../../screens/Volunteer/VolunteerMainScreen"
import { Colors } from "../../config/constants"
import VolunteerApplyScreen from "../../screens/Volunteer/VolunteerApplyScreen";
import {useGetVolunteerQuery} from "../../store/slices/volunteerUser";
import {FullscreenLoader} from "../ui/FullscreenLoader";
import ErrorComponent from "../ui/ErrorComponent";
import VolunteerHubScreen from "../../screens/Volunteer/VolunteerHubScreen";
import VolunteerEventDetailsScreen from "../Volunteer/VolunteerEventDetailsScreen";

const Stack = createNativeStackNavigator()

export default function VolunteerNavigation() {

    const {data: volunteerUser, isLoading, error} = useGetVolunteerQuery()

    if (isLoading) return <FullscreenLoader />

    if (error && error?.data.identifier !== "NotFound") return <ErrorComponent
        heading="Възникна грешка"
        subheading="Не може да се осъществи връзка със сървъра"
    />

    return <Stack.Navigator
        screenOptions={{
            contentStyle: {backgroundColor: Colors.bg}
        }}
    >
        {volunteerUser && <>
            <Stack.Screen name="VolunteerHubScreen" component={VolunteerHubScreen}  options={{
                title: "Доброволческа програма",
                headerShown: false
            }}/>
            <Stack.Screen name="VolunteerEventDetails" component={VolunteerEventDetailsScreen}  options={{
                title: "Детайли за дейност",
            }}/>
        </> }
        {!volunteerUser && <>
            <Stack.Screen name="VolunteerScreen" component={VolunteerMainScreen} options={{
                title: "Стани доброволец"
            }} />
            <Stack.Screen name="VolunteerApplyScreen" component={VolunteerApplyScreen} options={{
                title: "Стани доброволец"
            }} />
        </>}
    </Stack.Navigator>
}