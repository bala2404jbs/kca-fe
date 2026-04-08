import Image from "next/image";

export const metadata = {
  title: "Franchise | Kids Career Academy",
  description: "Join the Kids Career Academy global network of educators.",
};

const plans = [
  { name: "Standard Studio", price: "$25K+", area: "800-1200" },
  { name: "Premium Hub", price: "$50K+", area: "1500-2500" },
  { name: "Regional Master", price: "$150K+", area: "3000+" },
];

export default function FranchisePage() {
  return (
    <main className="pt-24">
      <section className="relative px-8 py-20 lg:py-32 max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">
              Global Expansion 2024
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-on-primary-container leading-tight mb-8 tracking-tight">
              Join our global network of educators.
            </h1>
            <p className="text-on-surface-variant max-w-xl mb-10 text-lg">
              Empower the next generation while building a sustainable business.
              Partner with the world&apos;s leading career academy.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-gradient text-on-primary px-8 py-4 rounded-full text-lg font-bold">
                Become a Partner
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              className="rounded-xl shadow-2xl w-full object-cover h-[500px] border-8 border-surface-container-lowest"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACm5_7Bo5kYyh6b185QHbPmTrKhOu_J1W_qIxUfb0Q9pkTxvJwnOduknKt-XurgUlS7wx1pGnIDbP8y1a1uX4iheZu6BcNx76wimGZQKi4HgIF73uCstx7IKL3LOxmy5qUur8KyncW6X-5DjGc7c69Y_OX_sCfjGk9rkbUo1rHStGV_SJDOuSNKr7OFchCyi5BC0zcMzqIK8NEtq--C8sRHAfZ1fE92wVENTjXrBfwxE8ZstaE5FoPGLFypDIKPCpAfUbkjPup-bm3"
              alt="Franchise opportunity"
              width={700}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
            Flexible Investment Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-10 rounded-xl ${
                  i === 1
                    ? "bg-surface-container-lowest shadow-2xl border-2 border-primary scale-105"
                    : "bg-surface-container-low"
                }`}
              >
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-black text-primary mb-8">
                  {plan.price}
                </div>
                <ul className="space-y-4 mb-10 text-sm">
                  <li>✓ Area: {plan.area} sq. ft</li>
                  <li>✓ Marketing Suite Included</li>
                  <li>✓ Teacher Certification</li>
                </ul>
                <button
                  className={`w-full py-4 rounded-full font-bold ${
                    i === 1
                      ? "btn-gradient text-on-primary"
                      : "border-2 border-primary text-primary"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
