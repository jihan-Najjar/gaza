import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  return (
    <div className='search-bar d-flex'>
      <div>
        <label htmlFor='where-toGo'>Where
          <input name='where-toGo' id='where-toGo' type='text' placeholder='Search destinations' />
        </label>
      </div>
      <div className='date-container'>
        <label htmlFor='check-in'>Check in
          <DatePicker
            id='check-in'
            selected={checkIn}
            onChange={(date: Date|null) => setCheckIn(date)}
            placeholderText="Add dates"
            dateFormat="MM/dd/yyyy"
          />
        </label>
      </div>
      <div className='date-container'>
        <label htmlFor='check-out'>Check out
          <DatePicker
            id='check-out'
            selected={checkOut}
            onChange={(date: Date|null) => setCheckOut(date)}
            placeholderText="Add dates"
            dateFormat="MM/dd/yyyy"
          />
        </label>
      </div>
      <div className='d-flex gg'>
        <label>
          Who 2 guests
        </label>
        <button className='ciSearch'><CiSearch className='ciSearch-icon' /></button>
      </div>
    </div>
  );
};

export default SearchBar;
