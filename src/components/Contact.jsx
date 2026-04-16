import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const whatsappMessage = `
New Contact Form Message

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}
`;

    // Replace with your WhatsApp number (without + sign)
    const url = `https://wa.me/94773005419?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-slate-950 py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-2">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Me
            </span>
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Don't like forms? Send me an email or connect with me on social media.
                I'm always open to discussing new projects or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    Email Me
                  </p>
                  <p className="text-white font-medium">
                    dushmanthakavidu143@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                  <FaLinkedin className="text-blue-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    LinkedIn
                  </p>
                  <p className="text-white font-medium">
                    linkedin.com/in/yourprofile
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="text-white font-medium">
                    Kelaniya, Sri Lanka
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl shadow-xl">
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 ml-1">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    placeholder="+94 7X XXX XXXX"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 ml-1">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-black uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}