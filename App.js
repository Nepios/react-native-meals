import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import CategoriesScreen from './views/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './views/MealsOverviewScreen';
import MealDetails from './views/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'}
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            title: 'Meal Categories',

          }}/>
          <Stack.Screen 
            name="MealsOverview"
            component={MealsOverviewScreen} 
            // options={({ route }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen 
            name="MealDetails"
            component={MealDetails}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
