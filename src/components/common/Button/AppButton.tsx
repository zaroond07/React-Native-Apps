import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './AppButton.styles';
import { colors } from '../../../theme';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  loading: boolean;
  disabled?: boolean;
}

const AppButton = ({
    title,
    onPress,
    loading = false,
    disabled = false,
}: AppButtonProps) => {
    return(
        <TouchableOpacity
            style={[
                styles.button,
                disabled && styles.disableButton,
            ]}
            onPress = {onPress}
            disabled = {disabled || loading}>
        {
            loading ? (
                <ActivityIndicator color={colors.white}/>
            ) : (
                <Text style={styles.buttonText}>{title}</Text>
            )
        }
        </TouchableOpacity>
    )
}

export default AppButton;