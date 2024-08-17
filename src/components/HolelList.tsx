import React from 'react'
import { hotels } from '../mockData';
import Cards from './Cards';
const HotelList:React.FC = () => {
  return (
    <div className="hotel-list">
    <Cards hotels={hotels}  />
</div>
  )
}

export default HotelList