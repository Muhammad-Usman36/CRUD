import { View,Text,Button, TouchableOpacity } from "react-native";

export const Page1 =(navigation) => {
  return(
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
      <Text style={{color: 'black',fontWeight: 'bold'}}>
        page 2
      </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Page1;