import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MainNavigation from "./components/Navigation/MainNavigation";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from "./store/store";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import ToasterMessage from "./components/ui/ToasterMessage";

export default function App() {
  return <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView>
        <Provider store={store}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
          <ToasterMessage type="success" text={"Message text"}/>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaView>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
