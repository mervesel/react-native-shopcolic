import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import styles from './ProductsDetails.styles';
import useFetch from '../../hooks/useFetch/useFetch';

const ProductsDetails = ({route}) => {
  const {id} = route.params;
  const {list, loading, error} = useFetch(
    `https://fakestoreapi.com/products/${id}`,
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: list.image}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}> {list.title} </Text>
        <Text style={styles.desc}> {list.description} </Text>
        <Text style={styles.price}> {list.price} TL </Text>
      </View>
    </View>
  );
};

export default ProductsDetails;
