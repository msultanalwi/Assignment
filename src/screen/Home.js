import React, {useState} from "react"
import {View, Text, TouchableOpacity, Image, Linking, ScrollView} from "react-native"
import Header from "../components/Header"
import Icon from "react-native-vector-icons/FontAwesome6"




const Home = ({navigation}) => {
    const [data, setData] = useState (false)
    const [data2, setData2] = useState (false)
    const [data3, setData3] = useState (false)
    const [data4, setData4] = useState (false)
    const [data5, setData5] = useState (false)
   


    const handlerData = () => {
        setData(!data)
        }

    const handlerData2 = () => {
        setData2(!data2)
        }

        const handlerData3 = () => {
            setData3(!data3)
            }

            const handlerData4 = () => {
                setData4(!data4)
                }

                const handlerData5 = () => {
                    setData5(!data5)
                    }
return (
    <ScrollView>
    <View style={{flex: 1}}>
      <Header />  
      <View style={{width: 175,
      height: 50, backgroundColor: "gray", 
      borderRadius: 15, left: 40, marginTop: 20
      }}><Text style={{
        textAlign: "center",
        top: 10,
    fontSize: 20
      }}>Timothy Ronald</Text>
      </View>
      <View style={{
        left: 250,
        bottom: 45
      }}>
      <TouchableOpacity onPress={() => handlerData()}> {data ? 
      <Icon name="circle-down" size={40} color="#939391" /> : <Icon name="circle-right" size={40} color="#939391" />}
      </TouchableOpacity>
      </View>
      {
        data === true && (
            <View style={{
                zIndex: 10,
                width: 350,
                height: 300,
                bottom: 20 ,
                marginHorizontal: 20,
                backgroundColor: "#939391",
                borderRadius: 20,
                elevation: 5,
                borderColor: "#000",
                borderWidth: 1,
            }}>
            <View style={{
                width: 50,
                height: 50,

            }}>
            <Image style={{
                borderRadius: 100,
                width: 100 ,
                height: 100,
                left: 25,
                top: 25,
            
            }} source={require("../Image/nolan.jpeg")}/>
            </View>
            <View style={{
                left: 150,
                flexDirection: "column"
            
            }}>
            </View>
            <View
            style={{
                left: 20,
                top: 100
            }}>
            <Text>
            Nama lengkap Timothy Ronald,
            Nama panggilan Timothy.
            Lahir di Tangerang, 22 September 2000.
            </Text>
            <View>
                <Text style={{color: "red"}}onPress={() => Linking.openURL("https://www.inilah.com/timothy-ronald")}>Read More</Text>
            </View>
            </View>
            </View>

        )
      }
      <View style={{width: 175,
      height: 70, backgroundColor: "gray", 
      borderRadius: 15, left: 40, marginTop: 20
      }}><Text style={{
        textAlign: "center",
        top: 10,
    fontSize: 20
      }}>Michael J. Huddleston</Text>
      </View>
      <View style={{
        left: 250,
        bottom: 45
      }}>
      <TouchableOpacity onPress={() => handlerData2 ()}> {data2 ? 
      <Icon name="circle-down" size={40} color="#939391" /> : <Icon name="circle-right" size={40} color="#939391" />}
      </TouchableOpacity>
      </View>
      {
        data2 === true && (
            <View style={{
               
                width: 350,
                height: 300,
                bottom: 20 ,
                marginHorizontal: 20,
                backgroundColor: "#939391",
                borderRadius: 20,
                elevation: 5,
                borderColor: "#000",
                borderWidth: 1,
            }}>
            <View style={{
                width: 50,
                height: 50,

            }}>
            <Image style={{
                borderRadius: 100,
                width: 100 ,
                height: 100,
                left: 25,
                top: 25,
            
            }} source={require("../Image/ICT.jpeg")}/>
            </View>
            <View style={{
                left: 150,
                flexDirection: "column"
            
            }}>
            </View>
            <View
            style={{
                left: 5,
                top: 100
            }}>
            <Text>
            Michael J. Huddleston is a leading figure in trading education, known for his unique approach to understanding and mastering the markets. He aims to make these advanced trading techniques, known as ICT trading, accessible to beginners and experienced traders.
            </Text>
            <View>
                <Text style={{color: "red"}} onPress={() => Linking.openURL("https://trade-ys.com/michael-j-huddleston-and-ict-revolutionizing-the-trading-approach/")}>Read More</Text>
            </View>
            </View>
            </View>

        )
      }
    </View>
    <View style={{width: 175,
      height: 50, backgroundColor: "gray", 
      borderRadius: 15, left: 40, marginTop: 20
      }}><Text style={{
        textAlign: "center",
        top: 10,
    fontSize: 20
      }}>Satoshi Nakamoto</Text>
      </View>
      <View style={{
        left: 250,
        bottom: 45
      }}>
      <TouchableOpacity onPress={() => handlerData3 ()}> {data3 ? 
      <Icon name="circle-down" size={40} color="#939391" /> : <Icon name="circle-right" size={40} color="#939391" />}
      </TouchableOpacity>
      </View>
      {
        data3 === true && (
            <View style={{
               
                width: 350,
                height: 300,
                bottom: 20 ,
                marginHorizontal: 20,
                backgroundColor: "#939391",
                borderRadius: 20,
                elevation: 5,
                borderColor: "#000",
                borderWidth: 1,
            }}>
            <View style={{
                width: 50,
                height: 50,

            }}>
            <Image style={{
                borderRadius: 100,
                width: 100 ,
                height: 100,
                left: 25,
                top: 20,
            
            }} source={require("../Image/btc.jpeg")}/>
            </View>
            <View style={{
                left: 150,
                flexDirection: "column"
            
            }}>
            </View>
            <View
            style={{
                marginHorizontal: 5,
                top: 80
            }}>
            <Text>
            Satoshi Nakamoto is the pseudonym for the individual or group who created Bitcoin, the world's first cryptocurrency, and the blockchain technology behind it. In 2008, Satoshi published the Bitcoin whitepaper, outlining a peer-to-peer electronic cash system without intermediaries like banks. Bitcoin was officially launched in 2009. To this day, Satoshi Nakamoto's true identity remains unknown.
            </Text>
            <View>
                <Text style={{color: "red"}} onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/Satoshi_Nakamoto")}>Read More</Text>
            </View>
            </View>
            </View>

        )
      }
      <View style={{width: 175,
      height: 70, backgroundColor: "gray", 
      borderRadius: 15, left: 40, marginTop: 20
      }}><Text style={{
        textAlign: "center",
        top: 10,
    fontSize: 20
      }}>William Delbert Gann</Text>
      </View>
      <View style={{
        left: 250,
        bottom: 45
      }}>
      <TouchableOpacity onPress={() => handlerData4 ()}> {data4 ? 
      <Icon name="circle-down" size={40} color="#939391" /> : <Icon name="circle-right" size={40} color="#939391" />}
      </TouchableOpacity>
      </View>
      {
        data4 === true && (
            <View style={{
               
                width: 350,
                height: 300,
                bottom: 20 ,
                marginHorizontal: 20,
                backgroundColor: "#939391",
                borderRadius: 20,
                elevation: 5,
                borderColor: "#000",
                borderWidth: 1,
            }}>
            <View style={{
                width: 50,
                height: 50,

            }}>
            <Image style={{
                borderRadius: 100,
                width: 100 ,
                height: 100,
                left: 25,
                top: 19,
            
            }} source={require("../Image/gann.jpeg")}/>
            </View>
            <View style={{
                left: 150,
                flexDirection: "column"
            
            }}>
            </View>
            <View
            style={{
                marginHorizontal: 5,
                top: 70
            }}>
            <Text>
            Gann was born on June 6, 1878, in Lufkin, Texas. His father was a cotton farmer. He started trading in 1902 when he was 24. He was believed to be a great student of the Bible, who believed that it was the greatest book ever written. He was also a 33rd degree Freemason of the Scottish Rite Order, to which some have attributed his knowledge of ancient mathematics, though he was also known to have studied the ancient Greek and Egyptian cultures.
            </Text>
            <View>
                <Text style={{color: "red"}} onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/William_Delbert_Gann")}>Read More</Text>
            </View>
            </View>
            </View>

        )
      }
      <View style={{width: 175,
      height: 50, backgroundColor: "gray", 
      borderRadius: 15, left: 40, marginTop: 20
      }}><Text style={{
        textAlign: "center",
        top: 10,
    fontSize: 20
      }}>George Soros</Text>
      </View>
      <View style={{
        left: 250,
        bottom: 45
      }}>
      <TouchableOpacity onPress={() => navigation.navigate ("Login")}> {data5 ? 
      <Icon name="circle-down" size={40} color="#939391" /> : <Icon name="circle-right" size={40} color="#939391" />}
      </TouchableOpacity>
      </View>
      {
        data5 === true && (
            <View style={{
               
                width: 350,
                height: 300,
                bottom: 20 ,
                marginHorizontal: 20,
                backgroundColor: "#939391",
                borderRadius: 20,
                elevation: 5,
                borderColor: "#000",
                borderWidth: 1,
            }}>
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
                top: 55
            }}>
            <Text>
            Investor legendaris yang dikenal karena keberhasilannya menghasilkan keuntungan besar melalui strategi tradingnya. Soros menjadi terkenal secara global setelah "membobol Bank of England" pada tahun 1992, menghasilkan keuntungan lebih dari $1 miliar dalam satu hari dengan memanfaatkan devaluasi pound sterling. Dia adalah pendiri Soros Fund Management dan memiliki reputasi sebagai trader yang cerdas dengan pendekatan berlawanan arus (contrarian) dalam pasar keuangan​
            </Text>
            <View>
                <Text style={{color: "red"}} onPress={() => Linking.openURL("https://id.wikipedia.org/wiki/George_Soros")}>Read More</Text>
            </View>
            </View>
            </View>

        )
      }
      {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity> */}
    </ScrollView>
)
}

export default Home