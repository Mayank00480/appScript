import React from 'react'
import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar';
const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <Navbar/>
      <div className={styles.navBar}>
        <div className={styles.container}>
            <li>Shop</li>
            <li>Skills</li>
            <li>Stories</li>
            <li>About</li>
            <li>Contact Us</li>
        </div>
      
      </div>
      <div className= {styles.contain}>
            <h4>Discover Our Products</h4>
           
        </div>
        <div className= {styles.contain}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
  </div>  </div>
  )
}

export default Header
