import HotelList from "./components/HolelList";
import HotelRooms from "./components/HotelRooms";
import RoomDetails from "./components/RoomDetails";
import "./index.css";
import AdminPage from "./Pages/Admin";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route } from 'react-router-dom';
import { FavoriteItem, Hotel, Room } from "./types";
import { useState } from "react";
import Rooms from "./components/Rooms";
import Hotels from "./components/Hotels";
import CheckoutForm from "./Pages/Checkout";
import ConfirmationPage from "./Pages/Confirmation";
import { hotels, rooms } from "./mockData";
import UserLayout from "./components/UserLayout";
// import { hotels } from '../mockData';


function App() {
  const [hData, setHData] = useState<Hotel[]>([...hotels])
  const [rData, setRData] = useState<Room[]>([...rooms])
  const [userName, setUserName] = useState<string>("");
  const [favoriteList, setFavoriteList] = useState<FavoriteItem[]>([]);
  const toggleFavorite = (item: { id: number | string; type: 'room' | 'hotel' }) => {
    const exists = favoriteList.some(fav => fav.id === item.id && fav.type === item.type);
    if (exists) {
      setFavoriteList(prev => prev.filter(fav => fav.id !== item.id || fav.type !== item.type));
    } else {
      setFavoriteList(prev => [...prev, item]);
    }
  };
  const getUserName = () => {
    setUserName(prev => prev)
  }
  console.log(hData)
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<UserLayout />}>
          <Route path="/Home" element={<Home data={hData} toggleFavorite={toggleFavorite} favoriteList={favoriteList} />} />
          <Route path="/hotel-list" element={<HotelList data={hData} toggleFavorite={toggleFavorite} favoriteList={favoriteList} />} />
          <Route path="/hotel/:hotelId/rooms" element={<HotelRooms toggleFavorite={toggleFavorite} favoriteList={favoriteList} />} />
          <Route path="/rooms/:roomId" element={<RoomDetails toggleFavorite={toggleFavorite} favoriteList={favoriteList} />} />
          <Route path="/Confirmation" element={<ConfirmationPage />} />
          <Route path="/rooms/:roomId/Checkout" element={<CheckoutForm />} />
        </Route>
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<Hotels data={hData} setData={setHData} />} />
          <Route path="/admin/hotels" element={<Hotels data={hData} setData={setHData} />} />
          <Route path="/admin/rooms" element={<Rooms data={rData} setData={setRData} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;