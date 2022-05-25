import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Custom Components
import HeaderButton from './components/HeaderButton';
import { Icreate, Ilist, Iwatch, Isettings } from './components/Icons'

// Screens
import { LogIn } from './screens/AuthScreen'
import HomeScreen from './screens/HomeScreen';
import TrackerScreen from './screens/TrackerScreen';
import CreateHabit from './screens/CreateHabit';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Auth' component={LogIn} options={{headerShown: false}} />
      <Stack.Screen name='SingIn' component={LogIn} options={{headerShown: false}} />
    </Stack.Navigator>

  )
}


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Habits',
          headerRight: () =>
            <HeaderButton
              icon={Icreate}
              screen='Create' />,
        }}
      />
      <Stack.Screen
        name='Create'
        component={CreateHabit}
        options={{
          title: 'New',
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  )
}

const TrackerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tracker' component={TrackerScreen} />
    </Stack.Navigator>
  )
}

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='HomeTab'
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => Ilist
        }}
      />
      <Tab.Screen
        name='TrackerTab'
        component={TrackerStack}
        options={{
          headerShown: false,
          tabBarIcon: () => Iwatch
        }}
      />
      <Tab.Screen
        name='SettingsTab'
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarIcon: () => Isettings
        }}
      />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='AuthMain' component={AuthStack} options={{headerShown: false}}/>
        <Stack.Screen name='TabMain' component={Main} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
