import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/home/home";
import { AppWrapper } from "./components/app-wrapper";
import { RegisterStudent } from "./components/register-components/register-student";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppWrapper>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterStudent" component={RegisterStudent} />
      </Stack.Navigator>
    </AppWrapper>
  );
}
