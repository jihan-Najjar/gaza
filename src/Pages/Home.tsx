import SearchBar from '../components/SearchBar'
import FeaturedDealItem from '../components/FeaturedDealItem'
import RecentlyVisited from '../components/RecentlyVisited'
import Header from '../components/Header'
import Cards from '../components/Cards'
import HotelList from '../components/HolelList'
import HotelRooms from '../components/HotelRooms'
import { rooms } from '../mockData'
import { hotels } from '../mockData'
import { useState } from 'react'
import {  Routes, Route } from 'react-router-dom';


const Home: React.FC = () => {
 
  // console.log(favoriteList)
  return (
    <div className='home'>
      <Header />
            <Routes>
                <Route path="/" element={<HotelList />} />
                <Route path="/hotel/:hotelId/rooms" element={<HotelRooms />} />
            </Routes>
      {/* <Cards rooms={rooms} hotels={hotels} toggleFavorite={toggleFavorite} favoriteList={favoriteList} /> */}
      

    </div>
  )
}

export default Home








