import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Description from "../screens/Description";
import { Provider } from 'react-redux';
import store from "../redux/store";

export default function Navigation(){
    const Stack =createNativeStackNavigator();
    return(
        <Provider store={store}>
        <NavigationContainer>

         <Stack.Navigator initialRouteName="Home">

            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Description" component={Description} options={{headerShown:false}}/>
          


         </Stack.Navigator>



        </NavigationContainer>
        </Provider>

    )
}