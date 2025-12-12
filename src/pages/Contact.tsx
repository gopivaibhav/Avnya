import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://lets-taxify.onrender.com/api/avnya/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data?.message || "Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 mt-10">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT SIDE — UNCHANGED */}
          <div className="animate-fadeInLeft">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Corporate Office
            </h3>

            <div className="space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start">
                <MapPin className="text-amber-400 mt-1" size={24} />
                <p className="ml-4">
                  TVR Mansion, Plot No. 666, Road No. 34, Jubilee Hills,
                  Hyderabad – 500034
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="text-amber-400" size={24} />
                <p className="ml-4">86390 90514</p>
              </div>

              <div className="flex items-start">
                <Mail className="text-amber-400 mt-1" size={24} />
                <div className="ml-4">
                  <p>sales@avnyasmartbuilds.in</p>
                  <p>avnyasmartbuilds@gmail.com</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Leadership
            </h3>

            <div className="space-y-3">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-semibold">Rayudu KK – Director</p>
                <p>📞 96030 24303</p>
              </div>

              <div className="bg-white/10 p-4 rounded-lg">
                <p className="font-semibold">
                  Rohit Pulipati – Managing Director
                </p>
                <p>📞 86390 90514</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — UPDATED FORM ONLY */}
          <div className="animate-fadeInRight">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl"
            >
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-amber-400 text-white"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-amber-400 text-white"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-semibold">Subject</label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/30 focus:border-amber-400 text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-amber-400 resize-none text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 font-bold py-3 rounded-lg transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
