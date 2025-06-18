import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RecipeButton from '../../components/RecipeButton';
import RecipeItem, { RecipeType } from '../../components/RecipeItem';

const recipes: RecipeType[] = [
  {
    title: 'Cinnamon Rolls',
    image: require('../../assets/images/cinroll.png'),
    Ingredients: 'Cinnamon rolls dough, cinnamon paste, Caramel sauce',
    Instructions: '1.Spread cinnamon rolls dough and spread cinnamon pate on it\n2.Roll it an put in oven and drizzle with caramel sauce.',
  },
  {
    title: 'Salad',
    image: require('../../assets/images/salad.png'),
    Ingredients: 'Keanu, tomato, cucumber, lettuce',
    Instructions: '1.Chop all the veggies\n2.Put them all in a bowl and mix them',
  },
  {
    title: 'Chicken wings',
    image: require('../../assets/images/wings.png'),
    Ingredients: 'Chicken wings, chicken seasoning, olive oil',
    Instructions: '1. add the seasoning to the chicken wings and mix\n 2.place in oven for 30 mins',
  },
];

export default function HomeScreen() {
  const [selected, setSelected] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Top 3 Recipes</Text>
      <MovieItem recipe={recipes[selected]} />
      <View style={styles.buttonContainer}>
        {recipes.map((_, index) => (
          <RecipeButton
            key={index}
            index={index}
            selected={selected === index}
            onPress={() => setSelected(index)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
});