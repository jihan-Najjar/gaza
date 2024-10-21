import React, { useState } from 'react'
import Card from './Card'
import { Room, Hotel ,FavoriteItem} from '../types';

interface Prop {
    rooms?: Room[]|Room;
    hotels?: Hotel[];
    toggleFavorite: (item: { id: number | string; type: 'room' | 'hotel' }) => void;

    favoriteList: FavoriteItem[];
}
const Cards: React.FC<Prop> = ({ rooms=[], hotels=[],toggleFavorite, favoriteList }) => {
  

    const roomArray = Array.isArray(rooms) ? rooms : rooms ? [rooms] : [];
    // console.log(favoriteList)
    // console.log(rooms)
    return (
        <div className='cards'>
             {
                roomArray.map((room) => (
                    <Card 
                        key={room.id} 
                        RCard={room} 
                        toggleFavorite={toggleFavorite} 
                        isFavorite={favoriteList.some(fav => fav.id === room.id && fav.type === 'room')} 
                    />
                ))
            }
            {
                hotels?.map((hotel) => (
                    <Card key={hotel.id} HCard={hotel} toggleFavorite={toggleFavorite} isFavorite={favoriteList.some(fav => fav.id === hotel.id && fav.type === 'hotel')} />
                ))
            }
        </div>
    )
}

export default Cards




