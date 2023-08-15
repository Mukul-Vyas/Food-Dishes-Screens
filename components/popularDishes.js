import {View,Text,Image, TouchableOpacity} from "react-native"

export default function PopularDishes({name, image}){
    return(

        <View>
            

 {/* //Popular Dishes view */}
<TouchableOpacity>
 <View style={{height:75, width:75}} className="border-2 border-orange-300 rounded-full ml-2 mt-2 flex-row ">
     <Image source={{uri:image}} className="h-16 w-16 rounded-full ml-1 mt-1 bg-black opacity-50 absolute" />
     <Text style={{fontSize:12}} className="mt-7 ml-3 font-medium text-white ">{name}</Text>
    
 </View>
 </TouchableOpacity>

        </View>

    )
}