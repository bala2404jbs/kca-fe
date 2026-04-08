import Image from "next/image";

export const metadata = {
  title: "Franchise Opportunities | Kids Career Academy",
  description: "Explore rewarding franchise opportunities with Kids Career Academy.",
};

const franchiseOptions = [
  {
    title: "Free Franchise",
    description: "No investment, No boundaries just simply enroll the students in your vicinity we are all set to conduct the program at your premises absolutely at your convenience. Be a boss with the handsome profits"
  },
  {
    title: "Free Lancer",
    description: "No franchise fee, No boundaries and completely free to think, plan and run your business at your preferred pace and style. Just learn the programs at an affordable cost. Be a mentor end up with the huge profits."
  },
  {
    title: "Unit Franchise",
    description: "No royalty, simply pay your one month income as a franchise fee, exclusively rule the business in your area of preference. Avail our abundant know how on training to marketing, Beat the competition, keep your identity, make your presence an indispensable one. Be a prince reap the cumulating profits year after year"
  },
  {
    title: "Master Franchise",
    description: "No royalty, simply pay your Half month income as a franchise fee, exclusively rule the business in your city of preference, Open up multiple centers, unlimited support from training to marketing, on the spot assistance. Be a king make your own business kingdom. Harvest hilarious profits year after year."
  }
];

export default function FranchisePage() {
  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Franchise Opportunity Hero"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACm5_7Bo5kYyh6b185QHbPmTrKhOu_J1W_qIxUfb0Q9pkTxvJwnOduknKt-XurgUlS7wx1pGnIDbP8y1a1uX4iheZu6BcNx76wimGZQKi4HgIF73uCstx7IKL3LOxmy5qUur8KyncW6X-5DjGc7c69Y_OX_sCfjGk9rkbUo1rHStGV_SJDOuSNKr7OFchCyi5BC0zcMzqIK8NEtq--C8sRHAfZ1fE92wVENTjXrBfwxE8ZstaE5FoPGLFypDIKPCpAfUbkjPup-bm3"
              fill
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                storefront
              </span>
              Business Opportunity
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-primary mb-6 tracking-tight uppercase">
              Franchise Opportunities
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed max-w-2xl">
              Join our growing network of educational entrepreneurs. Build your own legacy while empowering the next generation across borders.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden shadow-md group border border-outline-variant/20">
              <Image 
                src="/images/franchise/1.jpg" 
                alt="Franchise Opportunity 1" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden shadow-md group border border-outline-variant/20">
              <Image 
                src="/images/franchise/2.jpg" 
                alt="Franchise Opportunity 2" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#f3123c] uppercase">
              Video
            </h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-outline-variant/10 bg-surface-container">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nj1AtSH1lPI"
                title="FRANCHISE 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
             <div className="space-y-12">
                {franchiseOptions.map((option, i) => (
                   <div key={i}>
                      <h2 className="text-xl font-bold text-slate-800 uppercase mb-4 tracking-wide border-b-2 border-primary/20 pb-2 inline-block">
                         {option.title}:
                      </h2>
                      <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                         {option.description}
                      </p>
                   </div>
                ))}
             </div>
          </div>

        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 bg-surface-container-lowest p-8 rounded-xl shadow-2xl border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
               <span className="material-symbols-outlined text-[#f3123c] text-2xl">account_balance</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#002366]">Express Interest</h3>
            <p className="text-on-surface-variant mb-8 text-sm">
              Discover exactly which model fits you best. Drop your details, and let&apos;s start building your business kingdom!
            </p>
            <form className="space-y-4">
              <input
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#f3123c]"
                placeholder="Full Name"
                type="text"
              />
              <input
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#f3123c]"
                placeholder="Phone Number"
                type="tel"
              />
              <input
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#f3123c]"
                placeholder="Email Address"
                type="email"
              />
              <select className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#f3123c] text-slate-600 appearance-none">
                 <option value="">Select Target Franchise Type</option>
                 <option value="free">Free Franchise</option>
                 <option value="lancer">Free Lancer</option>
                 <option value="unit">Unit Franchise</option>
                 <option value="master">Master Franchise</option>
              </select>
              <button type="button" className="w-full btn-gradient text-on-primary py-4 rounded-full font-bold shadow-lg mt-4 shadow-primary/25">
                Submit Inquiry
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
