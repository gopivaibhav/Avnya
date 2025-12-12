import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: ''
  });

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="animate-fadeInLeft">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Corporate Office</h3>
            <div className="space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={24} />
                <p className="ml-4 text-sm sm:text-base">TVR Mansion, Plot No. 666, Road No. 34, Jubilee Hills, Hyderabad – 500034</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-amber-400 flex-shrink-0" size={24} />
                <p className="ml-4 text-sm sm:text-base">86390 90514</p>
              </div>
              <div className="flex items-start">
                <Mail className="text-amber-400 flex-shrink-0 mt-1" size={24} />
                <div className="ml-4 text-sm sm:text-base">
                  <p>sales@avnyasmartbuilds.in</p>
                  <p>avnyasmartbuilds@gmail.com</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">Leadership</h3>
            <div className="space-y-3">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-semibold text-sm sm:text-base">Rayudu KK – Director</p>
                <p className="text-sm sm:text-base">📞 96030 24303</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="font-semibold text-sm sm:text-base">Rohit Pulipati – Managing Director</p>
                <p className="text-sm sm:text-base">📞 86390 90514</p>
              </div>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl">
              <div className="mb-4">
                <label className="block mb-2 font-semibold text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-amber-400 transition-colors text-white placeholder-gray-300"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-amber-400 transition-colors text-white placeholder-gray-300"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold text-sm sm:text-base">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-amber-400 transition-colors text-white placeholder-gray-300"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-sm sm:text-base">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-amber-400 transition-colors resize-none text-white placeholder-gray-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Request a Project Estimate
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;