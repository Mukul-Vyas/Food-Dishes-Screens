import { View,Text, TouchableOpacity, Image} from "react-native"
import {ChevronLeftIcon} from "react-native-heroicons/outline"
import {StarIcon} from "react-native-heroicons/solid"
import Icon from 'react-native-vector-icons/AntDesign'
import {ClockIcon} from "react-native-heroicons/outline"
import {useNavigation} from "@react-navigation/native"


export default function Description(){
    const navigation=useNavigation();
    return(
        <View className=" bg-white h-full">

        <View className="flex-row">
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <ChevronLeftIcon size="24" color="black" style={{marginTop:50, position:"absolute" , marginLeft:8}} />
        </TouchableOpacity>
        <Text className="ml-5 mt-24 text-3xl font-black z-10">Masala Muglai</Text>

        <View className="bg-[#40d854] w-9 z-10 h-4 flex-row  items-center justify-center rounded mt-28 ml-2">
            <Text className="text-white text-xs z-10 ">4.2</Text>
            <StarIcon size="11" color="white"/>

        </View>
        <Image className="h-40 w-64 mt-40 ml-44 absolute rounded-lg z-0" source={{uri:"https://img.freepik.com/premium-photo/vegetables-fruits-white_55883-892.jpg"}}  />
         </View>

        <View className="ml-5 mr-36 mt-1">
        <Text style={{fontSize:11}} className="text-gray-400 font-normal text-left">Mughlai Masala is a style of cookery developed in the Indian Subcontinent 
        by the imperial kitchens of the Mughal Empire</Text>
        </View>

        <View className="flex-row mt-1">

          <ClockIcon size="25" color="black" style={{marginLeft:17, marginTop:30}}/>
               <Text className="mt-8 ml-2 font-bold">1 hour</Text>

        </View>

        <View>

        <Text className="mt-10 ml-5 text-xl font-bold">Ingredients</Text>
        <Text style={{fontSize:12}} className="text-gray-400 ml-5 mt-1 ">For 2 people</Text>

        </View>

        <View className="border-b border-slate-200 border-1 mt-4 mx-8 "></View>

        <View className="flex-row">

        <Text className="mt-5 ml-5 text-base font-bold">Vegetables (05) </Text>
        <Icon style={{marginTop:27, marginLeft:7}} name="caretdown" size={10} color="black" />
    
        </View>

        <View className="flex-row">

        <Text  className="mt-3 ml-5 text-sm font-normal">Cauliflower </Text>
        <Text style={{ marginLeft:242}} className="mt-3 text-sm font-normal">01 pc</Text>
        </View>

        <View className="flex-row">

        <Text  className="mt-1 ml-5 text-sm font-normal">Tomato </Text>
        <Text style={{ marginLeft:264}} className="mt-1 text-sm  font-normal">10 pc</Text>
        </View>

        <View className="flex-row">

        <Text className="mt-1 ml-5 text-sm font-normal">Spinach </Text>
        <Text style={{ marginLeft:256}} className="mt-1 ml-60 text-sm font-normal">1/2 kg</Text>
        </View>

        <View className="flex-row">

        <Text className="mt-5 ml-5 text-base font-bold">Spices (10) </Text>
        <Icon style={{marginTop:27, marginLeft:7}} name="caretdown" size={10} color="black" />
    
        </View>


        <View className="flex-row">

        <Text  className="mt-2 ml-5  text-sm font-normal">coriender</Text>
        <Text style={{ marginLeft:225}} className="mt-2 text-sm font-normal">100 grams</Text>
        </View>

        <View className="flex-row">

        <Text  className="mt-1 ml-5 text-sm font-normal">musturd oil</Text>
        <Text style={{ marginLeft:224}} className="mt-1 text-sm font-normal">1/2 liters</Text>
        </View>

        <View >

        <Text className="mt-5 ml-5 text-xl font-bold">Appliances</Text>
        
        <View className=" rounded-xl flex-row mt-4 h-24 ml-2">
        <Image className="h-18 w-11 ml-4" source={{uri:"https://img.freepik.com/premium-photo/3d-render-large-silver-refrigerator-isolated-one-white_771335-40116.jpg"}}/>
        <Image source={{uri:"https://img.freepik.com/premium-photo/3d-render-large-silver-refrigerator-isolated-one-white_771335-40116.jpg"}}
        className="h-18 w-11 ml-12"/>
        <Image source={{uri:"https://img.freepik.com/premium-photo/3d-render-large-silver-refrigerator-isolated-one-white_771335-40116.jpg"}}
        className="h-18 w-9 ml-12"/>
        </View>

          <View className="flex-row">
            <Text style={{fontSize:10}} className="ml-5 h-6 w-15  ">Refrigerator</Text>
            <Text style={{fontSize:10}} className="ml-10 w-15 ">Refrigerator</Text>
            <Text style={{fontSize:10}} className="ml-9 w-15 ">Refrigerator</Text>
            
            
            </View>
        

        </View>

        </View>
    )
}