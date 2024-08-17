import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Room } from '../types';
import Cards from './Cards';
import { rooms } from '../mockData';


const HotelRooms: React.FC = () => {
    const { hotelId } = useParams<{ hotelId: string }>();
    const [filterRooms,setFilterRooms]=useState<Room[]>([])
useEffect(()=>{
    if(hotelId){
        setFilterRooms(rooms.filter(room=>room.hotelId===Number(hotelId)))

    }
},[hotelId])
console.log(filterRooms)
    return (
        <div>
            <h1>Rooms for Hotel {hotelId}</h1>
    <Cards  rooms={filterRooms} />
        </div>
    );
};

export default HotelRooms;
