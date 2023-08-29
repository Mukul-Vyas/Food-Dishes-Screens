import { View,Text, Image, useWindowDimensions} from "react-native"


export default function OnboardingItem({item}){
  
    const {width}=useWindowDimensions();

    return(
       
        <View>

           <View style={width}>

         <Text style={{fontWeight:800, fontSize:36, marginBottom:2, color:"#000000", width:370 , marginLeft:13, marginRight:13}}>{item.title}</Text>

        <Text style={{fontWeight:600, fontSize:21, marginBottom:2, color:"#62656b", width:350, marginLeft:13, marginRight:13}}>{item.description}</Text>

          </View>

        <View style={[{flex:1,justifyContent:"center", alignItems:"center" , marginTop:15},{width}]} >

           
           <Image source={item.image}  style={[{flex:1, justifyContent:'center', alignItems:"center", height:320 , width:320, },{ resizeMode:'contain'}]}  />
           
               
        </View>

        </View>
    )
}