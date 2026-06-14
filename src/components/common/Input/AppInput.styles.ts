import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../theme";

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.md,
    },
    input: {
        height: 50,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: spacing.md,
        backgroundColor: colors.white,
        color: colors.textPrimary,
    },
    label: {
        fontSize: typography.md,
        color: colors.textPrimary,
        marginBottom: spacing.xs,   
    },   
})

export default styles;