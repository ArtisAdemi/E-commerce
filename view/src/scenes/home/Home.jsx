import React from 'react'
import Navbar from '../global/Navbar'
import {MainCarousel, ShoppingList} from "../"

const Home= () => {
  return (
    <div>
      <Navbar />
      <MainCarousel />
      <ShoppingList />
    </div>
    

  )
}

export default Home