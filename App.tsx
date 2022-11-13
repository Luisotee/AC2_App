import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/home/home";
import { AppWrapper } from "./components/app-wrapper";
import { RegisterStudent } from "./components/register-components/register-student";
import { ToggleDarkMode } from "./components/cards/dark-mode";
import { RegisterSubject } from "./components/register-components/register-subject";
import { RegisterTeacher } from "./components/register-components/register-teacher";
import { RegisterClass } from "./components/register-components/register-class";
import { RegisterHistory } from "./components/register-components/register-history";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppWrapper>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterStudent" component={RegisterStudent} />
        <Stack.Screen name="ToggleDarkMode" component={ToggleDarkMode} />
        <Stack.Screen name="RegisterSubject" component={RegisterSubject} />
        <Stack.Screen name="RegisterTeacher" component={RegisterTeacher} />
        <Stack.Screen name="RegisterClass" component={RegisterClass} />
        <Stack.Screen name="RegisterHistory" component={RegisterHistory} />
      </Stack.Navigator>
    </AppWrapper>
  );
}
