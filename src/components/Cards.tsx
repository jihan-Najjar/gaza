// import React, { useState } from 'react'
// import Card from './Card'
// import { Room, Hotel } from '../types';
// interface CardsProps {
//     rooms?: Room[];
//     hotels?: Hotel[];
// }
// const Cards: React.FC<CardsProps> = ({ rooms, hotels }) => {
//     const [favoriteList, setFavoriteList] = useState<(number | string)[]>([]);
//     const toggleFavorite = (id: number | string) => {
//         setFavoriteList(prev =>
//             prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
//         );
//     };
//     console.log(favoriteList)
//     console.log(rooms)
//     return (
//         <div className='cards'>
//             {
//                 rooms?.map((room) => (
//                     // {console.log(3)}
//                     <Card key={room.id} RCard={room} toggleFavorite={toggleFavorite} isFavorite={favoriteList.includes(room.id)} />
//                 ))
//             }
//             {
//                 hotels?.map((hotel) => (
//                     <Card key={hotel.id} HCard={hotel} toggleFavorite={toggleFavorite} isFavorite={favoriteList.includes(hotel.id)} />
//                 ))
//             }
//         </div>
//     )
// }

// export default Cards





import React, { useState } from 'react';
import Card from './Card';
import { Room, Hotel } from '../types';

interface CardsProps {
    rooms?: Room[];
    hotels?: Hotel[];
}

const Cards: React.FC<CardsProps> = ({ rooms, hotels }) => {
    const [favoriteList, setFavoriteList] = useState<(number | string)[]>([]);
    
    const toggleFavorite = (id: number | string) => {
        setFavoriteList(prev =>
            prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
        );
    };
    
    console.log('Favorite List:', favoriteList);
    console.log('Rooms:', rooms);
    console.log('Hotels:', hotels);

    return (
        <div className='cards'>
            {rooms?.map((room) => (
                <Card 
                    key={room.id} 
                    RCard={room} 
                    toggleFavorite={toggleFavorite} 
                    isFavorite={favoriteList.includes(room.id)} 
                />
            ))}
            {hotels?.map((hotel) => (
                <Card 
                    key={hotel.id} 
                    HCard={hotel} 
                    toggleFavorite={toggleFavorite} 
                    isFavorite={favoriteList.includes(hotel.id)} 
                />
            ))}
        </div>
    );
};

export default Cards;
