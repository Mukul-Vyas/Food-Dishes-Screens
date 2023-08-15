import { View,Text, TouchableOpacity, ScrollView } from "react-native"
import {ChevronLeftIcon} from "react-native-heroicons/outline"
import {CalendarDaysIcon} from "react-native-heroicons/outline"
import Icon from 'react-native-vector-icons/AntDesign'
import {dishes, popularDishes, Categories} from "../constants/index"
import Featured from "../components/featuredRow"
import Alarm from "react-native-vector-icons/Ionicons"
import FastFood from "react-native-vector-icons/Ionicons"
import RightArrow from "react-native-vector-icons/AntDesign"
import PopularDishes from "../components/popularDishes"
import Sections from "../components/sections"
import { useSelector } from 'react-redux';

export default function Home(){
   
    const number = useSelector((state) => state.counter.number);


    return(

        <View className=" bg-white h-full">
            <View className="h-24 bg-white">
                <TouchableOpacity>
        <ChevronLeftIcon size="24" color="black" style={{marginTop:52, position:"absolute"}} />
        </TouchableOpacity>
     <Text className="ml-12 mt-12 text-xl font-bold">Select Dishes</Text>

            </View>

           <View className="h-12 bg-black  ">
          
          {/* //outer rounded View */}
           <View className="h-20 bg-white rounded-2xl mt-5 mx-6 shadow-2xl shadow-gray-500 ">
              
              {/* //contents of view */}
                <View style={{flexDirection:"row"}}>
               <CalendarDaysIcon size="25" color="black" style={{marginLeft:20, marginTop:30}}/>
               <Text className="mt-8 ml-2 font-bold">21 May 2023</Text>

               <Alarm name="alarm-outline" size={25} color="black" style={{marginLeft:30, marginTop:30}}/>
               <Text className="mt-8 ml-2 font-bold">10:30 Pm -12:30 Pm </Text>

               </View>
            
           </View>


           </View>
           
           <View className="flex-row">
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           
          {
          
          Categories.map((item,index)=>{
            return(
                <Sections
                key={index}
                name={item.name}
                />
            )
          })

          }

        </ScrollView>
            </View>
            
            

            <View>

           <Text className=" mt-4 ml-6 text-xl font-bold">Popular Dishes</Text>

            </View>
             
             <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-hidden">
              <View style={{flexDirection:"row"}} className="mb-20" >

                {
                 
              popularDishes.map((item,index)=>{
                return(
                    <PopularDishes
                        key={index}
                        name={item.name}
                        image={item.image}
                    />
                )
              })}
                        

            </View>
            </ScrollView>

            <View className="border-2 border-slate-100 mt-8"></View>


            <ScrollView>

            <View className="flex-row">

        <Text className="mt-5 ml-5 text-xl font-bold">Recommended </Text>
        <Icon style={{marginTop:27, marginLeft:7}} name="caretdown" size={15} color="black" />

         <TouchableOpacity className="bg-black ml-28 mt-5 rounded-lg w-20 h-7 flex items-center justify-center shadow-2xl shadow-gray-500">
         <Text className="text-white font-bold text-xs">Menu</Text>
         </TouchableOpacity>

         </View>

        {/* //dishes card */}
        
        
             <View>
              
              {
                dishes.map((item, index)=>{
                    return(
                        <Featured
                          key={index}
                          name={item.name}
                          rating={item.rating}
                          description={item.description}
                          image={item.image}
                        />
                    )
                })
              }


             </View>
        </ScrollView>
        
        
        <TouchableOpacity className="bg-black w-64 h-11 ml-16 bottom-7  absolute flex-row rounded-lg flex items-center justify-center shadow-2xl shadow-gray-500">
             <FastFood style={{marginRight:7}} name="fast-food-outline" size={20} color="white" />
                <Text className="text-white text-sm font-medium">{number} Food Items selected</Text>
                <RightArrow style={{marginLeft:45}} name="arrowright" size={20} color="white"/>
            </TouchableOpacity>
        
             

           

        </View>
    )
}