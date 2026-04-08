import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f0f1f3] dark:bg-slate-900 w-full mt-32 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-16 max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <div className="text-2xl font-black text-[#002366] dark:text-[#8ea6f0]">
            Kids Career Academy
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Cultivating the next generation of pioneers, dreamers, and leaders
            through immersive career discovery and expert mentorship.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm cursor-pointer hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm cursor-pointer hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">mail</span>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-[#002366] dark:text-[#8ea6f0] mb-6 uppercase tracking-wider text-xs">
            Programs
          </h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>
              <Link href="/program/abacus" className="hover:text-primary transition-all">
                Abacus Mastery
              </Link>
            </li>
            <li>
              <a className="hover:text-primary transition-all" href="#">
                Robotics &amp; AI
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-all" href="#">
                Creative Arts
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-all" href="#">
                Vedic Maths
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-[#002366] dark:text-[#8ea6f0] mb-6 uppercase tracking-wider text-xs">
            Quick Links
          </h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>
              <Link href="/about" className="hover:text-primary transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/franchise" className="hover:text-primary transition-all">
                Franchise
              </Link>
            </li>
            <li>
              <Link href="/teacher-training" className="hover:text-primary transition-all">
                Teacher Training
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-[#002366] dark:text-[#8ea6f0] mb-6 uppercase tracking-wider text-xs">
            Stay Connected
          </h5>
          <p className="text-slate-500 text-sm mb-6">
            Join our newsletter to get latest educational updates.
          </p>
          <div className="flex flex-col gap-3">
            <input
              className="bg-surface border-none rounded-full px-6 py-3 focus:ring-2 focus:ring-primary outline-none text-sm"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-primary text-on-primary rounded-full px-6 py-3 font-bold text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 py-8 border-t border-slate-200 dark:border-slate-800 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-slate-500 text-xs">
          © 2024 Kids Career Academy. All rights reserved.
        </span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-slate-400 hover:text-primary text-xs">
            Privacy Policy
          </a>
          <a href="#" className="text-slate-400 hover:text-primary text-xs">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
