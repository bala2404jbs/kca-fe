'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "John",
    role: "Parent",
    text: "The abacus class has greatly improved my child's focus and mental math skills. They now solve calculations quickly and enjoy learning through this fun, hands-on approach.",
    avatar: "https://ui-avatars.com/api/?name=John&background=random"
  },
  {
    name: "Sarah Miller",
    role: "Parent",
    text: "My daughter loves the Creative Arts program! It has given her so much confidence and a true passion for expressing herself through various mediums.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Miller&background=random"
  },
  {
    name: "Dr. Arun Kumar",
    role: "Educator",
    text: "Kids Career Academy's curriculum is one of the most comprehensive I've seen. They truly understand the balance between cognitive development and emotional well-being.",
    avatar: "https://ui-avatars.com/api/?name=Arun+Kumar&background=random"
  },
  {
    name: "Priya Sharma",
    role: "Parent",
    text: "Vedic Maths has been a game-changer for my son. He used to be afraid of large numbers, but now he handles them with ease and speed. Highly recommend!",
    avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=random"
  }
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-8 text-center space-y-6">
      <div className="bg-white px-8 py-10 rounded-xl border-b-2 border-outline-variant/10 relative shadow-sm min-h-[300px] flex flex-col justify-center transition-all duration-500">
        <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
              <img src={testimonials[index].avatar} alt={testimonials[index].name} />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg text-slate-800 leading-none">{testimonials[index].name}</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-widest">{testimonials[index].role}</div>
            </div>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center italic">
            &quot;{testimonials[index].text}&quot;
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
