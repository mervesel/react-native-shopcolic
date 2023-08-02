import React from 'react';
import {FlatList, ActivityIndicator, Text} from 'react-native';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

const Products = ({navigation}) => {
  const {list, loading, error} = useFetch('https://fakestoreapi.com/products');

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text> {error} </Text>;
  }
  const handleProductSelect=(id)=>{
    navigation.navigate('ProductsDetails', {id});

  }

  const renderProducts = ({item}) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)} /> ;

  return <FlatList data={list} renderItem={renderProducts} />;
};

export default Products;
