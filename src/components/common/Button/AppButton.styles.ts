import { StyleSheet } from "react-native";
import { colors, typography } from '../../../theme';

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    buttonText: {
        color: colors.white,
        fontSize: typography.md,
        fontWeight: '600'
    },
    disableButton: {
        opacity: 0.5,
    }
});

export default styles;