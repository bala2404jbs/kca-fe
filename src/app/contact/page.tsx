export const metadata = {
  title: "Contact Us | Kids Career Academy",
  description: "Get in touch with Kids Career Academy.",
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="px-8 max-w-screen-2xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold uppercase">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#002366]">
            Let&apos;s Start Your{" "}
            <span className="text-primary-dim">Future Journey.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Have questions about our programs or franchise? Our team is here to
            guide you.
          </p>
        </div>
        <div className="bg-surface-container-lowest p-12 rounded-xl shadow-premium">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 outline-none focus:ring-2 focus:ring-primary"
                placeholder="Full Name"
                type="text"
              />
              <input
                className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email"
                type="email"
              />
            </div>
            <select className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 outline-none focus:ring-2 focus:ring-primary">
              <option>Program Enrollment</option>
              <option>Franchise Inquiry</option>
            </select>
            <textarea
              className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Message"
              rows={5}
            ></textarea>
            <button className="w-full btn-gradient text-on-primary py-5 rounded-full font-bold text-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
