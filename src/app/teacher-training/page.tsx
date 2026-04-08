import Image from "next/image";

export const metadata = {
  title: "Teacher Training | Kids Career Academy",
  description: "Become a certified Kids Career Academy educator.",
};

const trainers = ["Elena Rossi", "Marcus Thorne", "Sarah Jenkins", "David Wang"];

export default function TeacherTrainingPage() {
  return (
    <main className="pt-32">
      <section className="max-w-screen-2xl mx-auto px-8 mb-32">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-12 md:p-24 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-sm font-semibold">
              PROFESSIONAL CERTIFICATION
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
              Shape the Minds of{" "}
              <span className="text-primary">Tomorrow.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl">
              Master child career guidance through our globally recognized
              teacher training program.
            </p>
            <div className="flex gap-4">
              <button className="btn-gradient text-white px-8 py-4 rounded-full font-bold shadow-xl">
                Start Your Journey
              </button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              className="w-full h-[500px] object-cover rounded-xl shadow-2xl rotate-2"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOxtuznAWZJdMUPSGz4mZunLil4-GkO8zrV2VddbPWJfcJPElOuQb-kqq769Hwgmt3cxJ32iV3KbZpDRE6P5Edl9WP2agC_p-s_JKyyVqFzp5uRX1Qx95rmBQK1aR52YobmlQ9BEp5SI7nQOcJ496ZYM3cu4B6ix-bWKQLVudqcLFfCv8ojkZRzdJNm3qcXrSraw2twjausIG1cQkJtH9_fP_F7Uv3bZ2sXaS4b-oVU_5_N42mLm5S64dBFi3FejjsxB9CNiJ2Tua"
              alt="Teacher training"
              width={700}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Lead Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {trainers.map((name, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                  className="w-full aspect-[4/5] object-cover transition-all grayscale group-hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZsBmtF_biNj78IAa1h_E6vKJ8UFKjACSQBuzx-TE_huvKyu4DIwsddxbMHWqZ-kt5kh76nvfHLwn8bFMrvXyGhoJ5HqUPrHT1_kel8OW0L1o1p60qiGqP-e1xIoun4iDuwnk7gphgRAIIBd_2jLZnMJB71XL3V_Gj0XWo3dNJM9yZNMTk7PVZHyPR8-0UXbotN-9l3PH7V2LowJ2_iXovMrIEuhcctmkyp4WYoTKHzKXS_t986Ces7B-XO0Ikp8jdzs-sKTPnQxDO"
                  alt={name}
                  width={400}
                  height={500}
                  unoptimized
                />
              </div>
              <h4 className="text-xl font-bold">{name}</h4>
              <p className="text-primary text-sm">Lead Trainer</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
