import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import  { MEALS } from '../data/dummy-data';
import MealTags from "../components/MealTags";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from 'react';
import IconButton from "../components/IconButton";

function MealDetails ({ route, navigation }) {
  const mealId = route.params.mealId;
  let meal = MEALS.find((mealItem) => {
    return mealItem.id == mealId;
  })

function headerButtonPressHandler() {
  console.log('Pressed');
}

  useLayoutEffect(() => {
    navigation.setOptions ({
      headerRight: () => {
        return <IconButton onPress={headerButtonPressHandler} color="white" icon="star"/>
      }
    })
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image}/>
      <Text style={styles.title}>{meal.title}</Text>
      <MealTags 
        duration={meal.duration}
        affordability={meal.affordability}
        complexity={meal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}
export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center'
  }, 
  rootContainer: {
    marginBottom: 24,
  }
});