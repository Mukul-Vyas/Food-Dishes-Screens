import {View,Text,TouchableOpacity} from "react-native"
import { useState } from "react";





export default function Sections({name}){
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
      setIsPressed(!isPressed);
    };

    const containerStyle = {
        borderColor: isPressed ? 'orange' : 'grey',
      };
    
      const textStyle = {
        color: isPressed ? 'orange' : 'grey',
      };
    return(

        <View>
           
            
            <TouchableOpacity onPress={handlePress} style={containerStyle}
             className="mt-20 ml-2 rounded-full border border-slate-300  h-7 w-24 flex items-center justify-center">
            <Text style={textStyle} className=" text-slate-400 ">{name}</Text>
            
            </TouchableOpacity>
            
 

        </View>

    )
}