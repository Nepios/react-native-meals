import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import MealTags from './MealTags';

function MealItem({ title, imageUrl, duration, complexity, affordability, onPress }){
  return (
    <View style={styles.mealItem}>
      <Pressable 
        android-ripple={{color: '#ccc'}}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealTags 
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
      
    </View>
  )
};

export default MealItem;

const styles = StyleSheet.create({
  innerContainer: {
   borderRadius: 8,
   overflow: 'hidden'
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4, 
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  buttonPressed: {
    opacity: 0.5,
  },
});