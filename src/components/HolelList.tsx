import React from 'react'
import Cards from './Cards';
import { Room, Hotel ,FavoriteItem} from '../types';

interface Prop {
data:Hotel[];

  toggleFavorite: (item: { id: number | string; type: 'room' | 'hotel' }) => void;
  favoriteList: FavoriteItem[];
}

const HotelList:React.FC<Prop> = ({favoriteList,toggleFavorite,data}) => {
  return (
    <div className="hotel-list">
    <Cards hotels={data} toggleFavorite={toggleFavorite} favoriteList={favoriteList}  />
</div>
  )
}

export default HotelList