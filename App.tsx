import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/home/home";
import { AppWrapper } from "./components/app-wrapper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppWrapper>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </AppWrapper>
  );
}
