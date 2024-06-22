import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Colors} from "../../config/constants";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserToken} from "../../store/slices/appVariables";
import {getLocales} from "react-native-localize";
import {FullscreenLoader} from "../ui/FullscreenLoader";
import TabNavigation from "./TabNavigation";
import MiddlewareNavigation from "./MiddlewareNavigation";
import useJwt from "../../hooks/jwt/useJwt";
import useAppVariables from "../../hooks/useAppVariables";

const Stack = createNativeStackNavigator()

export default function MainNavigation()  {
    const dispatch = useDispatch()
    const {token, error} = useJwt()
    
    useEffect(() => {
        async function updateToken() {
            if (!error) dispatch(setUserToken(token))
        }
        updateToken()
    }, []);

    return <Stack.Navigator
        screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: Colors.bg}
        }}
    >
        <Stack.Screen name="Middleware" component={MiddlewareNavigation} />
    </Stack.Navigator>
}