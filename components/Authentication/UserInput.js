import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import Text from "@kaloraat/react-native-text";

const UserInput = ({
    name,
    value,
    setValue,
    autoCapitalize = "none",
    keyboardType = "default",
    secureTextEntry = false,
}) => {
    return (


        <View style={{ marginHorizontal: 24 }}>
            <Text semi>{name}</Text>
            <TextInput
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}

                style={{
                    // fontWeight: "medium",
                    color: 'black',
                    fontSize: 20,
                    borderBottomWidth: 0.5,
                    height: 45,
                    borderColor: "#b2bec3",
                    marginBottom: 30,
                }}
                // value={value}
                onChangeText={(text) => setValue = (text)}

            />

        </View>
    );
};


export default UserInput;