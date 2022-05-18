import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import Text from "@kaloraat/react-native-text";
import UserInput from "../components/Authentication/UserInput";
import SubmitButton from "../components/Authentication/SubmitButton";
import axios from "axios";
import LogoSignup from "../components/Authentication/LogoSignup";


const SignUp = () => {
    const [name, setName] = useState("");
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
        console.log("SIGN UP REQUEST =>", name, email, password);
        try {
            const { data } = await axios.post('http://localhost:8000/api/signup', {
                name,
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

        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>

            <LogoSignup />

            <Text title center>
                Sign Up
            </Text>

            <UserInput
                name="NAME"
                value={name}
                setValue={setName}
                autoCapitalize="words"
                autoCorrect={false} />

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

            <SubmitButton
                title="Sing Up"
                handleSubmit={handleSubmit}
                loading={loading}
            />

        </ScrollView>
    );
};


export default SignUp;
