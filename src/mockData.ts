// import { Room } from './types';
import { Hotel,User, Room } from './types';


const users: User[] = [
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    password: "admin123",
    role: "admin"
  },
  {
    id: 2,
    username: "user1",
    email: "user1@example.com",
    password: "user1233",
    role: "user"
  },
  {
    id: 3,
    username: "user2",
    email: "user2@example.com",
    password: "user456",
    role: "user"
  },
  {
    id: 4,
    username: "admin2",
    email: "admin2@example.com",
    password: "admin12",
    role: "admin"
  },
  {
    id: 5,
    username: "user3",
    email: "user3@example.com",
    password: "user1234",
    role: "user"
  },
  {
    id: 6,
    username: "user4",
    email: "user4@example.com",
    password: "user5678",
    role: "user"
  }
];

export { users };


  const rooms: Room[] = [
    {
      id: 101,
      hotelId: 1,
      number: "101",
      type: "Deluxe",
      starRating:5,
      capacity: {
        adults: 2,
        children: 1
      },
      price: 150,
 
      amenities: ["Free Breakfast", "Ocean View"],
      gallery: {
        image1: require("./assets/images/Ra1.webp"),
        image2: require("./assets/images/Ra2.webp"),
        image3: require("./assets/images/Ra3.webp"),
        image4: require("./assets/images/Ra4.webp"),
      },
      availabilityDates: [
        new Date(2024, 9, 25),
        new Date(2024, 9, 26),
        new Date(2024, 9, 28),
      ]
    },
    {
      id: 102,
      hotelId: 1,
      number: "102",
      starRating:4.1,
      type: "Suite",
      capacity: {
        adults: 4,
        children: 2
      },
      price: 300,
      amenities: ["Free Breakfast", "Living Room", "Kitchen"],
      gallery: {
        image1: require("./assets/images/Rb1.webp"),
        image2: require("./assets/images/Rb2.webp"),
        image3: require("./assets/images/Rb3.webp"),
        image4: require("./assets/images/Rb4.webp"),
      },
      availabilityDates: [
        new Date(2024, 7, 25),
        new Date(2024, 7, 26),
        new Date(2024, 7, 28),
      ]
    },
    {
      id: 103,
      hotelId: 1,
      number: "201",
      type: "Standard",
      starRating:4.1,
      capacity: {
        adults: 2,
        children: 0
      },
      price: 100,
 
      amenities: ["Free Wi-Fi", "Garden View"],
      gallery: {
        image1: require("./assets/images/Rc1.webp"),
        image2: require("./assets/images/Rc2.webp"),
        image3: require("./assets/images/Rc3.webp"),
        image4: require("./assets/images/Rc4.webp"),
      },
      availabilityDates: [
        new Date(2024, 7, 25),
        new Date(2024, 7, 26),
        new Date(2024, 7, 28),
      ]
    },
    {
      id: 104,
      hotelId: 1,
      number: "104",
      type: "Deluxe",
      starRating:4.86,
      capacity: {
        adults: 2,
        children: 1
      },
      price: 200,
 
      amenities: ["Free Breakfast", "Sea View"],
      gallery: {
        image1: require("./assets/images/Rd1.webp"),
        image2: require("./assets/images/Rd2.webp"),
        image3: require("./assets/images/Rd3.webp"),
        image4: require("./assets/images/Rd4.webp"),
      },
      availabilityDates: [
        new Date(2024, 7, 25),
        new Date(2024, 7, 26),
        new Date(2024, 7, 28),
      ]
    },
    {
      id: 105,
      hotelId: 1,
      number: "105",
      type: "Suite",
      starRating:4.41,
      capacity: {
        adults: 4,
        children: 2
      },
      price: 350,
      amenities: ["Free Wi-Fi", "Private Pool", "Kitchen"],
      gallery: {
        image1: require("./assets/images/Re1.webp"),
        image2: require("./assets/images/Re2.webp"),
        image3: require("./assets/images/Re3.webp"),
        image4: require("./assets/images/Re4.webp"),
      },
      availabilityDates: [
        new Date(2024, 7, 25),
        new Date(2024, 7, 26),
        new Date(2024, 7, 28),
      ]
    },
    {
      id: 106,
      hotelId: 1,
      number: "106",
      type: "Standard",
      starRating:4.91,
      capacity: {
        adults: 2,
        children: 0
      },
      price: 120,
 
      amenities: ["Free Wi-Fi", "Mountain View"],
      gallery: {
        image1: require("./assets/images/Rf1.webp"),
        image2: require("./assets/images/Rf2.webp"),
        image3: require("./assets/images/Rf3.webp"),
        image4: require("./assets/images/Rf4.webp"),
      },
      availabilityDates: [
        new Date(2024, 7, 25),
        new Date(2024, 7, 26),
        new Date(2024, 7, 28),
      ]
    },
    {
      id: 107,
      hotelId: 1,
      number: "107",
      type: "Deluxe",
      starRating:4.69,
      capacity: {
        adults: 3,
        children: 1
      },
      price: 180,
 
      amenities: ["Free Breakfast", "City View"],
      gallery: {
        image1: require("./assets/images/Rg1.webp"),
        image2: require("./assets/images/Rg2.webp"),
        image3: require("./assets/images/Rg3.webp"),
        image4: require("./assets/images/Rg4.webp"),
      },
      availabilityDates: [
        new Date(2024, 7, 25),
        new Date(2024, 7, 26),
        new Date(2024, 7, 28),
      ]
    },
    {
      id: 201,
      hotelId: 2,
      number: "201",
      type: "Suite",
      starRating:4.76,
      capacity: {
        adults: 4,
        children: 2
      },
      price: 400,
      amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
      gallery: {
        image1: require("./assets/images/Rh1.webp"),
        image2: require("./assets/images/Rh2.webp"),
        image3: require("./assets/images/Rh3.webp"),
        image4: require("./assets/images/Rh4.webp"),
      },
      availabilityDates: [
        new Date(2024, 7, 25),
        new Date(2024, 7, 26),
        new Date(2024, 7, 28),
      ]
    },
    {
        id: 202,
        hotelId: 2,
        number: "202",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 204,
        hotelId: 2,
        number: "204",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 205,
        hotelId: 2,
        number: "205",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, 
      {
        id: 206,
        hotelId: 2,
        number: "206",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 207,
        hotelId: 2,
        number: "207",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 301,
        hotelId: 3,
        number: "301",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 302,
        hotelId: 3,
        number: "302",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 303,
        hotelId: 3,
        number: "303",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 304,
        hotelId: 3,
        number: "304",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 305,
        hotelId: 3,
        number: "305",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 306,
        hotelId: 3,
        number: "306",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 307,
        hotelId: 3,
        number: "307",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 308,
        hotelId: 3,
        number: "308",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 401,
        hotelId: 4,
        number: "401",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 402,
        hotelId: 4,
        number: "402",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 403,
        hotelId: 4,
        number: "403",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 404,
        hotelId: 4,
        number: "404",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 405,
        hotelId: 4,
        number: "405",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 406,
        hotelId: 4,
        number: "406",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 407,
        hotelId: 4,
        number: "407",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 408,
        hotelId: 4,
        number: "408",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 409,
        hotelId: 4,
        number: "409",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 501,
        hotelId: 5,
        number: "501",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 502,
        hotelId: 5,
        number: "502",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 503,
        hotelId: 5,
        number: "503",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 504,
        hotelId: 5,
        number: "504",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 505,
        hotelId: 5,
        number: "505",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 506,
        hotelId: 5,
        number: "506",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 507,
        hotelId: 5,
        number: "507",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 601,
        hotelId: 6,
        number: "601",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 602,
        hotelId: 6,
        number: "602",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 603,
        hotelId: 6,
        number: "603",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        }, availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 604,
        hotelId: 6,
        number: "604",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 605,
        hotelId: 6,
        number: "605",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 606,
        hotelId: 6,
        number: "606",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 607,
        hotelId: 6,
        number: "607",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 608,
        hotelId: 6,
        number: "608",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 609,
        hotelId: 6,
        number: "609",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 610,
        hotelId: 6,
        number: "610",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 701,
        hotelId: 7,
        number: "701",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 702,
        hotelId: 7,
        number: "702",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 703,
        hotelId: 7,
        number: "703",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        }, 
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 704,
        hotelId: 7,
        number: "704",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 705,
        hotelId: 7,
        number: "705",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 706,
        hotelId: 7,
        number: "706",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 707,
        hotelId: 7,
        number: "707",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 801,
        hotelId: 8,
        number: "801",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 802,
        hotelId: 8,
        number: "802",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 803,
        hotelId: 8,
        number: "803",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 804,
        hotelId: 8,
        number: "804",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 805,
        hotelId: 8,
        number: "805",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 806,
        hotelId: 8,
        number: "806",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 422,
        hotelId: 3,
        number: "244",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 807,
        hotelId: 8,
        number: "807",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 809,
        hotelId: 8,
        number: "809",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 901,
        hotelId: 9,
        number: "901",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 902,
        hotelId: 9,
        number: "902",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 903,
        hotelId: 9,
        number: "903",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 904,
        hotelId: 9,
        number: "904",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 905,
        hotelId: 9,
        number: "905",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 906,
        hotelId: 9,
        number: "906",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 908,
        hotelId: 9,
        number: "908",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 907,
        hotelId: 9,
        number: "907",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      }, {
        id: 1001,
        hotelId: 10,
        number: "1001",
        type: "Deluxe",
        starRating:4.2,
        capacity: {
          adults: 2,
          children: 2
        },
        price: 500,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Ri1.webp"),
          image2: require("./assets/images/Ri2.webp"),
          image3: require("./assets/images/Ri3.webp"),
          image4: require("./assets/images/Ri4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 1002,
        hotelId: 10,
        number: "1002",
        type: "Suite",
        starRating:4.45,
        capacity: {
          adults: 2,
          children: 0
        },
        price:350,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rj1.webp"),
          image2: require("./assets/images/RJ2.webp"),
          image3: require("./assets/images/Rj3.webp"),
          image4: require("./assets/images/Rj4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 1003,
        hotelId: 10,
        number: "1003",
        type: "Suite",
        starRating:4.87,
        capacity: {
          adults: 4,
          children: 0
        },
        price: 450,
   
        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rk1.webp"),
          image2: require("./assets/images/Rk2.webp"),
          image3: require("./assets/images/Rk3.webp"),
          image4: require("./assets/images/Rk4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },  {
        id: 1004,
        hotelId: 10,
        number: "1004",
        type: "Deluxe",
        starRating:5,
        capacity: {
          adults: 2,
          children: 1
        },
        price: 150,
   
        amenities: ["Free Breakfast", "Ocean View"],
        gallery: {
          image1: require("./assets/images/Ra1.webp"),
          image2: require("./assets/images/Ra2.webp"),
          image3: require("./assets/images/Ra3.webp"),
          image4: require("./assets/images/Ra4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },
      {
        id: 1005,
        hotelId: 5,
        number: "1005",
        starRating:4.1,
        type: "Suite",
        capacity: {
          adults: 4,
          children: 2
        },
        price: 300,

        amenities: ["Free Breakfast", "Living Room", "Kitchen"],
        gallery: {
          image1: require("./assets/images/Rb1.webp"),
          image2: require("./assets/images/Rb2.webp"),
          image3: require("./assets/images/Rb3.webp"),
          image4: require("./assets/images/Rb4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },
      {
        id: 1006,
        hotelId: 10,
        number: "1006",
        type: "Standard",
        starRating:4.1,
        capacity: {
          adults: 2,
          children: 0
        },
        price: 100,
   
        amenities: ["Free Wi-Fi", "Garden View"],
        gallery: {
          image1: require("./assets/images/Rc1.webp"),
          image2: require("./assets/images/Rc2.webp"),
          image3: require("./assets/images/Rc3.webp"),
          image4: require("./assets/images/Rc4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },
      {
        id: 1007,
        hotelId: 10,
        number: "1007",
        type: "Deluxe",
        starRating:4.86,
        capacity: {
          adults: 2,
          children: 1
        },
        price: 200,
   
        amenities: ["Free Breakfast", "Sea View"],
        gallery: {
          image1: require("./assets/images/Rd1.webp"),
          image2: require("./assets/images/Rd2.webp"),
          image3: require("./assets/images/Rd3.webp"),
          image4: require("./assets/images/Rd4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },
      {
        id: 1008,
        hotelId: 10,
        number: "1008",
        type: "Suite",
        starRating:4.41,
        capacity: {
          adults: 4,
          children: 2
        },
        price: 350,

        amenities: ["Free Wi-Fi", "Private Pool", "Kitchen"],
        gallery: {
          image1: require("./assets/images/Re1.webp"),
          image2: require("./assets/images/Re2.webp"),
          image3: require("./assets/images/Re3.webp"),
          image4: require("./assets/images/Re4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },
      {
        id: 1009,
        hotelId: 10,
        number: "1009",
        type: "Standard",
        starRating:4.91,
        capacity: {
          adults: 2,
          children: 0
        },
        price: 120,
   
        amenities: ["Free Wi-Fi", "Mountain View"],
        gallery: {
          image1: require("./assets/images/Rf1.webp"),
          image2: require("./assets/images/Rf2.webp"),
          image3: require("./assets/images/Rf3.webp"),
          image4: require("./assets/images/Rf4.webp"),
        },
        availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },
      {
        id: 1010,
        hotelId: 10,
        number: "1010",
        type: "Deluxe",
        starRating:4.69,
        capacity: {
          adults: 3,
          children: 1
        },
        price: 180,
   
        amenities: ["Free Breakfast", "City View"],
        gallery: {
          image1: require("./assets/images/Rg1.webp"),
          image2: require("./assets/images/Rg2.webp"),
          image3: require("./assets/images/Rg3.webp"),
          image4: require("./assets/images/Rg4.webp"),
        }, availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },
      {
        id: 1011,
        hotelId: 10,
        number: "1011",
        type: "Suite",
        starRating:4.76,
        capacity: {
          adults: 4,
          children: 2
        },
        price: 400,

        amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
        gallery: {
          image1: require("./assets/images/Rh1.webp"),
          image2: require("./assets/images/Rh2.webp"),
          image3: require("./assets/images/Rh3.webp"),
          image4: require("./assets/images/Rh4.webp"),
        }, availabilityDates: [
          new Date(2024, 7, 25),
          new Date(2024, 7, 26),
          new Date(2024, 7, 28),
        ]
      },
      {
          id: 1012,
          hotelId: 10,
          number: "1012",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1101,
          hotelId: 11,
          number: "1101",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1102,
          hotelId: 11,
          number: "1102",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, 
        {
          id: 1103,
          hotelId: 11,
          number: "1103",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1104,
          hotelId: 11,
          number: "1104",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1105,
          hotelId: 11,
          number: "1105",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1106,
          hotelId: 11,
          number: "1106",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1107,
          hotelId: 11,
          number: "1107",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1108,
          hotelId: 11,
          number: "1108",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1201,
      hotelId: 12,
          number: "1201",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1202,
      hotelId: 12,
          number: "1202",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1203,
      hotelId: 12,
          number: "1203",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1204,
      hotelId: 12,
          number: "1204",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1205,
          hotelId: 12,
          number: "1205",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1206,
          hotelId: 12,
          number: "1206",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1207,
          hotelId: 12,
          number: "1207",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1301,
          hotelId: 13,
          number: "1301",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1302,
     hotelId: 13,
          number: "1302",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1303,
     hotelId: 13,
          number: "1303",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1304,
     hotelId: 13,
          number: "1304",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1305,
     hotelId: 13,
          number: "1305",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1306,
     hotelId: 13,
          number: "1306",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1307,
          hotelId: 13,
          number: "1307",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1308,
          hotelId: 13,
          number: "1308",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1401,
            hotelId: 14,
          number: "1401",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1402,
            hotelId: 14,
          number: "1402",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1403,
            hotelId: 14,
          number: "1403",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1404,
            hotelId: 14,
          number: "1404",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1405,
            hotelId: 14,
          number: "1405",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1406,
          hotelId: 14,
          number: "1406",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1501,
          hotelId: 15,
          number: "1501",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1502,
          hotelId: 15,
          number: "1502",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1503,
          hotelId: 15,
          number: "1503",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1504,
          hotelId: 15,
          number: "1504",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1505,
          hotelId: 15,
          number: "1505",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1506,
          hotelId: 15,
          number: "1506",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1507,
          hotelId: 15,
          number: "1507",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1508,
          hotelId: 15,
          number: "1508",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1601,
          hotelId: 16,
          number: "1601",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1602,
          hotelId: 16,
          number: "1602",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1603,
          hotelId: 16,
          number: "1603",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1604,
          hotelId: 16,
          number: "1604",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1605,
          hotelId: 16,
          number: "1605",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1606,
          hotelId: 16,
          number: "1606",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1607,
          hotelId: 16,
          number: "1607",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1701,
          hotelId: 17,
          number: "1701",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1702,
         hotelId: 17,
          number: "1702",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1703,
         hotelId: 17,
          number: "1703",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1704,
         hotelId: 17,
          number: "1704",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1705,
         hotelId: 17,
          number: "1705",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1706,
         hotelId: 17,
          number: "1706",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1707,
         hotelId: 17,
          number: "1707",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1708,
          hotelId: 17,
          number: "1708",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1709,
         hotelId: 17,
          number: "1709",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1710,
         hotelId: 17,
          number: "1710",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1801,
          hotelId:18,
          number: "1801",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1802,
          hotelId:18,
          number: "1802",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1803,
          hotelId:18,
          number: "1803",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1804,
          hotelId:18,
          number: "1804",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1805,
          hotelId:18,
          number: "1805",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1806,
          hotelId:18,
          number: "1806",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1807,
          hotelId:18,
          number: "1807",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1808,
          hotelId:18,
          number: "1808",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1809,
          hotelId: 18,
          number: "1809",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1810,
          hotelId: 18,
          number: "1810",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1811,
          hotelId: 18,
          number: "1811",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, 
        {
          id: 1812,
     hotelId: 18,
          number: "1812",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1901,
     hotelId: 19,
          number: "1901",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1902,
     hotelId: 19,
          number: "1902",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1903,
          hotelId: 19,
          number: "1903",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1904,
          hotelId: 19,
          number: "1904",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1905,
            hotelId: 19,
          number: "1905",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1906,
            hotelId: 19,
          number: "1906",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1907,
            hotelId: 19,
          number: "1907",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
     
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          }, availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 1908,
            hotelId: 19,
          number: "1908",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
  
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 1909,
            hotelId: 19,
          number: "1909",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
   
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 2001,
          hotelId: 20,
          number: "2001",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
   
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 2002,
          hotelId: 20,
          number: "2002",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,

          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 2003,
          hotelId: 20,
          number: "2003",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
   
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 2004,
          hotelId: 20,
          number: "2004",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
         
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 2005,
          hotelId: 20,
          number: "2005",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
    
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 2006,
          hotelId: 20,
          number: "2006",
          type: "Suite",
          starRating:4.45,
          capacity: {
            adults: 2,
            children: 0
          },
          price:350,
 
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rj1.webp"),
            image2: require("./assets/images/RJ2.webp"),
            image3: require("./assets/images/Rj3.webp"),
            image4: require("./assets/images/Rj4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        },  {
          id: 2007,
          hotelId: 20,
          number: "2007",
          type: "Suite",
          starRating:4.87,
          capacity: {
            adults: 4,
            children: 0
          },
          price: 450,
    
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Rk1.webp"),
            image2: require("./assets/images/Rk2.webp"),
            image3: require("./assets/images/Rk3.webp"),
            image4: require("./assets/images/Rk4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]
        }, {
          id: 2008,
          hotelId: 20,
          number: "2008",
          type: "Deluxe",
          starRating:4.2,
          capacity: {
            adults: 2,
            children: 2
          },
          price: 500,
          amenities: ["Free Wi-Fi", "Private Balcony", "Hot Tub"],
          gallery: {
            image1: require("./assets/images/Ri1.webp"),
            image2: require("./assets/images/Ri2.webp"),
            image3: require("./assets/images/Ri3.webp"),
            image4: require("./assets/images/Ri4.webp"),
          },
          availabilityDates: [
            new Date(2024, 7, 25),
            new Date(2024, 7, 26),
            new Date(2024, 7, 28),
          ]

        }, 
  ];
  
  export { rooms };
  const hotels: Hotel[] = [
    {
      id: 1,
      name: "Serenity",
      location: "Istanbul, Turkey",
      starRating: 4.6,
      description: "Experience peace and luxury in the heart of Istanbul.",
      gallery: {
        image1: require("./assets/images/Ha1.webp"),
        image2: require("./assets/images/Ha2.webp"),
        image3: require("./assets/images/Ha3.webp"),
        image4: require("./assets/images/Ha4.webp"),
      },
      amenities: ["Free Wi-Fi", "Spa", "Rooftop Bar"],
      rooms: [101, 102, 103, 104, 105, 106, 107],
    },
    {
      id: 2,
      name: "Mountain View Lodge",
      location: "Dubai, UAE",
      starRating: 4.3,
      description: "Enjoy breathtaking views of the city skyline.",
      gallery: {
        image1: require("./assets/images/Hb1.webp"),
        image2: require("./assets/images/Hb2.webp"),
        image3: require("./assets/images/Hb3.webp"),
        image4: require("./assets/images/Hb4.webp"),
      },
      amenities: ["Free Wi-Fi", "Hiking Trails", "Hot Tub"],
      rooms: [201, 202, 203, 204, 205, 206, 207],
    },
    {
      id: 3,
      name: "Seaside Escape",
      location: "Doha, Qatar",
      starRating: 4.9,
      description: "Luxury meets tranquility by the sea.",
      gallery: {
        image1: require("./assets/images/Hc1.webp"),
        image2: require("./assets/images/Hc2.webp"),
        image3: require("./assets/images/Hc3.webp"),
        image4: require("./assets/images/Hc4.webp"),
      },
      amenities: ["Free Wi-Fi", "Ocean View", "Private Beach"],
      rooms: [301, 302, 303, 304, 305, 306, 307, 308],
    },
    {
      id: 4,
      name: "Urban Retreat",
      location: "Cairo, Egypt",
      starRating: 4.2,
      description: "A chic getaway in the heart of Cairo.",
      gallery: {
        image1: require("./assets/images/Hd1.webp"),
        image2: require("./assets/images/Hd2.webp"),
        image3: require("./assets/images/Hd3.webp"),
        image4: require("./assets/images/Hd4.webp"),
      },
      amenities: ["Free Wi-Fi", "Gym", "Concierge Service"],
      rooms: [401, 402, 403, 404, 405, 406, 407, 408, 409],
    },
    {
      id: 5,
      name: "Historic Haven",
      location: "Amman, Jordan",
      starRating: 4.7,
      description: "Immerse yourself in history with modern comforts.",
      gallery: {
        image1: require("./assets/images/He1.webp"),
        image2: require("./assets/images/He2.webp"),
        image3: require("./assets/images/He3.webp"),
        image4: require("./assets/images/He4.webp"),
      },
      amenities: ["Free Wi-Fi", "Historic Tours", "Library"],
      rooms: [501, 502, 503, 504, 505, 506, 507],
    },
    {
      id: 6,
      name: "Desert Oasis",
      location: "Riyadh, Saudi Arabia",
      starRating: 4.1,
      description: "An oasis in the heart of the desert.",
      gallery: {
        image1: require("./assets/images/Hf1.webp"),
        image2: require("./assets/images/Hf2.webp"),
        image3: require("./assets/images/Hf3.webp"),
        image4: require("./assets/images/Hf4.webp"),
      },
      amenities: ["Free Wi-Fi", "Pool", "Golf Course"],
      rooms: [601, 602, 603, 604, 605, 606, 607, 608, 609, 610],
    },
    {
      id: 7,
      name: "City Lights Hotel",
      location: "Beirut, Lebanon",
      starRating: 4.4,
      description: "A vibrant stay in the city that never sleeps.",
      gallery: {
        image1: require("./assets/images/Hg1.webp"),
        image2: require("./assets/images/Hg2.webp"),
        image3: require("./assets/images/Hg3.webp"),
        image4: require("./assets/images/Hg4.webp"),
      },
      amenities: ["Free Wi-Fi", "Casino", "Night Club"],
      rooms: [701, 702, 703, 704, 705, 706, 707],
    },
    {
      id: 8,
      name: "Ocean Breeze Resort",
      location: "Marrakech, Morocco",
      starRating: 4.8,
      description: "Relax with the sound of the waves.",
      gallery: {
        image1: require("./assets/images/Hh1.webp"),
        image2: require("./assets/images/Hh2.webp"),
        image3: require("./assets/images/Hh3.webp"),
        image4: require("./assets/images/Hh4.webp"),
      },
      amenities: ["Free Wi-Fi", "Beachfront", "Water Sports"],
      rooms: [801, 802, 803, 804, 805, 806, 807, 808, 809],
    },
    {
      id: 9,
      name: "Countryside Inn",
      location: "Muscat, Oman",
      starRating: 4.3,
      description: "Country charm with modern amenities.",
      gallery: {
        image1: require("./assets/images/Ha4.webp"),
        image2: require("./assets/images/Ha3.webp"),
        image3: require("./assets/images/Ha1.webp"),
        image4: require("./assets/images/Ha2.webp"),
      },
      amenities: ["Free Wi-Fi", "Live Music", "BBQ Area"],
      rooms: [901, 902, 903, 904, 905, 906, 907, 908],
    },
    {
      id: 10,
      name: "Grand Palace",
      location: "Istanbul, Turkey",
      starRating: 4.9,
      description: "An opulent stay near the magic of the city.",
      gallery: {
        image1: require("./assets/images/Hb3.webp"),
        image2: require("./assets/images/Hb4.webp"),
        image3: require("./assets/images/Hb1.webp"),
        image4: require("./assets/images/Hb2.webp"),
      },
      amenities: ["Free Wi-Fi", "Spa", "Theme Park Shuttle"],
      rooms: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012],
    },
    {
      id: 11,
      name: "Eco Lodge",
      location: "Dubai, UAE",
      starRating: 4.5,
      description: "Sustainable living with luxury.",
      gallery: {
        image1: require("./assets/images/Hc3.webp"),
        image2: require("./assets/images/Hc2.webp"),
        image3: require("./assets/images/Hc1.webp"),
        image4: require("./assets/images/Hc4.webp"),
      },
      amenities: ["Free Wi-Fi", "Organic Dining", "Eco Tours"],
      rooms: [1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108],
    },
    {
      id: 12,
      name: "Cultural Haven",
      location: "Cairo, Egypt",
      starRating: 4.4,
      description: "A blend of culture and comfort in the city.",
      gallery: {
        image1: require("./assets/images/Hd3.webp"),
        image2: require("./assets/images/Hd2.webp"),
        image3: require("./assets/images/Hd4.webp"),
        image4: require("./assets/images/Hd1.webp"),
      },
      amenities: ["Free Wi-Fi", "Art Gallery", "Cultural Events"],
      rooms: [1201, 1202, 1203, 1204, 1205, 1206, 1207],
    },
    {
      id: 13,
      name: "Luxury Highlands",
      location: "Istanbul, Turkey",
      starRating: 4.8,
      description: "Ski in style with unparalleled luxury.",
      gallery: {
        image1: require("./assets/images/He3.webp"),
        image2: require("./assets/images/He2.webp"),
        image3: require("./assets/images/He1.webp"),
        image4: require("./assets/images/He4.webp"),
      },
      amenities: ["Free Wi-Fi", "Ski-In/Ski-Out", "Hot Tub"],
      rooms: [1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308],
    },
    
    {
      id: 14,
      name: "Urban Chic Hotel",
      location: "New York, USA",
      starRating: 4.9,
      description: "A modern escape in the heart of the city.",
      gallery: {
        image1: require("./assets/images/Hf2.webp"),
        image2: require("./assets/images/Hf4.webp"),
        image3: require("./assets/images/Hf3.webp"),
        image4: require("./assets/images/Hf1.webp"),
      },
      amenities: ["Free Wi-Fi", "Fitness Center", "Rooftop Lounge"],
      rooms: [1401, 1402, 1403, 1404, 1405, 1406],
    },
    {
      id: 15,
      name: "Lakeside Resort",
      location: "Lake Tahoe, USA",
      starRating: 4.7,
      description: "Tranquil retreat by the lake.",
      gallery: {
        image1: require("./assets/images/Hg2.webp"),
        image2: require("./assets/images/Hg3.webp"),
        image3: require("./assets/images/Hg1.webp"),
        image4: require("./assets/images/Hg4.webp"),
      },
      amenities: ["Free Wi-Fi", "Water Sports", "Lake View Dining"],
      rooms: [1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508],
    },
    {
      id: 16,
      name: "Desert Mirage",
      location: "Palm Springs, USA",
      starRating: 4.6,
      description: "Luxury in the heart of the desert.",
      gallery: {
        image1: require("./assets/images/Ha3.webp"),
        image2: require("./assets/images/Hb2.webp"),
        image3: require("./assets/images/Hc3.webp"),
        image4: require("./assets/images/He4.webp"),
      },
      amenities: ["Free Wi-Fi", "Golf Course", "Spa"],
      rooms: [1601, 1602, 1603, 1604, 1605, 1606, 1607],
    },
    {
      id: 17,
      name: "Forest Glade Resort",
      location: "Yosemite, USA",
      starRating: 4.5,
      description: "A serene getaway surrounded by nature.",
      gallery: {
        image1: require("./assets/images/Hh4.webp"),
        image2: require("./assets/images/Hh2.webp"),
        image3: require("./assets/images/Hh3.webp"),
        image4: require("./assets/images/Hh1.webp"),
      },
      amenities: ["Free Wi-Fi", "Hiking Trails", "Outdoor Pool"],
      rooms: [1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710],
    },
    {
      id: 18,
      name: "Island Paradise",
      location: "Honolulu, USA",
      starRating: 4.8,
      description: "Tropical luxury on the shores of Waikiki.",
      gallery: {
        image1: require("./assets/images/Hd1.webp"),
        image2: require("./assets/images/Hf2.webp"),
        image3: require("./assets/images/Ha3.webp"),
        image4: require("./assets/images/Hc4.webp"),
      },
      amenities: ["Free Wi-Fi", "Beachfront", "Water Sports"],
      rooms: [1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812],
    },
    {
      id: 19,
      name: "Alpine Retreat",
      location: "Vail, USA",
      starRating: 4.7,
      description: "Luxury and adventure in the Rockies.",
      gallery: {
        image1: require("./assets/images/Hb2.webp"),
        image2: require("./assets/images/Hc2.webp"),
        image3: require("./assets/images/He3.webp"),
        image4: require("./assets/images/He4.webp"),
      },
      amenities: ["Free Wi-Fi", "Ski-In/Ski-Out", "Hot Tub"],
      rooms: [1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909],
    },
    {
      id: 20,
      name: "Sunset Beach Resort",
      location: "Santa Monica, USA",
      starRating: 4.6,
      description: "Relaxation and luxury on the California coast.",
      gallery: {
        image1: require("./assets/images/Hh4.webp"),
        image2: require("./assets/images/Hf3.webp"),
        image3: require("./assets/images/He4.webp"),
        image4: require("./assets/images/Hg3.webp"),
      },
      amenities: ["Free Wi-Fi", "Beachfront", "Ocean View Dining"],
      rooms: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
    }
  ];
  export {hotels}