import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import { useSelector } from 'react-redux';
import DashboardScreen from '@app/screens/dashboard/dashboard-screen';
import BookedScreen from '@app/screens/booked-screen';
import LoginScreen from '@app/screens/login/login-screen';
import { RootState } from '@app/redux/store';
import { RootStackParamList } from '@app/types/root-stack-param';
import { TabParamList } from '@app/types/tab-param';


const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
                navigationState={state}
                safeAreaInsets={insets}
                onTabPress={({ route, preventDefault }) => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (event.defaultPrevented) {
                        preventDefault();
                    } else {
                        navigation.dispatch({
                            ...CommonActions.navigate(route.name, route.params),
                            target: state.key,
                        });
                    }
                }}
                renderIcon={({ route, focused, color }) => {
                    const { options } = descriptors[route.key];
                    if (options.tabBarIcon) {
                        return options.tabBarIcon({ focused, color, size: 24 });
                    }

                    return null;
                }}
                getLabelText={({ route }) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? String(options.tabBarLabel)
                            : options.title !== undefined
                                ? String(options.title)
                                : route.name;

                    return label;
                }}

            />
        )}
    >
        <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
                tabBarLabel: 'Dashboard',
            }}
        />
        <Tab.Screen
            name="Booked"
            component={BookedScreen}
            options={{
                tabBarLabel: 'Booked',
            }}
        />
    </Tab.Navigator>
);

const AppNavigation: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <Stack.Screen name="Main" component={TabNavigator} />
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={() => <LoginScreen />}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
