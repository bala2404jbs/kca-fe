export const metadata = {
  title: "Book Free Demo | Kids Career Academy",
  description: "Schedule a free discovery session with Kids Career Academy.",
};

export default function BookDemoPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Unlock Your Child&apos;s{" "}
            <span className="text-primary">Potential</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Join 5,000+ happy families today.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-surface-container-low flex items-center gap-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-bold text-sm">ISO Certified</span>
            </div>
            <div className="p-4 rounded-lg bg-surface-container-low flex items-center gap-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                workspace_premium
              </span>
              <span className="font-bold text-sm">Expert Mentors</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-premium">
          <h2 className="text-2xl font-bold mb-8">
            Schedule Your Discovery Session
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
              placeholder="Parent Name"
              type="text"
            />
            <input
              className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
              placeholder="Child Name"
              type="text"
            />
            <input
              className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
              placeholder="Child Age"
              type="number"
            />
            <select className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary">
              <option>Select Program</option>
              <option>Abacus</option>
              <option>Robotics</option>
            </select>
            <input
              className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
              placeholder="Phone Number"
              type="tel"
            />
            <input
              className="px-6 py-4 rounded-md bg-surface-container-high border-none outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email"
              type="email"
            />
            <div className="md:col-span-2">
              <button className="w-full btn-gradient py-5 rounded-full text-on-primary font-bold text-lg shadow-xl">
                Book Free Demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
