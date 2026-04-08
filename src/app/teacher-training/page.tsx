import Image from "next/image";

export const metadata = {
  title: "Professional Teacher Training | Kids Career Academy",
  description: "Become a certified Kids Career Academy educator and build a rewarding career.",
};

export default function TeacherTrainingPage() {
  return (
    <main className="pt-24 pb-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-primary min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              alt="Teacher Training Hero"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOxtuznAWZJdMUPSGz4mZunLil4-GkO8zrV2VddbPWJfcJPElOuQb-kqq769Hwgmt3cxJ32iV3KbZpDRE6P5Edl9WP2agC_p-s_JKyyVqFzp5uRX1Qx95rmBQK1aR52YobmlQ9BEp5SI7nQOcJ496ZYM3cu4B6ix-bWKQLVudqcLFfCv8ojkZRzdJNm3qcXrSraw2twjausIG1cQkJtH9_fP_F7Uv3bZ2sXaS4b-oVU_5_N42mLm5S64dBFi3FejjsxB9CNiJ2Tua"
              fill
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 px-4 md:px-12 py-16 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container mb-6 font-semibold">
              <span className="material-symbols-outlined mr-2 text-sm">
                school
              </span>
              Career Development
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-on-primary mb-6 tracking-tight uppercase">
              Professional Teacher Training Program
            </h1>
            <p className="text-xl text-on-primary/90 mb-8 leading-relaxed max-w-2xl">
              Transform your free time into a highly profitable, self-employed teaching career right from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden shadow-md group border border-outline-variant/20">
              <Image 
                src="/images/teacher-training/1.jpg" 
                alt="Teacher Training Activity 1" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden shadow-md group border border-outline-variant/20">
              <Image 
                src="/images/teacher-training/2.jpg" 
                alt="Teacher Training Activity 2" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden shadow-md group border border-outline-variant/20">
              <Image 
                src="/images/teacher-training/3.jpg" 
                alt="Teacher Training Activity 3" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden shadow-md group border border-outline-variant/20">
              <Image 
                src="/images/teacher-training/4.jpg" 
                alt="Teacher Training Activity 4" 
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
                src="https://www.youtube.com/embed/snxgCNKzSK8"
                title="TEACHER TRAINING 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Context paragraphs */}
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            <p>
              Periodic labour force survey (plfs) in 2017-18 published by the ministry of statistics and programme implementation states that Tamilnadu has the highest rate of Unemployment, rated at 7.6%, against the national Average of 6.1%.
            </p>
            <p>
              Only in this context, we think of the money you spent and the time you invested on acquiring your degrees. And we seriously think of the unemployment index.
            </p>
            <p className="font-bold text-[#002366] text-xl border-l-4 border-[#002366] pl-4">
              And we shoulder our part of responsibility in curbing unemployment, we train, you earn.
            </p>
            <p>
              Have you ever thought of earning Rs6000/- Rs8000/- or Rs14000/- per month while you are still learning. That too right at the comfort of your home, in fact just working for 2hours a week. After all it is not a tuition that you work hard for, it is a supplementary education that you work smart for.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <div className="px-8 py-4 bg-surface-container-low rounded-lg shadow-sm border border-outline-variant/10 text-center w-full max-w-lg">
              <h3 className="font-bold text-slate-800 tracking-wide">Become a PROFESSIONAL ABACUS TEACHER</h3>
            </div>
            <div className="px-8 py-4 bg-surface-container-low rounded-lg shadow-sm border border-outline-variant/10 text-center w-full max-w-lg">
              <h3 className="font-bold text-slate-800 tracking-wide">Become a PROFESSIONAL VEDICMATH TEACHER</h3>
            </div>
            <div className="px-8 py-4 bg-surface-container-low rounded-lg shadow-sm border border-outline-variant/10 text-center w-full max-w-lg">
              <h3 className="font-bold text-slate-800 tracking-wide">Become a PROFESSIONAL HANDWRITING TEACHER</h3>
            </div>
          </div>

          <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg text-center">
            <p>
              Stand out tall, Get your employment easily in any one of the 20,859 private schools in Tamilnadu
            </p>
            <p className="font-[cursive] text-2xl text-slate-400">or</p>
            <p>
              Think out of box: Set your self-employment easily 1,31,05,526 students are attending TN schools. 8th all india survey on higher education by MHRD, Government of India reveals the Dates of TamilNadu students enrolled in higher education 23,04,233 students are pursuing UG, 4,52,435 students are pursuing PG, 19,509 students are pursuing MPhil, 22,221 students are pursuing Phd
            </p>

            <div className="py-8 space-y-4">
              <h4 className="text-2xl font-bold text-[#002366]">How you are planning to cope the situation?</h4>
              <p className="text-xl font-medium text-[#f3123c]">You are always free, to think fast and act smart</p>
            </div>
          </div>

        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 bg-surface-container-lowest p-8 rounded-xl shadow-2xl border border-outline-variant/10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
               <span className="material-symbols-outlined text-[#f3123c] text-2xl">campaign</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#002366]">Start Your Career</h3>
            <p className="text-on-surface-variant mb-8 text-sm">
              Register now to start your teacher training curriculum and step into a fulfilling career.
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
                 <option value="">Select Specialization</option>
                 <option value="abacus">Abacus Teacher</option>
                 <option value="vedicmath">Vedic Math Teacher</option>
                 <option value="handwriting">Handwriting Teacher</option>
              </select>
              <button type="button" className="w-full btn-gradient text-on-primary py-4 rounded-full font-bold shadow-lg mt-4 shadow-primary/25">
                Apply Now
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
