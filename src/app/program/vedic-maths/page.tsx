import Image from "next/image";

export const metadata = {
  title: "Vedic Maths | Kids Career Academy",
  description: "Vedic Maths Program - solve complex math problems quickly and accurately.",
};

const benefitsPoints = [
  "Promotes time saving in all the type of examinations.",
  "Provides accurate results.",
  "Promotes intelligence guessing.",
  "Propensity to fear in math subsides naturally in fact makes one enjoy it."
];

export default function VedicMathsProgramPage() {
  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Vedic Maths Concept"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS328JTRtJwck_oZrzzs75e2E0NZAIYydPT-HBpyhw4ppx84jal2gdEiz7PPnXbQUGRPqbN1aj96hOVAjRTvJEsGsdHNXFthWlPiXsmVnP11UYPg2ZINTdTFLWDFGb23s84o8BNYOK6OcGu2O8H6tfD6e-iUtip8_mmK2lRwQas3N2cVLkgZ1zPrdtjTBq3NQrX9WJpdMtu6JQ6rUapP5Ia1-RV7LSMlNtgYghsxzZj88p8I_GIdK23pwnpwByy3icGcvY6_ezJXW7"
              fill
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                calculate
              </span>
              Maths Program
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-primary mb-6 tracking-tight">
              Vedic Maths
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed">
              Vedic Maths is a course Based on &quot;16 Sutras&quot; derived from &quot;Atharvana Veda&quot; which was rediscovered by the great Indian Saint Shri Bharat Krishna Thirthaji Maharaj Between 1911-1918 thus the same simplified formulae are used to solve complex math Problems quickly and accurately at par with a computer.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-lg">
                Enroll Now
              </button>
              <div className="flex items-center text-on-primary gap-6 ml-4">
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-xs uppercase">
                    Legibility
                  </span>
                  <span className="font-bold">11 Years onwards</span>
                </div>
                <div className="w-px h-8 bg-on-primary/20"></div>
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-xs uppercase">
                    Duration
                  </span>
                  <span className="font-bold">4 Levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image src="/images/programs/vedic-maths/1.png" alt="Vedic Maths Activity 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image src="/images/programs/vedic-maths/2.jpg" alt="Vedic Maths Activity 2" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image src="/images/programs/vedic-maths/3.jpg" alt="Vedic Maths Activity 3" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image src="/images/programs/vedic-maths/4.jpg" alt="Vedic Maths Activity 4" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/0G0grJyAIlY"
                  title="Vedic Maths Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/0qXKVzvveTM"
                  title="Vedic Maths Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Introduction
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <blockquote className="border-l-4 border-primary pl-4 italic bg-surface-container-low p-4 rounded-r-lg">
                &quot;The Universe is a grand book which cannot be read until one first learns which it is composed. It is written in the language of mathematics..&quot; <br/><span className="text-sm font-semibold mt-2 block">- Galilei Galileo</span>
              </blockquote>
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Program Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                  <h3 className="font-bold text-lg text-on-surface">Duration</h3>
                </div>
                <p className="text-on-surface-variant">Total 4 levels / each level 3months / 2hours class every week.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">person</span>
                  <h3 className="font-bold text-lg text-on-surface">Legibility</h3>
                </div>
                <p className="text-on-surface-variant">11Years onwards</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                 <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">domain</span>
                  <h3 className="font-bold text-lg text-on-surface">Scope</h3>
                </div>
                <p className="text-on-surface-variant">Schools and colleges.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#002366]">
              Benefits
            </h2>
            <div className="grid grid-cols-1 gap-4 mb-20 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
              <ul className="space-y-4">
                {benefitsPoints.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-on-surface-variant leading-relaxed pt-1">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 bg-surface-container-lowest p-8 rounded-xl shadow-2xl border border-outline-variant/10">
            <h3 className="text-2xl font-bold mb-2">Book a Demo</h3>
            <p className="text-on-surface-variant mb-6 text-sm">
              Experience our teaching method for free.
            </p>
            <form className="space-y-4">
              <input
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                placeholder="Parent Name"
                type="text"
              />
              <input
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                placeholder="Child Age"
                type="number"
              />
              <input
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                placeholder="WhatsApp Number"
                type="tel"
              />
              <button type="button" className="w-full btn-gradient text-on-primary py-4 rounded-full font-bold shadow-lg">
                Request Callback
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
