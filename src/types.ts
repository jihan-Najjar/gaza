interface Capacity {
    adults: number;
    children: number;
  }
  
  export interface Room {
    id: number;
    hotelId: number;
    number: string;
    type: string;
    starRating:number;
    capacity: Capacity;
    price: number;

    amenities: string[];
    gallery: { 
        image1:string,
        image2:string,
        image3:string,
        image4:string
      };
      availabilityDates: Date[]

  }

  export interface Hotel {
    id: number;
    name:string,
    location:string
    starRating:number,
    description:string,
    amenities: string[],
    gallery: { 
        image1:string,
        image2:string,
        image3:string,
        image4:string
      };
      rooms: number[],
  }


  export interface FavoriteItem {
    id: number | string;
    type: 'room' | 'hotel';
  }


  export interface User {
    id: number;
    username: string;
    email: string;     
    password: string;
    role: 'user' | 'admin';
  }




