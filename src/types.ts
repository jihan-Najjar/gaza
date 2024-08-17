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
    available: boolean;
    amenities: string[];
    gallery: { 
        image1:string,
        image2:string,
        image3:string,
        image4:string
      };
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
      rooms: number[]
  }










