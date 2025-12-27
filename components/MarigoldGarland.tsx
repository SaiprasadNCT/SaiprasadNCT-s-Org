
import React from 'react';

const Flower: React.FC<{ cx: number; cy: number; color: string }> = ({ cx, cy, color }) => (
  <g>
    <circle cx={cx} cy={cy} r="12" fill={color} />
    <circle cx={cx} cy={cy} r="6" fill="#FBBF24" opacity="0.6" />
    {/* Simple petals */}
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <circle
        key={deg}
        cx={cx + 10 * Math.cos((deg * Math.PI) / 180)}
        cy={cy + 10 * Math.sin((deg * Math.PI) / 180)}
        r="5"
        fill={color}
      />
    ))}
  </g>
);

const GarlandString: React.FC<{ x: number }> = ({ x }) => (
  <g className="sway">
    <line x1={x} y1="0" x2={x} y2="120" stroke="#166534" strokeWidth="2" />
    <Flower cx={x} cy={30} color="#F59E0B" />
    <Flower cx={x} cy={70} color="#D97706" />
    <Flower cx={x} cy={110} color="#F59E0B" />
  </g>
);

const MarigoldGarland: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-32 pointer-events-none z-50 overflow-hidden">
      <svg width="100%" height="150" viewBox="0 0 1200 150" preserveAspectRatio="none">
        {/* Horizontal rope */}
        <path d="M0 20 Q 300 40 600 20 T 1200 20" fill="none" stroke="#166534" strokeWidth="3" />
        {/* Vertical hangings at intervals */}
        {Array.from({ length: 13 }).map((_, i) => (
          <GarlandString key={i} x={100 * i} />
        ))}
      </svg>
    </div>
  );
};

export default MarigoldGarland;
