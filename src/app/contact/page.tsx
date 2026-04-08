export const metadata = {
  title: "Contact Us | Kids Career Academy",
  description: "Get in touch with Kids Career Academy.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-32 bg-slate-50/50">
      <section className="px-8 max-w-4xl mx-auto mb-16">
        <div className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-800">First Name</label>
                <input
                  className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-800">Last Name</label>
                <input
                  className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">Email</label>
              <input
                className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                placeholder="Email Address"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">Phone/Mobile</label>
              <input
                className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                placeholder="Mobile Number"
                type="tel"
              />
            </div>

            <div className="pt-4">
              <h3 className="text-[15px] font-medium text-slate-800 mb-4">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">Address Line 1</label>
                  <input
                    className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                    placeholder="Address Line 1"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">Address Line 2</label>
                  <input
                    className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                    placeholder="Address Line 2"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">City</label>
                  <input
                    className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                    placeholder="City"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">State</label>
                  <input
                    className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                    placeholder="State"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-800">Zip Code</label>
                  <input
                    className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                    placeholder="Zip"
                    type="text"
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-sm font-medium text-slate-800">Country</label>
                  <select className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-500 shadow-sm appearance-none">
                    <option value="">Select Country</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AE">United Arab Emirates</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-[38px] text-slate-400 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">Textarea</label>
              <textarea
                className="w-full bg-white border border-outline-variant/20 rounded-[4px] px-4 py-3 outline-none focus:ring-1 focus:ring-primary text-slate-700 shadow-sm"
                rows={5}
              ></textarea>
            </div>

            <div className="pt-2">
              <button type="button" className="bg-[#1877f2] hover:bg-[#166fe5] text-white px-6 py-3 rounded-[4px] font-medium text-[15px] transition-colors shadow-sm">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
