import React from 'react';
import { View, Text, Alert, TextInput, SafeAreaView } from 'react-native';
import AppButton from '../../components/common/Button/AppButton';
import AppInput from '../../components/common/Input/AppInput';
import styles from './LoginScreen.styles';
import { STRING } from '../../constants/strings';
import { useLogin } from '../../hooks/useLogin';  

const LoginScreen = () => {
    const {                                  
        email,
        password,
        error,
        setEmail,
        setPassword,
        handleLogin,
    } = useLogin();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    {STRING.welcomeBack}
                </Text>

                <Text style={styles.subtitle}>
                    {STRING.signInToContinue}
                </Text>

                <View style={styles.subtitle}>
                    <AppInput
                    label={STRING.email}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />

                <AppInput
                    label={STRING.password}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {
                    !!error && (
                        <Text style={styles.errorText}>{error}</Text>
                    )
                }
                <AppButton
                    title={STRING.login}
                    onPress={handleLogin}
                    loading={false}
                />

                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

