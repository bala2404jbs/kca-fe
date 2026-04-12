'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { getPageMedia, getMediaUrl } from '../lib/api';

const advantages = [
  {
    title: "Expert Mentors",
    icon: "workspace_premium",
    desc: "Certified educators passionate about child talent.",
    color: "primary",
  },
  {
    title: "Interactive Learning",
    icon: "cognition",
    desc: "Hands-on activities that make complex concepts fun.",
    color: "secondary",
  },
  {
    title: "Skill-focused",
    icon: "lightbulb",
    desc: "Focus on 21st-century critical skills.",
    color: "tertiary",
  },
  {
    title: "Child-centric",
    icon: "child_care",
    desc: "A safe space tailored to every child's unique pace.",
    color: "error",
  },
];

const programs = [
  {
    title: "CBDP",
    desc: "Complete Brain Development Program.",
    img: "/images/programs/cbdp/1.png",
    path: "/program/cbdp",
  },
  {
    title: "Communicative English",
    desc: "Master the art of effective communication and public speaking.",
    img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070",
    path: "/program/communicative-english",
  },
  {
    title: "Creative Arts",
    desc: "Nurturing imagination, building confidence, and developing artistic skills.",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=2070",
    path: "/program/creative-arts",
  },
  {
    title: "Abacus",
    desc: "Lightning-fast calculation speed and focus.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6uTEfOHzNv2r8b37Xy_EPF1_ztTbEccp27P26ZeFLN4E7MUPA6TnbbkXwvuEW9NOdQX57hEVExKvdn3piyHIFUru8Pda9xsqxbXYw8ZEi50WKOG9WZVUjKzkmMaphBSa0Aek0Q7RgpoaN6ew2ShFesiSYmj34G056rSidMBBa9nrcX4u_UlZMEYQLGToZdOx3y_qDc0QTaKMtvaphRHuXcVw3lV23XkzhV4a9ThCirgJKZe-g54rJMceusSw30TKU7iFCm6qe2TkF",
    path: "/program/abacus",
  },
  {
    title: "Vedic Maths",
    desc: "Ancient techniques for modern math speed and accuracy.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS328JTRtJwck_oZrzzs75e2E0NZAIYydPT-HBpyhw4ppx84jal2gdEiz7PPnXbQUGRPqbN1aj96hOVAjRTvJEsGsdHNXFthWlPiXsmVnP11UYPg2ZINTdTFLWDFGb23s84o8BNYOK6OcGu2O8H6tfD6e-iUtip8_mmK2lRwQas3N2cVLkgZ1zPrdtjTBq3NQrX9WJpdMtu6JQ6rUapP5Ia1-RV7LSMlNtgYghsxzZj88p8I_GIdK23pwnpwByy3icGcvY6_ezJXW7",
    path: "/program/vedic-maths",
  },
  {
    title: "AIP",
    desc: "An Ideal Parent program for holistic family growth.",
    img: "/images/programs/aip/1.jpg",
    path: "/program/aip",
  },
];

export default function HomePage() {
  const [media, setMedia] = useState<any>(null);

  useEffect(() => {
    getPageMedia('home').then(setMedia).catch(console.error);
  }, []);

  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold">
            Admissions Open 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface leading-tight">
            Empowering Kids for a{" "}
            <span className="text-primary italic">Brighter</span> Future
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Nurturing young minds through interactive learning, skill
            development, and expert mentorship to build the leaders of tomorrow.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/book-demo"
              className="btn-gradient text-on-primary text-lg font-bold px-10 py-5 rounded-full hover:shadow-2xl transition-all"
            >
              Book Free Demo
            </Link>
            <Link
              href="/programs"
              className="bg-surface-container-low text-primary text-lg font-bold px-10 py-5 rounded-full hover:bg-surface-container-high transition-all"
            >
              Explore Programs
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl transform rotate-2">
            <Image
              alt="Child learning"
              className="w-full h-[600px] object-cover"
              src={getMediaUrl(media?.heroImageUrl) || "https://lh3.googleusercontent.com/aida-public/AB6AXuAjnuhZEkedsdz575yOXs1SidhSjrlqUWPwrdGAWJo8J5NUOLzkw4cL72uny83uJvHurWgrzXpTJP6k6XiXJnQQal4QIYbbTNUs_yCLZIDU9Rcm4-szEeUtm60mjuXz8mCDVX0QS_46rByshmH3wITOrsUvdyEnfDo9SYvfgUjGl4wbcMq8XxCAWdwuFBGnbRFIxLxtE3L6xodvzUUE902t0yQj2bYZevPGb3vpsgGq2_s9tESxSA6AvnSGeqH6MCKAeUmiEdPeCGxG"}
              width={800}
              height={600}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary-container">
                  psychology
                </span>
              </div>
              <span className="font-bold text-lg">Cognitive Growth</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Structured curriculum designed to enhance logical reasoning and
              creative problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction / About Us */}
      <section className="bg-white py-10 px-8">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <h2 className="text-2xl text-slate-800 tracking-wide font-medium">Welcome to Kids Career Academy</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm lg:text-base text-justify">
            <p>
              Kids Career Academy was established in 2010 with a singular mission: to nurture and develop the diverse skills of children, helping them grow into confident, capable individuals. Our academy focuses on fostering strong analytical, logical, listening, and learning abilities, along with creativity, imagination, and memory retention. We believe in cultivating these essential skills to ensure children excel in both academic and personal spheres.
            </p>
            <p>
              Our approach goes beyond traditional academics. At Kids Career Academy, we emphasize the development of life skills such as problem solving, decision-making, teamwork, leadership, and motivation. Our professionally designed curriculum is tailored to meet the evolving demands of a competitive world, preparing children to succeed in all aspects of life.
            </p>
            <p>
              Much like preparing the soil is essential for healthy growth, we prepare young minds for the journey of education. Our world-class curriculum enhances sensory processing, brain development, and memory retention, providing a solid foundation for intellectual growth. Additionally, we prioritize the physical and emotional well-being of each child, ensuring a holistic approach to education.
            </p>
            <p>
              Kids Career Academy is committed to delivering value-driven education that unlocks the full potential of every child. Through our comprehensive programs, we aim to foster not only intellectual development but also the personal growth necessary to succeed in today&apos;s fast-paced world.
            </p>
          </div>
        </div>
      </section>

      {/* Academy Advantage */}
      <section className="bg-surface-container-low py-16 mt-4">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-4xl font-headline font-bold">
              The Academy Advantage
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              We provide a holistic environment that balances academic rigor
              with creative expression.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((card, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-10 rounded-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 max-w-screen-2xl mx-auto px-8">
        <div className="flex justify-between items-end mb-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-headline font-bold">Our Programs</h2>
            <p className="text-on-surface-variant">
              Curated courses for different age groups.
            </p>
          </div>
          <Link
            href="/programs"
            className="text-primary font-bold flex items-center gap-2 hover:underline underline-offset-8"
          >
            View All{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div
              key={i}
              className="relative h-[500px] rounded-xl overflow-hidden group"
            >
              <Image
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={p.img}
                fill unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000929]/90 via-[#000929]/20 to-transparent p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-on-primary mb-2">
                  {p.title}
                </h3>
                <p className="text-on-primary/80 mb-6 text-sm">{p.desc}</p>
                <Link
                  href={p.path}
                  className="w-fit px-6 py-2 bg-primary text-on-primary rounded-full font-bold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-8">
        <div className="max-w-3xl mx-auto px-8 text-center space-y-6">
          <div className="bg-white px-8 py-10 rounded-xl border-b-2 border-outline-variant/10 relative">
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                <img src="https://ui-avatars.com/api/?name=John&background=random" alt="John" />
              </div>
              <span className="font-bold text-lg text-slate-800">John</span>
            </div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-center">
              The abacus class has greatly improved my child&apos;s focus and mental math skills. They now solve calculations quickly and enjoy learning through this fun, hands-on approach.
            </p>
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-[#f3123c]"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
              <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-8 text-center">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-black text-[#f3123c] mb-4 tracking-tight">29,863</h2>
          <p className="text-xl md:text-2xl text-slate-700">website Visitor</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-10 pb-16">
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2 className="text-5xl font-black text-[#f3123c] mb-8 tracking-tight text-center">Contact Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#2ebd59]/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px] text-[#2ebd59]">location_on</span>
                </div>
                <div>
                  <h3 className="text-3xl font-[cursive] text-[#f3123c] leading-none mb-3" style={{fontFamily: "Great Vibes, cursive"}}>Our Office Address</h3>
                  <p className="text-slate-800 text-base max-w-md">120, Sakthipuram Kumaran Nagar, beside Sakthi real estate, Doctors Colony, Salem, Tamil Nadu 636002</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#2ebd59]/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px] text-[#2ebd59]">mail</span>
                </div>
                <div>
                  <h3 className="text-3xl font-[cursive] text-[#f3123c] leading-none mb-3" style={{fontFamily: "Great Vibes, cursive"}}>General Enquires</h3>
                  <p className="text-slate-800 text-base">kidscareeracademy@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#2ebd59]/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px] text-[#2ebd59]">call</span>
                </div>
                <div>
                  <h3 className="text-3xl font-[cursive] text-[#f3123c] leading-none mb-3" style={{fontFamily: "Great Vibes, cursive"}}>Call Us</h3>
                  <p className="text-slate-800 text-base">+91 - 80720 04265</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#2ebd59]/10 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px] text-[#2ebd59]">directions</span>
                </div>
                <div>
                  <h3 className="text-3xl font-[cursive] text-[#f3123c] leading-none mb-3" style={{fontFamily: "Great Vibes, cursive"}}>Location</h3>
                  <p className="text-slate-500 text-sm">Find us on Salem, Tamil Nadu</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.039234125866!2d78.11718017531818!3d11.69123898851944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1cd0aaaaaab%3A0x7d6a7ac27c2f0f4a!2s120%2C%20Sakthipuram%20Kumaran%20Nagar%2C%20Doctors%20Colony%2C%20Kuranguchavadi%2C%20Salem%2C%20Tamil%20Nadu%20636004!5e0!3m2!1sen!2sin!4v1712534567890!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
