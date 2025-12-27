
import React, { useEffect } from 'react';
import { MENU_DATA, Motifs } from './constants';
import MarigoldGarland from './components/MarigoldGarland';
import FoodCard from './components/FoodCard';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen vintage-paper text-black selection:bg-maroon-800 selection:text-white">
      <MarigoldGarland />

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="reveal max-w-4xl mx-auto border-[16px] border-[#800000] p-8 bg-[#F7B32B] relative shadow-2xl">
          {/* Decorative Corners */}
          <div className="absolute -top-6 -left-6 transform rotate-0"><Motifs.Elephant /></div>
          <div className="absolute -top-6 -right-6 transform scale-x-[-1]"><Motifs.Elephant /></div>
          
          <div className="mb-4">
            <h2 className="font-hindi text-4xl md:text-5xl text-[#800000] mb-2">मज़ेदार भारतीय स्ट्रीट फ़ूड</h2>
            <div className="w-48 h-1 bg-[#800000] mx-auto opacity-30"></div>
          </div>
          
          <h1 className="font-hindi text-7xl md:text-9xl text-[#800000] uppercase tracking-tighter mb-4 drop-shadow-lg">
            द रॉयल ढाबा
          </h1>
          
          <div className="font-english font-bold text-2xl md:text-3xl text-black border-y-2 border-[#800000] py-2 inline-block px-8 uppercase tracking-widest">
            The Royal Dhaba
          </div>
          
          <p className="mt-6 font-english italic text-lg opacity-80 max-w-2xl mx-auto">
            Experience the authentic legacy of Punjab's legendary street flavors, served with vintage charm and royal hospitality since 1974.
          </p>

          {/* Buttons Area */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <button className="group relative inline-flex flex-col items-center justify-center bg-[#800000] text-[#F7B32B] px-10 py-4 transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none border-2 border-[#F7B32B]">
              <span className="font-hindi text-2xl md:text-3xl leading-none mb-1">अभी ऑर्डर करें</span>
              <span className="font-english text-xs md:text-sm uppercase tracking-[0.3em] font-bold opacity-90">Order Online</span>
              <div className="absolute inset-1 border border-[#F7B32B] opacity-30 pointer-events-none"></div>
            </button>

            <button 
              onClick={() => scrollToSection('contact-section')}
              className="group relative inline-flex flex-col items-center justify-center bg-[#F7B32B] text-[#800000] px-10 py-4 transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(128,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(128,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none border-2 border-[#800000]"
            >
              <span className="font-hindi text-2xl md:text-3xl leading-none mb-1">संपर्क करें</span>
              <span className="font-english text-xs md:text-sm uppercase tracking-[0.3em] font-bold opacity-90">Contact Us</span>
              <div className="absolute inset-1 border border-[#800000] opacity-30 pointer-events-none"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        {MENU_DATA.map((category) => (
          <section key={category.id} className="mb-20">
            {/* Category Header */}
            <div className="reveal flex items-center justify-center gap-6 mb-12">
              <div className="hidden md:block flex-grow h-px bg-[#800000] opacity-40"></div>
              <div className="text-center">
                <h2 className="font-hindi text-5xl text-[#800000]">{category.hindiTitle}</h2>
                <h3 className="font-english text-xl uppercase tracking-[0.2em] font-bold text-black opacity-70">
                  {category.englishTitle}
                </h3>
              </div>
              <div className="hidden md:block flex-grow h-px bg-[#800000] opacity-40"></div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}

        {/* New Testimonials Carousel Section */}
        <Testimonials />

        {/* Info Section / Contact Us Target */}
        <section id="contact-section" className="reveal bg-[#800000] text-[#F7B32B] p-12 text-center rounded-sm relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 opacity-20"><Motifs.Mandala /></div>
          <div className="absolute -right-10 -top-10 opacity-20"><Motifs.Mandala /></div>
          
          <h2 className="font-hindi text-5xl mb-6">पधारिये श्रीमान!</h2>
          <p className="font-english text-2xl mb-8 uppercase tracking-widest">You are most welcome</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div>
              <h4 className="font-hindi text-3xl mb-2">समय</h4>
              <p className="font-english">11:00 AM - 11:30 PM</p>
            </div>
            <div>
              <h4 className="font-hindi text-3xl mb-2">स्थान</h4>
              <p className="font-english">Highway 44, Ludhiana Junction</p>
            </div>
            <div>
              <h4 className="font-hindi text-3xl mb-2">संपर्क</h4>
              <p className="font-english">+91 98765 43210</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-[#F7B32B] py-12 px-6 border-t-8 border-[#800000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-hindi text-4xl mb-2">द रॉयल ढाबा</h2>
            <p className="font-english opacity-60 text-sm">© 1974 The Royal Dhaba. All Rights Reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => scrollToSection('contact-section')} className="hover:text-white transition-colors underline underline-offset-4">Contact Us</button>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          
          <div className="font-hindi text-xl italic opacity-80">
            स्वाद ऐसा जो भुलाया न जा सके
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
