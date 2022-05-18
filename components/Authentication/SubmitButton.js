import React from "react"
import { TouchableOpacity } from "react-native";
import { TextInput, StyleSheet } from 'react-native';
import Text from "@kaloraat/react-native-text"


const submitButton = ({title}) => (
    <TouchableOpacity

        style={{
            backgroundColor: '#ffcd38',
            height: 50,
            marginBottom: 30,
            justifyContent: "center",
            marginHorizontal: 120,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#fff'
        }}>

        <Text bold medium center>
            {title}
        </Text>

    </TouchableOpacity>
);


export default submitButton;



