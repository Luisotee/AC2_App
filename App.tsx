import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Menu } from "./components/Menu/Menu";
import { AppWrapper } from "./components/app-wrapper";
import { RegisterStudent } from "./components/register-components/register-student";
import { ToggleDarkMode } from "./components/cards/dark-mode";
import { RegisterSubject } from "./components/register-components/register-subject";
import { RegisterTeacher } from "./components/register-components/register-teacher";
import { RegisterClass } from "./components/register-components/register-class";
import { RegisterHistory } from "./components/register-components/register-history";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./components/home/home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabsNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Settings" component={ToggleDarkMode} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AppWrapper>
      <Stack.Navigator initialRouteName="TabsNav">
        <Stack.Screen
          name="TabsNav"
          component={TabsNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="RegisterStudent" component={RegisterStudent} />
        <Stack.Screen name="RegisterSubject" component={RegisterSubject} />
        <Stack.Screen name="RegisterTeacher" component={RegisterTeacher} />
        <Stack.Screen name="RegisterClass" component={RegisterClass} />
        <Stack.Screen name="RegisterHistory" component={RegisterHistory} />
      </Stack.Navigator>
    </AppWrapper>
  );
}
