import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Shadows, BorderRadius } from '../constants/theme';

interface CustomCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

/**
 * Reusable card component with consistent elevation and rounded corners.
 * Used for content sections like the credit gauge, chart, and settings groups.
 */
export default function CustomCard({ children, style }: CustomCardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: 16,
    marginVertical: 8,
    ...Shadows.sm,
  },
});
