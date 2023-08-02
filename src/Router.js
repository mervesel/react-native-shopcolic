import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from "./pages/Products/Products";
import ProductsDetails from "./pages/ProductsDetails.js/ProductsDetails";
const Stack = createNativeStackNavigator();

const Router=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={Products} options={{
          title: 'ShopColic',
          headerStyle: {backgroundColor: '#FFF6E0'},
          headerTitleStyle: {color: '#FFC6AC',fontSize: 25}
        }} />
        <Stack.Screen name="ProductsDetails" component={ProductsDetails} options={{
          title: 'Product Details',
          headerStyle: {backgroundColor: '#FFF6E0'},
          headerTitleStyle: {color: '#FFC6AC',fontSize: 25},
          headerTintColor: '#FFC6AC'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default Router;