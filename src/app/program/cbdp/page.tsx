import Image from "next/image";

export const metadata = {
  title: "CBDP | Kids Career Academy",
  description: "Complete Brain Development Program (CBDP) - unlock your child's full potential.",
};

const benefitsPoints = [
  "Sharpens all the sensory organs for an efficient transmission of any data to the brain.",
  "Augments the left brain processing ability for an improved efficiency in logic, analysis Sequencing, linear, mathematics, language, facts words, Encoding, short term memory and in computation skills.",
  "Activates the right brain processing ability for an improved efficiency in creativity ,imagination, Holistic thinking, intuition, motor skills, nonverbal, extra sensory perception, Visualization, decoding, long term memory and dreams.",
  "Coordinates the left and right brain for escalating the overall efficiency through a set of professionally designed exercises including an induced meditation.",
  "Enhances recitation ability / memory capacity.",
  "Eradicate emotional exhaustion and depersonalization through the set of breathing exercise.",
  "Effective emotion management like anger, anxiety, addictions, trauma, depression, fear, phobia and stress through emotion freedom therapy.",
  "Intensive eyesight improvement program for a spectacle free vision.",
  "Alpha meditation for an ultimate level of concentration.",
  "Behavior correction module for a good morality.",
  "Living art for a healthy life."
];

export default function CBDPProgramPage() {
  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Child engaged in learning"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ9TZunrRKoQo6Pu8GOLW3ceRCwv9wbuLHtgOnCr6mzu_AJjZfoaJhwGOdb9YnbgkYNMaOjGkPPrbFi215Qmct9376Uz0pQWRfDgRqyvw-DRdeuwiGP6YVJ1t8mssoaqeDNihkXFytgFGg3FL32STrAZJAh3vDJOQx7bsDmtoH1RS2vH0TxpNHSouFImslPqgikP-83IOtqxHK7OHlO2W_Hv0x5Tj-j8cCSxcphzXzRr0EYLdx110DYw8RV5ifP15bOdOpBbeMNT4I"
              fill
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                psychology
              </span>
              Complete Brain Development
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-primary mb-6 tracking-tight">
              CBDP
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed">
              COMPLETE BRAIN DEVELOPMENT PROGRAM is the complete scientific methodology, indigenously developed by the team of experts also time tested over the past decade for presenting kids with sharp senses, better left-brain processing speed, Activation of the right brain, long term memory Enhanced morality and improved health consciousness.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-lg">
                Enroll Now
              </button>
              <div className="flex items-center text-on-primary gap-6 ml-4">
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-xs uppercase">
                    Ages
                  </span>
                  <span className="font-bold">5 - 18 Years</span>
                </div>
                <div className="w-px h-8 bg-on-primary/20"></div>
                <div className="flex flex-col">
                  <span className="text-on-primary/70 text-xs uppercase">
                    Duration
                  </span>
                  <span className="font-bold">3 Levels</span>
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
                <Image src="/images/programs/cbdp/1.png" alt="CBDP Activity 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image src="/images/programs/cbdp/2.png" alt="CBDP Activity 2" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image src="/images/programs/cbdp/3.png" alt="CBDP Activity 3" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image src="/images/programs/cbdp/4.png" alt="CBDP Activity 4" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
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
                  src="https://www.youtube.com/embed/1tIWwivgcAs"
                  title="CBDP Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FZXp48D-b5o"
                  title="CBDP Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Z5312WvdrOc"
                  title="CBDP Video 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/gaRZGkBZeoY"
                  title="CBDP Video 4"
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
                &quot;The true sign of intelligence is not knowledge but imagination&quot; <br/><span className="text-sm font-semibold mt-2 block">- Albert Einstein</span>
              </blockquote>
              <blockquote className="border-l-4 border-secondary pl-4 italic bg-surface-container-low p-4 rounded-r-lg">
                &quot;Creativity is intelligence having fun&quot; <br/><span className="text-sm font-semibold mt-2 block">- Albert Einstein</span>
              </blockquote>
              <blockquote className="border-l-4 border-tertiary pl-4 italic bg-surface-container-low p-4 rounded-r-lg">
                &quot;I didn&apos;t find my understanding on universal law only through analytical thoughts. The only invaluable thing is intuition&quot; <br/><span className="text-sm font-semibold mt-2 block">- Albert Einstein</span>
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
                <p className="text-on-surface-variant">Total 3 levels / each level 4 months / 4 hours class every week.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">child_care</span>
                  <h3 className="font-bold text-lg text-on-surface">Eligibility</h3>
                </div>
                <p className="text-on-surface-variant">5 Years to 18 Years.</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
                 <div className="flex items-center gap-3 mb-2 text-primary">
                  <span className="material-symbols-outlined">school</span>
                  <h3 className="font-bold text-lg text-on-surface">Scope</h3>
                </div>
                <p className="text-on-surface-variant">Play schools, schools and colleges.</p>
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
