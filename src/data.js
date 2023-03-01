// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      '6-bedroom, 3-bathroom, 4,200 sq ft home located in a quiet suburban neighborhood. The home features an updated kitchen with stainless steel appliances, hardwood floors throughout, and a spacious backyard perfect for entertaining. Amenities include a two-car garage and central air conditioning..',
    image: House1,
    imageLg: House1Lg,
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4,200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'This beautiful 3-bedroom, 2-bathroom home is located in a quiet suburban neighborhood and boasts 1,800 square feet of living space. The home features an updated kitchen with stainless steel appliances, hardwood floors throughout, and a spacious backyard perfect for entertaining. Amenities include a two-car garage and central air conditioning.',
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1,800 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'This charming 4-bedroom, 3-bathroom Cape Cod-style home is located in a desirable neighborhood and boasts 2,000 square feet of living space. The home features a cozy fireplace in the living room, a fully finished basement, and a large deck overlooking the backyard. Amenities include a two-car garage and a newly installed central air conditioning system',
    image: House3,
    imageLg: House3Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '3',
    surface: '2,000 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'This stunning 5-bedroom, 4-bathroom colonial-style home is situated on a private lot and boasts 3,500 square feet of living space. The home boasts a grand two-story foyer, a gourmet kitchen with high-end appliances, and a finished basement with a full bar. Amenities include a three-car garage, central air conditioning, and an in-ground swimming pool.',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '4',
    surface: '3,500 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'This spacious 6-bedroom, 5-bathroom home is located in a prestigious gated community and boasts 4,500 square feet of living space. The home features a gourmet kitchen with granite countertops, a home theater, and a fully finished basement with a wet bar. Amenities include a three-car garage, central air conditioning, and a tennis court.',
    image: House5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '6',
    bathrooms: '5',
    surface: '4,500 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'This charming 2-bedroom, 1-bathroom bungalow-style home is located in a desirable neighborhood and boasts 1,200 square feet of living space. The home features a newly renovated kitchen and bathroom, hardwood floors throughout, and a cozy backyard. Amenities include a one-car garage and central air conditioning.',
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1,200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'This luxurious 4-bedroom, 3-bathroom home boasts stunning mountain views and 2,800 square feet of living space. The home boasts a spacious master suite with a fireplace, a gourmet kitchen with high-end appliances, and a fully finished basement with a home theater. Amenities include a three-car garage, central air conditioning, and an outdoor hot tub.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '2,800 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'This beautifully updated 3-bedroom, 2-bathroom ranch-style home is located on a quiet street and boasts 1,500 square feet of living space. The home features an open-concept living area, hardwood floors throughout, and a large backyard with a patio. Amenities include a one-car garage and central air conditioning.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1,500 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'This magnificent 7-bedroom, 6-bathroom home is situated on a sprawling estate and boasts 7,000 square feet of living space. The home boasts a grand two-story foyer, a gourmet kitchen with high-end appliances, and a finished basement with a full bar and home gym. Amenities include a four-car garage, central air conditioning, and an in-ground swimming pool with a cabana.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '7',
    bathrooms: '6',
    surface: '7,000 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'This charming 3-bedroom, 2-bathroom home is located in a quaint neighborhood and boasts 1,400 square feet of living space. The home features a newly renovated kitchen, hardwood floors throughout, and a large backyard with a deck. Amenities include a one-car garage and central air conditioning.',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1,400 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'This stunning 5-bedroom, 4-bathroom colonial-style home is situated on a private lot and boasts 3,500 square feet of living space. The home features a grand two-story foyer, a gourmet kitchen with high-end appliances, and a finished basement with a full bar. Amenities include a three-car garage, central air conditioning, and an in-ground swimming pool.',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '5',
    bathrooms: '4',
    surface: '3,500 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'This spacious 4-bedroom, 3-bathroom home is located in a quiet cul-de-sac and boasts 2,500 square feet of living space. The home features a newly renovated kitchen, hardwood floors throughout, and a large backyard with a deck. Amenities include a two-car garage and central air conditioning.',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '3',
    surface: '2,500 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'This luxurious 6-bedroom, 5-bathroom home boasts breathtaking ocean views and 4,000 square feet of living space. The home features a spacious master suite with a fireplace, a gourmet kitchen with high-end appliances, and a finished basement with a home theater. Amenities include a three-car garage, central air conditioning, and an outdoor hot tub.',
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '5',
    surface: '4,000 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'This charming 3-bedroom, 2-bathroom home is located in a quiet suburban neighborhood and boasts 1,500 square feet of living space. The home features a newly renovated kitchen with granite countertops, hardwood floors throughout, and a spacious backyard perfect for entertaining. Amenities include a one-car garage and central air conditioning.',
    image: House11,
    imageLg: House11Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '2',
    surface: '1,500 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'This cozy 2-bedroom, 1-bathroom ranch-style home is located in a desirable neighborhood and boasts 1,000 square feet of living space. The home features a fully updated kitchen and bathroom, hardwood floors throughout, and a large backyard with a patio. Amenities include a one-car garage and central air conditioning.',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1,000 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'This stunning 4-bedroom, 3-bathroom colonial-style home is situated on a private lot and boasts 2,500 square feet of living space. The home features a gourmet kitchen with high-end appliances, a formal dining room, and a finished basement with a full bar. Amenities include a two-car garage, central air conditioning, and an in-ground swimming pool.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '2,500 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'This spacious 5-bedroom, 4-bathroom home is located in a prestigious gated community and boasts 3,000 square feet of living space. The home features a gourmet kitchen with granite countertops, a home theater, and a fully finished basement with a wet bar. Amenities include a three-car garage, central air conditioning, and a tennis court.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '4',
    surface: '3,000 sq ft',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'This luxurious 5-bedroom, 4-bathroom home is located in a sought-after neighborhood and boasts 4,000 square feet of living space. The home features a grand two-story foyer, a gourmet kitchen with high-end appliances, and a finished basement with a home theater and game room. The spacious master suite includes a fireplace, walk-in closet, and a luxurious bathroom with a soaking tub. Amenities include a three-car garage, central air conditioning, and a beautifully landscaped backyard with a patio and outdoor kitchen perfect for entertaining. The home is also equipped with a security system and smart home technology for added convenience and peace of mind.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '4',
    surface: '4,000 sq ft',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
