import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from './AppInput.styles';
import { colors, typography } from "../../../theme";

interface AppInputProps{
    label: string,
    placeholder: string,
    value: string,
    onChangeText: (Text: string) => void,
    secureTextEntry?: boolean,
}

const AppInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
}: AppInputProps) =>{
    return(
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
        </View>
    );
};