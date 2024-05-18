import React, { useEffect,useState } from 'react'
import axios from 'axios'
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductItems.module.css'
const ProductItems = () => {
    const [productsData , setProductsData] = useState([]);
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProductsData(res.data);
        console.log(res.data , 'result');
      })
      .catch(err => {
        console.log(err , 'error');
      })
    },[]);
  return (
    <div className= {styles.items}>
      {productsData.map((item,index) => {
          return <ProductItem url = {item.image} title = {item.title} />
      })}
    </div>
  )
}

export default ProductItems
