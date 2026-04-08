import Link from "next/link";
import Image from "next/image";

const programs = [
  {
    title: "Abacus",
    age: "5-12 yrs",
    cat: "Maths",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6uTEfOHzNv2r8b37Xy_EPF1_ztTbEccp27P26ZeFLN4E7MUPA6TnbbkXwvuEW9NOdQX57hEVExKvdn3piyHIFUru8Pda9xsqxbXYw8ZEi50WKOG9WZVUjKzkmMaphBSa0Aek0Q7RgpoaN6ew2ShFesiSYmj34G056rSidMBBa9nrcX4u_UlZMEYQLGToZdOx3y_qDc0QTaKMtvaphRHuXcVw3lV23XkzhV4a9ThCirgJKZe-g54rJMceusSw30TKU7iFCm6qe2TkF",
    path: "/program/abacus",
  },
  {
    title: "Vedic Maths",
    age: "10-16 yrs",
    cat: "Maths",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS328JTRtJwck_oZrzzs75e2E0NZAIYydPT-HBpyhw4ppx84jal2gdEiz7PPnXbQUGRPqbN1aj96hOVAjRTvJEsGsdHNXFthWlPiXsmVnP11UYPg2ZINTdTFLWDFGb23s84o8BNYOK6OcGu2O8H6tfD6e-iUtip8_mmK2lRwQas3N2cVLkgZ1zPrdtjTBq3NQrX9WJpdMtu6JQ6rUapP5Ia1-RV7LSMlNtgYghsxzZj88p8I_GIdK23pwnpwByy3icGcvY6_ezJXW7",
    path: "/program/vedic-maths",
  },
  {
    title: "Handwriting",
    age: "6-14 yrs",
    cat: "Creative",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9gdCQoswRaoGhXCH-8dyWdt4ouYa1AxSpt8f0PSw09ecj0FIDNCVGdxRUvmpMyTE1u0QZPpgw_ZBu3RM9_xqcBPF7UwAo3LY3oG3RGNLxpjMDfzgu9fXJmBE3DLgonlXeCkepXFASQAS6Py-0PtwnJVVE520daBJoswR-8L6qhQSzED1yXQz0mrZ7QMZ8TIdJunGzrdMZYIQbwovI7Xw-isqRX-j6d55mHYZNb6DWv3ZoQnNYgXwksCEvW27a3Rimz-vkSE0RicCb",
    path: "/program/handwriting",
  },
  {
    title: "CBDP",
    age: "14+ yrs",
    cat: "Career",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ9TZunrRKoQo6Pu8GOLW3ceRCwv9wbuLHtgOnCr6mzu_AJjZfoaJhwGOdb9YnbgkYNMaOjGkPPrbFi215Qmct9376Uz0pQWRfDgRqyvw-DRdeuwiGP6YVJ1t8mssoaqeDNihkXFytgFGg3FL32STrAZJAh3vDJOQx7bsDmtoH1RS2vH0TxpNHSouFImslPqgikP-83IOtqxHK7OHlO2W_Hv0x5Tj-j8cCSxcphzXzRr0EYLdx110DYw8RV5ifP15bOdOpBbeMNT4I",
    path: "/program/cbdp",
  },
  {
    title: "FEEP",
    age: "6-9 yrs",
    cat: "English",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwP_wJHdXTnMLZsVzyUFgRtT-EqyFU5lUc1aUxlz4usaCVBdu9kYuzOIXQbogktDtZYpX1UrdsQJ3o4mqMkMibbgZk4iLzL0DtOxCcdxIY-XE_8VfIMi6QVAC7UZJAht8LKh_P3JecEolrymKy2chrgtJOrxXTJsgC5W9tyDOFHmez1Qfgyokyfz8_NfEmxd-Ht87N_pzgG5Wu-J1t74fYOvx4D-gbLSD4y8ab_YyHoOOqdOiFslno5FB_pwGDQtxqqYvPoWWzoQUx",
    path: "/program/feep",
  },
  {
    title: "SEEP",
    age: "10-14 yrs",
    cat: "English",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALo6vE6t37LylK1ezDq9T39R7DuXcLFH0SB4ZKAwnh3Rkwysrv2-oA1sMJLlXs__2phi8-s512kTUmvLvH4rtpiqvtyKPy-Ns9BQrs0T2YwiLXdM9OTCfBtKvLfiujq1RigSukEVOUDs8aM40eYOEW3TXkMWESzgHxBBXYLxBJHGQprMKcVOfvEu8h1mgy8K0ZG50COYDGIDcgPJ_3NJ5AgBllpCwvNzUS0bLCyXb7UY7WRyw7vzd4Z30h-Ml3YkzC5wXb-ewBZM6J",
    path: "/program/seep",
  },
  {
    title: "AIP",
    age: "12+ yrs",
    cat: "Tech",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVepY-EpxGSDd7B3tUsqp6lscmK0JUhEcenIENjoNjvAsYKCO1mxYE_Yjv8YHbOODwBam4-NfAQdp_R5LA7Bu23ib5zy7zJfHqeokLrLvw-g3ePdUjmmsC46oji0RCer-yjEzYGq0zWfe8yt0D3MDAXIq_Syg9eMNze3czer3Fw86JEfzAP9Y5csf40Fl95sj2dxmlhxc4XmOlwUuOyDWtrGa_Men2RPoLAWbzjAaiJlRU8bDFz4BoGjodQ9Jm5RSBnXly_lebSJmN",
    path: "/program/aip",
  },
];

export const metadata = {
  title: "Programs | Kids Career Academy",
  description: "Explore all specialized programs offered at Kids Career Academy.",
};

export default function ProgramsPage() {
  return (
    <main className="pt-32 px-8 max-w-screen-2xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
          Our Specialized{" "}
          <span className="text-gradient">Programs</span>
        </h1>
        <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
          Discover cognitive development and skill-building programs designed to
          unlock your child&apos;s full potential.
        </p>
      </header>

      <div className="mb-12 space-y-8">
        <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
          <div className="w-full md:w-1/3">
            <label className="block text-sm font-semibold text-on-surface-variant mb-2 ml-4">
              Find a program
            </label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary">
                search
              </span>
              <input
                className="w-full bg-surface-container-low border-none rounded-full py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary transition-all text-on-surface outline-none"
                placeholder="Search Abacus, English, Maths..."
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-semibold">
              All Programs
            </button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-6 py-3 rounded-full font-semibold">
              Maths
            </button>
            <button className="bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high px-6 py-3 rounded-full font-semibold">
              English
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
        {programs.map((p, i) => (
          <div
            key={i}
            className="group bg-surface-container-lowest rounded-xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full relative overflow-hidden"
          >
            <div className="h-48 mb-6 rounded-lg overflow-hidden relative">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={p.img}
                alt={p.title}
                fill
                unoptimized
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {p.cat}
              </div>
            </div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-on-surface">{p.title}</h3>
              <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold">
                {p.age}
              </div>
            </div>
            <p className="text-on-surface-variant text-sm mb-8 flex-grow leading-relaxed">
              Unlock your child&apos;s full potential through expert-led practical curriculum.
            </p>
            <Link
              href={p.path}
              className="w-full bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary font-bold py-3 rounded-full transition-all flex items-center justify-center gap-2"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
