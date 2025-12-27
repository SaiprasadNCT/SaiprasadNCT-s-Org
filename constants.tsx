
import React from 'react';
import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'chaat',
    hindiTitle: 'चाट का चटखारा',
    englishTitle: 'Chaat Delights',
    items: [
      {
        id: 'c1',
        hindiName: 'पानी पूरी',
        englishName: 'Pani Puri',
        description: 'Crispy hollow puris filled with spiced mint water and tamarind chutney.',
        price: 50,
        image: 'https://picsum.photos/seed/panipuri/400/300'
      },
      {
        id: 'c2',
        hindiName: 'समोसा चाट',
        englishName: 'Samosa Chaat',
        description: 'Crushed samosas topped with spicy chickpeas, yogurt, and tangly chutneys.',
        price: 70,
        image: 'https://picsum.photos/seed/samosa/400/300'
      },
      {
        id: 'c3',
        hindiName: 'आलू टिक्की',
        englishName: 'Aloo Tikki',
        description: 'Griddle-fried potato patties served with zesty spices.',
        price: 60,
        image: 'https://picsum.photos/seed/alootikki/400/300'
      }
    ]
  },
  {
    id: 'appetizers',
    hindiTitle: 'शुरुआत',
    englishTitle: 'Appetizers',
    items: [
      {
        id: 'a1',
        hindiName: 'अमृतसरी मछली',
        englishName: 'Fish Amritsari',
        description: 'Deep-fried fish fillets marinated in a traditional blend of gram flour and spices.',
        price: 320,
        image: 'https://picsum.photos/seed/fishamritsari/400/300'
      },
      {
        id: 'a2',
        hindiName: 'सब्जी पकौड़ा',
        englishName: 'Veg Pakora',
        description: 'Crispy vegetable fritters served with our signature mint-coriander chutney.',
        price: 120,
        image: 'https://picsum.photos/seed/vegpakora/400/300'
      },
      {
        id: 'a3',
        hindiName: 'हरा भरा कबाब',
        englishName: 'Hara Bhara Kabab',
        description: 'Deep-fried spinach and green pea patties seasoned with royal Indian herbs.',
        price: 180,
        image: 'https://picsum.photos/seed/harabhara/400/300'
      }
    ]
  },
  {
    id: 'tandoor',
    hindiTitle: 'तंदूर का स्वाद',
    englishTitle: 'Tandoori Treasures',
    items: [
      {
        id: 't1',
        hindiName: 'तंदूरी चिकन',
        englishName: 'Tandoori Chicken',
        description: 'Succulent chicken marinated in yogurt and spices, roasted in clay oven.',
        price: 350,
        image: 'https://picsum.photos/seed/tandoori/400/300'
      },
      {
        id: 't2',
        hindiName: 'पनीर टिक्का',
        englishName: 'Paneer Tikka',
        description: 'Cubes of cottage cheese grilled with bell peppers and onions.',
        price: 220,
        image: 'https://picsum.photos/seed/paneer/400/300'
      }
    ]
  },
  {
    id: 'maincourse',
    hindiTitle: 'मुख्य भोजन',
    englishTitle: 'Main Course',
    items: [
      {
        id: 'm1',
        hindiName: 'दाल मखनी',
        englishName: 'Dal Makhani',
        description: 'Black lentils slow-cooked overnight with butter and cream for a rich, velvety texture.',
        price: 250,
        image: 'https://picsum.photos/seed/dalmakhani/400/300'
      },
      {
        id: 'm2',
        hindiName: 'बटर चिकन',
        englishName: 'Butter Chicken',
        description: 'Tender tandoori chicken simmered in a creamy, tomato-based gravy with plenty of butter.',
        price: 450,
        image: 'https://picsum.photos/seed/butterchicken/400/300'
      },
      {
        id: 'm3',
        hindiName: 'सरसों का साग',
        englishName: 'Sarson Ka Saag',
        description: 'Traditional Punjabi dish made from mustard greens and spices, best with Makki di Roti.',
        price: 280,
        image: 'https://picsum.photos/seed/saag/400/300'
      },
      {
        id: 'm4',
        hindiName: 'पनीर बटर मसाला',
        englishName: 'Paneer Butter Masala',
        description: 'Soft paneer cubes cooked in a mildly spiced, rich gravy with a touch of honey.',
        price: 320,
        image: 'https://picsum.photos/seed/paneerbutter/400/300'
      }
    ]
  },
  {
    id: 'sweets',
    hindiTitle: 'मीठा हो जाए',
    englishTitle: 'Sweet Indulgences',
    items: [
      {
        id: 's1',
        hindiName: 'केसर जलेबी',
        englishName: 'Kesar Jalebi',
        description: 'Deep-fried swirls soaked in saffron-infused sugar syrup.',
        price: 120,
        image: 'https://picsum.photos/seed/jalebi/400/300'
      },
      {
        id: 's2',
        hindiName: 'गुलाब जामुन',
        englishName: 'Gulab Jamun',
        description: 'Soft milk dumplings fried and dipped in cardamom syrup.',
        price: 80,
        image: 'https://picsum.photos/seed/gulab/400/300'
      }
    ]
  },
  {
    id: 'drinks',
    hindiTitle: 'ठंडा ठंडा',
    englishTitle: 'Cool Refreshments',
    items: [
      {
        id: 'd1',
        hindiName: 'मलाई लस्सी',
        englishName: 'Malai Lassi',
        description: 'Thick, creamy yogurt drink topped with a dollop of fresh cream.',
        price: 90,
        image: 'https://picsum.photos/seed/lassi/400/300'
      },
      {
        id: 'd2',
        hindiName: 'मसाला चाय',
        englishName: 'Masala Chai',
        description: 'Authentic Indian spiced tea brewed with ginger and cardamom.',
        price: 30,
        image: 'https://picsum.photos/seed/tea/400/300'
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    hindi: "लाजवाब स्वाद! बिलकुल घर जैसा।",
    english: "Incredible taste! Just like home-cooked food.",
    author: "Priya Sharma",
    role: "Local Food Enthusiast"
  },
  {
    hindi: "पनीर टिक्का और लस्सी का कोई जवाब नहीं।",
    english: "The Paneer Tikka and Lassi are unmatched. Truly royal!",
    author: "Rajesh Khanna",
    role: "Regular Customer"
  },
  {
    hindi: "असली पंजाब की याद आ गई।",
    english: "Reminded me of the authentic flavors of Punjab.",
    author: "Sardar Balvinder Singh",
    role: "Traveler"
  }
];

export const Motifs = {
  Elephant: () => (
    <svg className="w-12 h-12 text-maroon-900 opacity-20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22,12C22,12 18,10 15,10C14,10 13.5,10.5 13,11C12,12 11,12 10,12C9,12 7,11 7,11C7,11 6,12 5,12C4,12 2,11 2,11C2,11 1,12 1,13C1,14 2,15 3,15C4,15 5,16 6,16C7,16 9,15 10,15C11,15 12,16 13,16C14,16 16,15 17,15C18,15 20,16 21,16C22,16 23,15 23,14C23,13 22,12 22,12Z" />
    </svg>
  ),
  Mandala: () => (
    <svg className="w-16 h-16 text-maroon-900" viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
      <path d="M50 10 L55 30 L75 30 L60 45 L70 65 L50 55 L30 65 L40 45 L25 30 L45 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Quote: () => (
    <svg className="w-16 h-16 text-[#800000] opacity-20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12M10 21L10 18C10 16.8954 9.10457 16 8 16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H9C9.55228 8 10 8.44772 10 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M10 11C10 11 8 11 8 9C8 7 10 7 10 7M20 11C20 11 18 11 18 9C18 7 20 7 20 7" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
};
