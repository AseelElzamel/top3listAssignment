import React from 'react';
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native';

export type RecipeType = {
  title: string;
  image: any;
  cast: string;
  synopsis: string;
};

export default function RecipeItem({ recipe }: { recipe: RecipeType }) {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: textColor }]}>{recipe.title}</Text>
      <Image source={recipe.image} style={styles.image} />
      <Text style={[styles.label, { color: textColor }]}>Cast:</Text>
      <Text style={{ color: textColor }}>{recipe.cast}</Text>
      <Text style={[styles.label, { color: textColor }]}>Synopsis:</Text>
      <Text style={{ color: textColor }}>{recipe.synopsis}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  title: { fontSize: 20, marginVertical: 10 },
  image: { width: 300, height: 400, resizeMode: 'cover', marginBottom: 10 },
  label: { fontWeight: 'bold', marginTop: 10 },
});