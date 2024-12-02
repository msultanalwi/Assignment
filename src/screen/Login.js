import React from "react"
import {View, Text, Image, Touchable, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"

const Login = ({navigation}) => {


return (
    <View style={{
               
        width: 350,
        height: 350,
        bottom: 20 ,
        marginHorizontal: 20,
        backgroundColor: "#939391",
        borderRadius: 20,
        elevation: 5,
        borderColor: "#000",
        borderWidth: 1,
        top: 20
    }}>
    <TouchableOpacity style={{left: 10, top: 5}} onPress={() => navigation.goBack ()}>
    <Icon name="left-long" size={30} />
    </TouchableOpacity>
    <View style={{
        width: 50,
        height: 50,

    }}>
    <Image style={{
        borderRadius: 100,
        width: 100 ,
        height: 100,
        left: 25,
        top: 7,
    
    }} source={require("../Image/george.jpeg")}/>
    </View>
    <View style={{
        left: 150,
        flexDirection: "column"
    
    }}>
    </View>
    <View
    style={{
        left: 5,
        top: 60
    }}>
    <Text>
    Investor legendaris yang dikenal karena keberhasilannya menghasilkan keuntungan besar melalui strategi tradingnya. Soros menjadi terkenal secara global setelah "membobol Bank of England" pada tahun 1992, menghasilkan keuntungan lebih dari $1 miliar dalam satu hari dengan memanfaatkan devaluasi pound sterling. Dia adalah pendiri Soros Fund Management dan memiliki reputasi sebagai trader yang cerdas dengan pendekatan berlawanan arus (contrarian) dalam pasar keuangan​
    <Text style={{color: "red", marginLeft: 10}} onPress={() => Linking.openURL("https://id.wikipedia.org/wiki/George_Soros")}>Read More</Text>
    </Text>
    </View>
    </View>
)
}

export default Login