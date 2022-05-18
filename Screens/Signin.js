import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/Authentication/UserInput";
import SubmitButton from "../components/Authentication/SubmitButton";
import axios from "axios";
import LogoSignup from "../components/Authentication/LogoSignup";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Position from "react-native/Libraries/Components/Touchable/Position";



const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true)
        if (!name || !email || !password) {
            alert("All fields are required");
            setLoading(false);
            return;
        }
        // console.log("SIGNINREQUEST =>", name, email, password);
        try {
            const { data } = await axios.post('http://localhost:8000/api/signin', {
                email,
                password,
            });
            console.log("SIGN IN SUCCESSFULLY => ", data);
            alert("Sign in successfully");
        }
        catch (err) {
            console.log(err)
        }
    }





    return (

        <View style={{

            flex: 1,
            justifyContent: "center",


        }}
        >

            <KeyboardAwareScrollView contentContainerStyle={{

                marginVertical: 50,

            }}>
                <LogoSignup />

                <Text title center style={{
                    marginBottom: 50,
                    marginTop: 5,
                }}>
                    Sign In
                </Text>


                <UserInput
                    name="EMAIL"
                    value={email}
                    setValue={setEmail}
                    autoCompleteType="email"
                    keyboardType="email-address" />

                <UserInput
                    name="PASSWORD"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                    autoCompleteType="password" />

                <Text center bold style={{
                    flex: 1,
                    textDecorationLine: 'underline',
                    marginTop: 10,
                    color: "#fb5607",
                    textAlign: 'right',
                    marginBottom: 35,
                    marginRight: 24,
                    
                }}>
                    Forgot password ?
                </Text>
                <SubmitButton
                    title="Sing In"
                    handleSubmit={handleSubmit}
                    loading={loading}
                />
                <Text small center>
                    Not yet registered ?</Text>

                <Text color="#ff2222" center style={{
                    textDecorationLine: 'underline',
                    marginTop: 10,
                }}>
                    Sign Up
                </Text>

            </KeyboardAwareScrollView>

        </View>
    );
};


export default Signin;
