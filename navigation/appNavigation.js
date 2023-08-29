import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Onboarding from "../screens/onboarding";
import LoginScreen from "../screens/loginScreen";



export default function Navigation(){
    const Stack =createNativeStackNavigator();
    return(
       
        <NavigationContainer>

         <Stack.Navigator initialRouteName="Onboarding">

            <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>


         </Stack.Navigator>



        </NavigationContainer>
    

    )
}