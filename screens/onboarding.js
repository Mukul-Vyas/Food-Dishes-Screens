import { View,Text, FlatList, TouchableOpacity, useWindowDimensions} from "react-native"
import slides from "../constants/slides"
import { Octicons } from '@expo/vector-icons';
import OnboardingItem from "../components/onboardingItem"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";



export default function Onboarding(){


    const {width}=useWindowDimensions();
    const [currentIndex, setCurrentIndex]=useState(0);

    const navigation=useNavigation();
    
    
    return(
         
        <View className="h-full">

        <View style={{height:260, width:260 , backgroundColor:"#5FC1FF", borderRadius:200, position:"absolute",marginLeft:-53, marginTop:-70 ,opacity:0.1 }}></View>

<View style={[{flex:1,justifyContent:"center", alignItems:"center"},{width}]}>
<View style={{height:53, width:53, borderRadius:30, marginTop:-50, alignItems:"center", justifyContent:"center", backgroundColor: "#86e3fc"}} >
 <Octicons name="home" size={25} color="black" />
 </View>

 </View>

        <View style={{flex:3}}>
           
           <FlatList data={slides}
            renderItem={({item})=> <OnboardingItem item={item}/>}
            keyExtractor={item=>item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onScroll={e=>{
                const x=e.nativeEvent.contentOffset.x
                setCurrentIndex((x/width).toFixed(0));
            }}
           
           />

          </View>

          
          <View style={{flexDirection:"row", justifyContent:"center",marginTop:25, width:width, alignItems:"center" , gap:5}}>
              
              {
                slides.map((item,index)=>{
                    return(
                        <View key={item.id} style={{width:12, height:12, borderRadius:7,backgroundColor:currentIndex==index?'black':'#D3D3D3', marginLeft:5}}>

                        </View>

                    )
                })
              }

          </View>

          <View style={[{flex:1,justifyContent:"center", alignItems:"center", marginTop:20},{width}]} >
               
               <TouchableOpacity onPress={()=>navigation.navigate("Login")}  style={{height:52, width:260, marginBottom:40 , borderRadius:30, justifyContent:"center", marginTop:10, backgroundColor: "#86e3fc", }} className=" shadow-lg shadow-gray-600" >
                   
                   <Text style={{textAlign:"center" , fontWeight:700, fontSize:22}}>Let's Explore</Text>
                   
              </TouchableOpacity>  

              </View>

        </View>
    )
}