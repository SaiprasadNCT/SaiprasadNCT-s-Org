
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, Motifs } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="reveal mb-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="font-hindi text-5xl text-[#800000] mb-2">ग्राहकों की पसंद</h2>
          <h3 className="font-english text-xl uppercase tracking-[0.2em] font-bold text-black opacity-70">Customer Voices</h3>
          <div className="w-24 h-1 bg-[#800000] mt-4 opacity-30"></div>
        </div>

        <div className="relative bg-[#F7B32B] border-8 border-[#800000] p-10 md:p-16 shadow-[12px_12px_0px_0px_rgba(128,0,0,1)]">
          {/* Decorative Motifs */}
          <div className="absolute top-4 left-4"><Motifs.Quote /></div>
          <div className="absolute bottom-4 right-4 transform rotate-180"><Motifs.Quote /></div>
          
          <div className="relative h-64 md:h-48 overflow-hidden">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 flex flex-col items-center justify-center ${
                  index === activeIndex ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                }`}
              >
                <p className="font-hindi text-3xl md:text-4xl text-[#800000] mb-6 leading-relaxed">
                  "{testimonial.hindi}"
                </p>
                <p className="font-english italic text-xl text-black opacity-80 mb-8 max-w-2xl mx-auto">
                  "{testimonial.english}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-english font-bold text-lg text-[#800000] uppercase tracking-wider">
                    — {testimonial.author}
                  </h4>
                  <p className="font-english text-sm opacity-60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 border-2 border-[#800000] rounded-full transition-all ${
                  index === activeIndex ? 'bg-[#800000] scale-125' : 'bg-transparent'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
