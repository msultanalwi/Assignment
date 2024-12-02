import React from 'react';
import {View, Text} from 'react-native'

const Header = () => {
    return (
<View style={{
    width: "100%",
    height: 50,
    backgroundColor: "#000",
}}>
    <Text style={{
        color: "#fff",
        textAlign: "center",
        margin: 10,
        fontSize: 18,
        fontWeight: "bold"
        }}>The World Great Investor</Text> 
</View>
    )
}

export default Header;