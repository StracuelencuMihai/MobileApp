import React from "react";
import { View, Image } from "react-native";


const LogoSignup = () => (

    <View 
    style={{
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
    }}>

        <Image 
        source={require("../../assets/logo.png")}
        style={{ width: 200, height: 100, marginVertical: 10 }}
        />

    </View >
);

export default LogoSignup;

