import Image from "next/image";

export const metadata = {
  title: "Events | Kids Career Academy",
  description: "Stay updated with Kids Career Academy events and competitions.",
};

const galleryImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDed6vuNxpeju7saPmOaWkhL6Gspws7ZXaYa26b8IwbWEmqD_W9sQoUmY6lxP1QLIdg1ok_HRfy_-5fM-XKMEo_qU1YBsuamd6jOzkqSDdrzMxlpSwC4ZybhDJxpZgXCzSIDD34pczq7wLmPorw5P3KL_ww0cDPiMZuH_JIUs5lq2ySC8-NEkb9vzUca7-6cosJWO5jzp-0u0knMbAT4CzLAtcCYClnHSY6M0kdiQo1DovQExcwDCR7YwnGA43mRPtuaQ-P4uOJ4uHm";

export default function EventsPage() {
  return (
    <main className="pt-32">
      <section className="px-8 max-w-screen-2xl mx-auto mb-32">
        <div className="relative rounded-xl overflow-hidden min-h-[500px] flex items-center bg-primary-dim">
          <Image
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA09gpVm4KpiierESF2Ing7yvCWhgClL9m4fB-9LUnfYJdaArNU1p9J02edyr9nA_51aK-H0x04bwBY_MKMx7RIUz0CcxGYSAxZJ9GHN4k9s6SZEpgYiaWO48owPi9v7UfejkQsuRYhH0ymkG95oXBom9paO6OmzmSwe3eg5WwxTWKNUiaoso7lJy6ymsLQwm-zzVdCQ0-H0tOEOlNy51nEw3S2jji5LFv4V27YX6iJaVtHzTqGA3Z2mDrSRJAjvhMptLCK949LiSmx"
            alt="Events banner"
            fill
            unoptimized
          />
          <div className="relative z-10 p-12 md:p-24 max-w-3xl">
            <span className="bg-secondary text-on-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block">
              REGISTRATION OPEN
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Join the next National Math Olympiad
            </h1>
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg">
              Register Now
            </button>
          </div>
        </div>
      </section>

      <section className="px-8 max-w-screen-2xl mx-auto mb-32">
        <h2 className="text-4xl font-bold mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                src={galleryImg}
                alt={`Event photo ${i + 1}`}
                fill
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
