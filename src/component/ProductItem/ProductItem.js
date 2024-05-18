import React from 'react'
import styles from './ProductItem.module.css'
const ProductItem = ({url , title}) => {
  return (
    <div className= {styles.productItem}>
      <img src = {url} alt = 'product Items'/>
      {title}
    </div>
  )
}

export default ProductItem
