import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function RecipeButton({
  index,
  selected,
  onPress,
}: {
  index: number;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, selected && styles.selectedButton]}>
      <Text style={selected ? styles.selectedText : styles.buttonText}>
        {index + 1}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
    width: 40,
    alignItems: 'center',
    borderRadius: 5,
  },
  selectedButton: { backgroundColor: '#ccc' },
  buttonText: {
  fontSize: 16,
  color: '#333',
},
  selectedText: { fontWeight: 'bold', fontSize: 16 },
});