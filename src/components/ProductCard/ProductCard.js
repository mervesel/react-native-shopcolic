import React from 'react';
import styles from './ProductCard.styles';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const ProductCard = ({product,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}> {product.title} </Text>
          <Text style={styles.priceText}> {product.price} TL</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
