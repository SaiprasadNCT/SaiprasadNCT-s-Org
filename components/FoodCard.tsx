
import React from 'react';
import { MenuItem } from '../types';

interface FoodCardProps {
  item: MenuItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <div className="reveal group bg-[#F7B32B] border-4 border-[#800000] p-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(128,0,0,0.3)] cursor-pointer">
      <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden border-2 border-[#800000]">
        <img 
          src={item.image} 
          alt={item.englishName} 
          className="w-full h-full object-cover grayscale-[20%] sepia-[20%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500"
        />
        <div className="absolute inset-0 border-inset border-2 border-[#800000] opacity-50 pointer-events-none"></div>
      </div>
      
      <h3 className="font-hindi text-3xl text-[#800000] mb-1">{item.hindiName}</h3>
      <h4 className="font-english font-bold text-xl text-black mb-2">{item.englishName}</h4>
      <p className="font-english text-sm text-gray-900 leading-tight mb-4 flex-grow italic">
        {item.description}
      </p>
      
      <div className="w-full flex justify-center items-center gap-2">
        <span className="h-0.5 flex-grow bg-[#800000] opacity-30"></span>
        <span className="font-hindi text-2xl text-[#800000] font-bold">₹{item.price}</span>
        <span className="h-0.5 flex-grow bg-[#800000] opacity-30"></span>
      </div>
    </div>
  );
};

export default FoodCard;
