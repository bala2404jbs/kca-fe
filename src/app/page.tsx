import Link from "next/link";
import Image from "next/image";

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
    title: "Abacus Mastery",
    desc: "Lightning-fast calculation speed and focus.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXKHEsOxlN0gv3iAZEQM8088-YuInEXYRjGvFeoprghFJqh2RaPl4SxyGfb4UIbtUBLfqTtzXUYzF-M-wjcZGNwq3yz4q1LhOGpfqHDRowQEXXpQP77br4AbxfcBmX3LRAnA9Xehpx4arTIuUmMHY_fjT-auJ6dWyY0qfIi5FLXKfw7Pq2iNRkINwRoUqbsEYX4NSlTDv9R4fhvOn-HmTJvnY_jlWHCEQyqdmhCnhL7xRfH-l84jZc1brOE7zAx7aeqDQFdQSLiWpl",
    path: "/program/abacus",
  },
  {
    title: "Vedic Maths",
    desc: "Ancient techniques for modern math speed.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAC_JohirZtjkq_C6eLJqA02oj4Pl5I_hFxknaoz9V_a85ygTV8TvzpaJoi_5icG5ZwopCV3nRDBD8dl-p898eR_-JuYFxya8j0EPa7P4U22bjhhdcKcXSVcwulymRiNiuXKihL23SzFncWLE0iHvTE0vURTD-3zU4lPpjh3ZslMziFkST2AmwTX3HQx6yitF2Y_cWgUqfi2K6XJghmKN_aCKWWhT7gVXpAvIyz8nMhSRJj6nsWhkxkreHCE9a5Nc3FPgCauoNuNmH1",
    path: "#",
  },
  {
    title: "STEM & Robotics",
    desc: "Building and coding the future today.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIEfFzTLvzh29XOAowcHAQs6LGkx4bzx4zOuU5_Sb2VuzMuiy09g9lRu33id3fd6XeqvI2jXJYXow4nAVebcCeNh5plC36iVjsFeVffQBgxTrgpZl8M187F059cwxLpw5jWhyptwE6BCN8dtXjTnpjYSmITs4dYPx9Xz1PTCYNyYFcJisa-wAI8mrmPA3NwzzBFqvnieFrW9cJyAZ0mLx2m67G3HFHHwlAQaqOrQQALQrLJLnJdqfBJN9T_2jBWib7mAy33Ki37BJp",
    path: "#",
  },
];

export default function HomePage() {
  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold">
            Admissions Open 2024
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjnuhZEkedsdz575yOXs1SidhSjrlqUWPwrdGAWJo8J5NUOLzkw4cL72uny83uJvHurWgrzXpTJP6k6XiXJnQQal4QIYbbTNUs_yCLZIDU9Rcm4-szEeUtm60mjuXz8mCDVX0QS_46rByshmH3wITOrsUvdyEnfDo9SYvfgUjGl4wbcMq8XxCAWdwuFBGnbRFIxLxtE3L6xodvzUUE902t0yQj2bYZevPGb3vpsgGq2_s9tESxSA6AvnSGeqH6MCKAeUmiEdPeCGxG"
              width={800}
              height={600}
              unoptimized
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

      {/* Academy Advantage */}
      <section className="bg-surface-container-low py-32 mt-16">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-20 space-y-4">
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
      <section className="py-32 max-w-screen-2xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
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
                fill
                unoptimized
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
    </div>
  );
}
