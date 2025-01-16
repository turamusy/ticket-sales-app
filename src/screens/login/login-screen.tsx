import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@app/redux/slices/auth-slice';
import { styles } from '@app/screens/login/login.styles';

/** @description Экран входа в аккаунт  */
const LoginScreen: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    /** @description Обработка логики входа */
    const handleLogin = async () => {
        try {
            setLoading(true);
            // Имитация запроса чтобы отобразить обработку
            await new Promise((resolve) => setTimeout(resolve, 1000)); 
            if (email === 'test' && password === 'test') {
                dispatch(loginSuccess({ email }));
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            console.error('Ошибка входа:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.title}>
                Вход
            </Text>
            <TextInput
                label="Email"
                mode="outlined"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                label="Пароль"
                mode="outlined"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            <Button
                mode="contained"
                onPress={handleLogin}
                style={[styles.button, loading && styles.loading]}
                loading={loading}
                disabled={loading || !email || !password}
            >
                Войти
            </Button>
        </View>
    );
};

export default LoginScreen;
