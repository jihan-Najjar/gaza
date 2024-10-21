import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FavoriteItem, Room } from '../types'
import { hotels, rooms } from '../mockData';
const SearchBar: React.FC<{ toggleFavorite: (item: { id: number | string; type: 'room' | 'hotel' }) => void; favoriteList: FavoriteItem[] }> = ({ toggleFavorite, favoriteList }) => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [location, setLocation] = useState<string>('');
  const getDatesInRange = (startDate: Date, endDate: Date): Date[] => {
    const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const dates = [];
    while (date <= new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  const handleDateChange = (date: Date | null): Date | null => {
    return date ? new Date(date.getFullYear(), date.getMonth(), date.getDate()) : null;
  };
const handleSearchClick = () => {
  if (!checkIn || !checkOut) {
    alert("please select check-in and check-out dates.");
    return;
  }

  const filteredHotels = hotels.filter(
    hotel =>
      hotel.name.toLowerCase().includes(location.toLowerCase()) ||
      hotel.location.toLowerCase().includes(location.toLowerCase())
  );

  const availableRooms: Room[] = [];

  filteredHotels.forEach(hotel => {
    rooms.forEach(room => {
      if (
        room.hotelId === hotel.id &&  
        room.capacity.adults >= adults &&  
        room.capacity.children >= children  
      ) {
        const userCheckIn = new Date(checkIn.getFullYear(), checkIn.getMonth(), checkIn.getDate());
        const userCheckOut = new Date(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate());

        const bookingDates = getDatesInRange(userCheckIn, userCheckOut);

        const allDatesAvailable = bookingDates.every(bookedDate => {
          return room.availabilityDates.some(availableDate => {
            const formattedAvailableDate = new Date(
              availableDate.getFullYear(),
              availableDate.getMonth()-1,
              availableDate.getDate()
            ).toISOString().split('T')[0];

            const formattedBookedDate = new Date(
              bookedDate.getFullYear(),
              bookedDate.getMonth(),
              bookedDate.getDate()
            ).toISOString().split('T')[0];

            return formattedAvailableDate === formattedBookedDate;
          });
        });

        if (allDatesAvailable) {
          availableRooms.push(room);
        }
      }
    });
  });
  console.log(availableRooms); 
};

  return (
    <div className='search-bar d-flex'>
      <div className='date-container'>
        <label htmlFor='where-toGo'><h4>Where</h4>
          <input name='where-toGo' id='where-toGo'
            type='text'
            placeholder='Search destinations or hotel name' value={location}
            onChange={e => setLocation(e.target.value)} />
        </label>
      </div>
      <div className='date-container'>
        <label htmlFor='check-in'><h4>Check in</h4>
          <DatePicker
            id='check-in'
            selected={checkIn}
            onChange={(date: Date | null) => setCheckIn(handleDateChange(date))}
            placeholderText="Add dates"
            dateFormat="dd/MM/yyyy"
          />
        </label>
      </div>
      <div className='date-container'>
        <label htmlFor='check-out'><h4>Check out</h4>
          <DatePicker
            id='check-out'
            selected={checkOut}
            onChange={(date: Date | null) => setCheckOut(handleDateChange(date))}
            placeholderText="Add dates"
            dateFormat="dd/MM/yyyy"
          />
        </label>
      </div>
      <div className='d-flex'>
        <details className='guests-details ' id='guests-details'>
          <summary> <h4>Who 2 guests</h4></summary>
          <div className='guests-container'>
            <div>
              <label>
                Adults:
                <input type="number" value={adults} onChange={e => setAdults(Number(e.target.value))} min={1} />
              </label>
            </div>
            <div>
              <label>
                Children:
                <input type="number" value={children} onChange={e => setChildren(Number(e.target.value))} min={0} />
              </label>
            </div>
          </div>
        </details>
        <button className='ciSearch' onClick={handleSearchClick}>
          <CiSearch className='ciSearch-icon' />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
