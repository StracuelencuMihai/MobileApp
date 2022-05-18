import React from "react";
import { View, Image } from "react-native";


const LogoSignup = () => (

    <View 
    style={{
        justifyContent: "center",
        alignItems: "center",
    }}>

        <Image 
        source={require("../../assets/logo.png")}
        style={{ width: 300, height: 200, marginVertical: 0.5 }}
        />

    </View >
);

export default LogoSignup;

