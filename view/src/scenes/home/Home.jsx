import React from 'react'
import Navbar from '../global/Navbar'
import {MainCarousel, ShoppingList} from "../"
import Subscribe from './Subscribe'
import Footers from '../global/Footers'

const Home= () => {
  return (
    <div>
      {/* <Navbar /> */}
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
     
    </div>
    

  )
}

export default Home