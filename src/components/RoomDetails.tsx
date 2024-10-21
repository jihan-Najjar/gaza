import React, { useState } from 'react';
import { hotels, rooms } from '../mockData';
import { useNavigate, useParams } from 'react-router-dom';
import { FavoriteItem } from '../types'
import Header from './Header';
import { FaHeart } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Prop {
  toggleFavorite: (item: { id: number | string; type: 'room' | 'hotel' }) => void;
  favoriteList: FavoriteItem[];
}
const RoomDetails: React.FC<Prop> = ({ favoriteList }) => {

  const { roomId } = useParams<{ roomId: string }>();
  const room = rooms.find(room => room.id === Number(roomId));
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  const [error, setError] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(room ? room.gallery.image1 : "");
  const handleImageChange = (image: string) => {
    setCurrentImage(image)
  }

  const [availabilityDates, setAvailabilityDates] = useState<Date[]>(room ? room.availabilityDates : []);
  
  const calculateTotalPrice = () => {
    if (checkIn && checkOut) {
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      return daysDiff * room!.price;
    }
    return 0;
  };
  const handleConfirm = () => {
    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setError("Please select valid check-in and check-out dates.");
    } else {
      setError(null);
      navigate(`/rooms/${roomId}/Checkout`);
    }
  };

  const [thumbnails, setThumbnails] = useState([
    // room?.gallery.image1,
    room?.gallery.image2,
    room?.gallery.image3,
    room?.gallery.image4,
  ]);

  if (!room) {
    return <p>Room not found</p>;
  }

  const hotel = hotels.find(hotel => hotel.id === Number(room.hotelId))
  const isFavorite = (favoriteList.some(fav => fav.id === Number(roomId) && fav.type === "room" ? "favorite" : ""))

  const handleImageSwap = (clickedImage: string, index: number) => {
    const newThumbnails = [...thumbnails];

    newThumbnails[index] = currentImage;
    setCurrentImage(clickedImage);
    setThumbnails(newThumbnails);
  };
  return (
    <>
      <div className='header-search d-flex'>
        <Header />
      </div>
      <div className="roomDet d-flex">
        <div className=' d-flex room-num '>
          <h1>{hotel?.name},  <span>room number {room.number}</span></h1>
          <FaHeart className={`faHeart ${isFavorite ? "favorite" : ""}`} />



        </div>
        <div className='d-flex room-imgs'>
          <div className="main-image">
            <img
              src={currentImage}
              alt={`Room ${room.number}`}
              className="roomDet-image"
              loading="lazy"
            />
          </div>

          {/* <div className="image-thumbnail">
            <img
              src={room.gallery.image1}
              alt="Thumbnail 1"
              onClick={() => handleImageChange(room.gallery.image1)}
              loading='lazy'
              className='thumbnail'
            />
            <img
              src={room.gallery.image2}
              alt="Thumbnail 2"
              onClick={() => handleImageChange(room.gallery.image2)}
              loading='lazy'
              className='thumbnail'

            />
            <img
              src={room.gallery.image3}
              alt="Thumbnail 3"
              onClick={() => handleImageChange(room.gallery.image3)}
              loading='lazy'
              className='thumbnail'

            />
            <img
              src={room.gallery.image4}
              alt="Thumbnail 4"
              onClick={() => handleImageChange(room.gallery.image4)}
              loading='lazy'
              className='thumbnail'

            />
          </div> */}

          <div className="image-thumbnail">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageSwap(thumbnail || '', index)}
                className="thumbnail"
                loading="lazy"
              />
            ))}
            <div className="thumbnail det-thumbnail">
              <h2>What this place offers:
              </h2>
              {/* {room?.amenities} */}
              <ul>
                {room.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li> // عرض كل وسيلة راحة
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='d-flex'>
          <div className='room-description'>
            <h1>About this place </h1>
            <p>{hotel?.description}</p>
            <p><strong>Location:</strong> {hotel?.location}</p>
            <p><strong>Room Number:</strong> {room.number}</p>
            <p><strong>Price:</strong> ${room.price} per night</p>

            <p><strong>Description:</strong> {hotel?.description}</p>

            <p><strong>Amenities:</strong> {room.amenities.join(", ")}</p>
            <p>An ensuite double bedroom in a spacious,
              comfortable flat, conveniently located on a quiet square by Dalston
              Junction station. Just behind a high street with restaurants, bars,
              cafes and transport links. I live here with my standard poodle, Rei.
              We love guests who make themselves at home and are more than happy to share
              the living room and kitchen. You'll have your own private bedroom and bathroom with shower.
              Fresh sheets and towels provided. An additional shared toilet is downstairs.</p>

          </div>
          <div className='confirm-room'>
            <div className='date-container d-flex'>
              <label htmlFor='check-in' className='label-date'><h4>Check in</h4>
                <DatePicker
                  id='check-in'
                  selected={checkIn}
                  onChange={(date: Date | null) => setCheckIn(date)}
                  placeholderText="Add dates"
                  dateFormat="dd/MM/yyyy"
                  className='date-picker'
                  excludeDates={availabilityDates}
                  minDate={new Date()}
                />
              </label>
              <label htmlFor='check-out' className='label-date'><h4>Check out</h4>
                <DatePicker
                  id='check-out'
                  selected={checkOut}
                  onChange={(date: Date | null) => setCheckOut(date)}
                  placeholderText="Add dates"
                  dateFormat="dd/MM/yyyy"
                  className='date-picker'
                  excludeDates={availabilityDates}
                  minDate={checkIn ? new Date(checkIn.getTime() + 86400000) : undefined} // يوم بعد check-in
                />
              </label>
            </div>

            <div className='d-flex guests-details '>
              <details id='guests-details'>
                <summary  className='guests-summary d-flex'> <h4> Guests</h4></summary>
                <div className='guests-container'>
                  <div>
                    <label>
                      Adults:

                      <input type="number" value={guests.adults} onChange={e => setGuests({ ...guests, adults: Number(e.target.value) })} min={1} max={room.capacity.adults} />
                    </label>
                  </div>
                  <div>
                    <label>
                      Children:
                      <input type="number" value={guests.children}  onChange={e => setGuests({ ...guests, children: Number(e.target.value) })} min={0} max={room.capacity.children} />
                    </label>
                  </div>
                </div>
              </details>
            </div>
          {error &&<p className='error'>Those dates are not available</p>}  
          <p><strong>Total Price:</strong> ${calculateTotalPrice()}</p>
            <button className='ciSearch' onClick={handleConfirm}>confirm</button>

          </div>
        </div>


      </div>
    </>


  );
}

export default RoomDetails;
