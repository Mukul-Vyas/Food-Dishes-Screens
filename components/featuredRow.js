import React from "react"
import { Text,View, TouchableOpacity, Button } from "react-native"
import {ChevronRightIcon} from "react-native-heroicons/outline"
import { Image } from "react-native"
import Iconn from 'react-native-vector-icons/FontAwesome'
import Fridge from 'react-native-vector-icons/MaterialCommunityIcons'
import {StarIcon} from "react-native-heroicons/solid"
import { useDispatch } from 'react-redux';
import {useNavigation} from "@react-navigation/native"
import { increment } from '../redux/slices.js';




export default function Featured({name,rating,description,image}){

const navigation=useNavigation();

const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(increment());
  };

    return(
        <>
        <View>
        {/* //First row */}
       <View className="flex-row ml-5 mt-7">
           <Text className="font-bold text-lg">{name}</Text>

           <View className=" border-2 border-green-600 w-4 h-4 flex-row  items-center justify-center rounded-sm mt-2 ml-2">
       
       <Iconn  name="circle" size={5} color="green" />

          </View>
           
           <View className="bg-[#40d854] w-9 h-4 flex-row  items-center justify-center rounded mt-2 ml-4">
       <Text className="text-white text-xs">{rating}</Text>
       <StarIcon size="11" color="white"/>

          </View>

       </View>

  {/* //Second Row */}
       <View>

           <View className="mt-3 ml-7 flex-row absolute">
           <Fridge name="fridge-outline" size={20} color="black" />
           <View className="ml-7">
           <Fridge name="fridge-outline" size={20} color="black" />
           </View>
           
           <View className="border-r border-slate-200 ml-9 h-7 mt-1"></View>
          
           <Text style={{fontSize:12}} className="font-bold ml-5">Ingredients</Text>
        
            <TouchableOpacity onPress={()=>navigation.navigate("Description")} >
           <Text style={{fontSize:8, marginLeft:-60}} className=" font-normal text-orange-400 mt-4 w-10">View List</Text>
           </TouchableOpacity>
           
           <View style={{marginLeft:-6, marginTop:19}}><ChevronRightIcon size="6" color="orange"/></View> 
            
            <Image className="h-24 w-32 rounded-lg ml-9" source={{uri:image}} style={{marginTop:-35}} />
            
           </View>
          
           

           <View className="flex-row w-28">
            <Text style={{fontSize:7, marginBottom:-10}} className="ml-5 h-6 w-11 mt-9 ">Refrigerator</Text>
            <Text style={{fontSize:7}} className="ml-1 w-11 mt-9">Refrigerator</Text>
            
            </View>
            <TouchableOpacity onPress={handlePress} style={{ marginTop:60}} className="h-6 w-16 ml-72 bg-white absolute flex-row rounded-md border-2 border-orange-300 flex items-center justify-center">
        <Text className="text-orange-400 font-normal absolute ">Add</Text><Text style={{fontSize:10, marginTop:-7}} className="text-orange-400 w-2 ml-12">+</Text>
        </TouchableOpacity>
         
       </View>

       
       <Text style={{fontSize:12}} className="font-semibold text-slate-400 w-52 ml-5">{description}</Text>

       <View className="border-b border-slate-200 border-1 mt-6 mx-8 "></View>

       

   </View>

   
   </>
    )
}