import React, { useState } from 'react';
import { Room, Hotel } from '../types';
import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

interface CardProps {
    RCard?: Room;
    HCard?: Hotel;
    toggleFavorite: (id: number | string) => void;
    isFavorite: boolean;


}

const Card: React.FC<CardProps> = ({ RCard, HCard, toggleFavorite, isFavorite }) => {
    console.log('RCard:', RCard);
    const navigate = useNavigate();

    const [currentImage, setCurrentImage] = useState(
        RCard ? RCard.gallery.image1 : HCard?.gallery.image1);

    const handleImageChange = (image: string) => {
        setCurrentImage(image);
    };
    const handleFavoriteClick = () => {
        if (RCard) {
            toggleFavorite(RCard.id);
        } else if (HCard) {
            toggleFavorite(HCard.id);
        }
    };


    const handleCardClick = () => {
        if (HCard) {
            navigate(`/hotel/${HCard.id}/rooms`);
        }
    };

    const handleImgeSize = (e: React.MouseEvent<HTMLImageElement>) => {

        const imgElement = e.target as HTMLImageElement;
        imgElement.style.width = "100vh";
    }
    if (RCard) {
        return (
            <div className="HCard">
                <img src={currentImage} alt={`Room ${RCard.number}`} className="room-image" loading='lazy' onClick={handleImgeSize} />
                <FaHeart className={`faHeart ${isFavorite ? "favorite" : ""}`} onClick={handleFavoriteClick} />


                <div className="image-thumbnails">
                    <img
                        src={RCard.gallery.image1}
                        alt="Thumbnail 1"
                        onClick={() => handleImageChange(RCard.gallery.image1)}
                        loading='lazy'
                    />
                    <img
                        src={RCard.gallery.image2}
                        alt="Thumbnail 2"
                        onClick={() => handleImageChange(RCard.gallery.image2)}
                        loading='lazy'
                    />
                    <img
                        src={RCard.gallery.image3}
                        alt="Thumbnail 3"
                        onClick={() => handleImageChange(RCard.gallery.image3)}
                        loading='lazy'
                    />
                    <img
                        src={RCard.gallery.image4}
                        alt="Thumbnail 4"
                        onClick={() => handleImageChange(RCard.gallery.image4)}
                        loading='lazy'
                    />
                </div>
                <div className="des-card">
                    <div className='cardHeader'>
                        <h2>Room {RCard.number} - {RCard.type}</h2>
                        <p ><FaStar className='faStar' />  {`   ${RCard.starRating}`}</p>
                    </div>

                    <p>{RCard.capacity.adults} Adults, {RCard.capacity.children} Children</p>
                    <p><strong>  ${RCard.price}</strong>/night</p>
                    <p>{RCard.available ? "Available" : "Not Available"}</p>
                </div>



            </div>
        );
    };

    if (HCard) {
    return (
        <div className="HCard">
            <img src={currentImage} alt={`Hotel ${HCard?.name}`} className="room-image" loading='lazy' />
            <FaHeart className={`faHeart ${isFavorite ? "favorite" : ""}`} onClick={handleFavoriteClick} />

            <div className="image-thumbnails">
                <img
                    src={HCard?.gallery.image1}
                    alt="Thumbnail 1"
                    onClick={() => handleImageChange(HCard?.gallery.image1 ?? '')}
                    loading='lazy'
                />
                <img
                    src={HCard?.gallery.image2}
                    alt="Thumbnail 2"
                    onClick={() => handleImageChange(HCard?.gallery.image2 ?? '')} loading='lazy'
                />
                <img
                    src={HCard?.gallery.image3}
                    alt="Thumbnail 3"
                    onClick={() => handleImageChange(HCard?.gallery.image3 ?? '')} loading='lazy'
                />
                <img
                    src={HCard?.gallery.image4}
                    alt="Thumbnail 4"
                    onClick={() => handleImageChange(HCard?.gallery.image4 ?? '')} loading='lazy'
                />
            </div>
            <div className="des-card" onClick={handleCardClick}>
                <div className='cardHeader'>
                    <h2>{HCard?.name}</h2>
                    <p><FaStar className='faStar' />  {`   ${HCard?.starRating}`}</p>
                </div>


                <p>{HCard?.location}</p>
                <p>{HCard?.description}</p>
            </div>
        </div>
    );
    };

    return null;

}


export default Card;

