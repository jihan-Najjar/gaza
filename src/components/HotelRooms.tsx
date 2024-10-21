import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from './Cards';
import { rooms } from '../mockData';
import { Room ,FavoriteItem} from '../types';

  interface Prop {
    toggleFavorite: (item: { id: number | string; type: 'room' | 'hotel' }) => void;
    favoriteList: FavoriteItem[];
  }
const HotelRooms: React.FC<Prop> = ({favoriteList,toggleFavorite}) => {
    const { hotelId } = useParams<{ hotelId: string }>();
    const [filterRooms,setFilterRooms]=useState<Room[]>([])
useEffect(()=>{
    if(hotelId){
        setFilterRooms(rooms.filter(room=>room.hotelId===Number(hotelId)))

    }
},[hotelId])
    return (
        <div>
            <h1>Rooms for Hotel {hotelId}</h1>
    <Cards  rooms={filterRooms} toggleFavorite={toggleFavorite} favoriteList={favoriteList}  />
        </div>
    );
};

export default HotelRooms;
