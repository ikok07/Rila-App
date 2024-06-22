import {useEffect} from "react";
import {parse, useURL} from "expo-linking";
import {createStackNavigator} from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator()

export default function MiddlewareNavigation() {
    const url= useURL()

    useEffect(() => {
        async function manageUrl() {
            if (url) {
                const {hostname, path} = parse(url)
                switch (hostname) {
                    case "":
                        break
                }
            }
        }

        manageUrl()
    }, [url]);

    // if (isLoading) return <FullscreenLoader />


    // if (error && error.data?.identifier !== "NotFound") return <>
    //     <ErrorComponent
    //         heading={"Server connection error"}
    //         subheading={"Connection to the server couldn't be established"}
    //         onReload={refetch}
    //     />
    // </>

    return <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="MainTab" component={TabNavigation} options={{detachPreviousScreen: true}} />
    </Stack.Navigator>
}