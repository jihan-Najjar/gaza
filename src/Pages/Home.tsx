import Header from '../components/Header'
import HotelList from '../components/HolelList'
import SearchBar from '../components/SearchBar';
import {FavoriteItem, Hotel } from '../types'
interface prop{
  
    toggleFavorite: (item: { id: number | string; type: 'room' | 'hotel' }) => void; 
    favoriteList: FavoriteItem[] ;
    data:Hotel[]
   
}
const Home: React.FC<prop> = ({ toggleFavorite, favoriteList ,data}) => {
  return (
    <div className='home'>
        <div className='header-search d-flex'>

      <Header />
      <SearchBar toggleFavorite={toggleFavorite} favoriteList={favoriteList}/>
      </div>

      <HotelList toggleFavorite={toggleFavorite} favoriteList={favoriteList} data={data}/>
          
    </div>
  )
}

export default Home








