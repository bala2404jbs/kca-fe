import Image from "next/image";

export const metadata = {
  title: "About Us | Kids Career Academy",
  description: "Learn about the Kids Career Academy journey and mission.",
};

const stats = [
  { val: "12+", lab: "Years of Legacy" },
  { val: "50k+", lab: "Young Explorers" },
  { val: "85+", lab: "Learning Centers" },
  { val: "22", lab: "Global Awards" },
];

export default function AboutPage() {
  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="relative px-8 py-24 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/30 text-on-primary-container rounded-full">
            <span className="material-symbols-outlined text-sm">history_edu</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Our Journey
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-on-surface">
            Pioneering{" "}
            <span className="text-gradient">The Future</span> of Early
            Learning.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
            Founded in 2012, Kids Career Academy emerged from a simple
            observation: children possess infinite curiosity about what they
            want to &ldquo;be&rdquo;. We turned that into a curriculum.
          </p>
        </div>
        <div className="relative">
          <Image
            className="rounded-xl w-full h-[600px] object-cover shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf4bP7UtyVRX3jT4qL-UWPRCEvwzYnE8rtNF_hgUEF1a1fWR0fRGtfP34ylG3uBkWboWLJbULy8CEtwbMkLr3TSS-mMCyqIs3tqlqU0p5qa0_jGzcTp5MISR1bMzeIfgK25xaEmSh49a4GvP5jU4loiBUjZlNGe6fHrrDARuBob-cYX-lRcPTZImFXJBrpK3QwUFlikSmHc6nhRCHCct4BP8pqMCAHX0IB8IPKdmGoEaxt_bG5VMk5PPaDSCaQRKlFBtLEObZAMACD"
            alt="About Kids Career Academy"
            width={600}
            height={600}
            unoptimized
          />
        </div>
      </section>

      <section className="bg-surface-container-low py-24 my-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-5xl font-black text-primary">{stat.val}</h3>
              <p className="font-medium text-on-surface-variant">{stat.lab}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
