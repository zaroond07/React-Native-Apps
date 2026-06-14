import {StyleSheet} from 'react-native';

import {
  colors,
  spacing,
  typography,
} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },

  title: {
    fontSize: typography.xxl,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: typography.xl,
    color: colors.textSecondary,
    marginBottom: spacing.xxl,
    textAlign: 'center',
  },

  formContainer: {
    marginTop: spacing.md,
  },

  errorText: {
    color: colors.error,
    fontSize: typography.sm,
    marginBottom: spacing.md,
  },
});

export default styles;