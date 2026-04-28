import React, { useEffect } from "react";
import aboutImg from "../../assets/images/about/about-right-img.png";
import { Phone } from "lucide-react";

const WelcomeSections = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="relative bg-white py-10 md:py-20 overflow-hidden">
      <div className="w-full md:w-[85%] 2xl:w-[70%] mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
        {/* LEFT CONTENT (Slide from LEFT) */}
        <div className="flex flex-col justify-between h-full space-y-6 animate-on-scroll slide-left">
          <p className="text-green-600 font-semibold uppercase tracking-widest text-sm">
            About Star India Energy
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Powering a Greener Future with Smart Solar Solutions
          </h2>

          <p className="text-gray-600 leading-relaxed text-base align-center justify-center">
            At{" "}
            <span className="font-semibold text-green-700">
              Star India Energy Solutions
            </span>
            , we specialize in delivering high-performance solar systems
            designed for homes, businesses, and industries. Our goal is to
            provide clean, reliable, and cost-effective energy solutions that
            help reduce electricity bills and dependency on traditional power
            sources.With a strong focus on quality, innovation, and customer
            satisfaction, we offer end-to-end services including consultation,
            system design, installation, and maintenance.By choosing us, you’re
            not just installing solar panels — you’re investing in a sustainable
            future, reducing your carbon footprint, and contributing to a
            greener and cleaner environment for generations to come.
          </p>

          {/* LIST */}
          <ul className="grid sm:grid-cols-2 gap-3 pt-4">
            {[
              "Save Electricity Bills",
              "Eco-Friendly Energy",
              "Government Subsidy Support",
              "High Efficiency Panels",
              "Fast Installation",
              "24x7 Customer Support",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-800 font-medium hover:translate-x-1 transition"
              >
                <span className="w-5 h-5 bg-green-600 text-white flex items-center justify-center rounded-full text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* STATS */}
          {/* <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700">500+</h3>
              <p className="text-sm text-gray-500">Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700">10+</h3>
              <p className="text-sm text-gray-500">Years</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700">1000+</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
          </div> */}

          {/* BUTTON */}
          <div className="flex flex-wrap items-center gap-6 pt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 shadow-md hover:shadow-xl">
              Explore More
            </button>

            <div className="flex items-center gap-3 border border-gray-300 rounded-full px-2 py-2 pr-5 hover:border-green-600 transition">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-xs text-gray-500">NEED HELP NOW?</p>
                <p className="font-semibold text-gray-900">+91 7860080877</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE (Slide from RIGHT) */}
        <div className="relative animate-on-scroll slide-right group h-full flex items-center justify-center">
          <img
            src={aboutImg}
            alt="about"
            className="w-full h-full max-h-[500px] object-cover rounded-lg transition duration-500 group-hover:scale-105"
          />

          {/* Shine */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/20 skew-x-12 transform group-hover:translate-x-[200%] transition duration-1000"></div>
          </div>

          {/* Ripple */}
          <div className="absolute -bottom-6 -right-6 w-28 h-28 border-4 border-orange-400 rounded-full animate-ping opacity-40"></div>

          {/* Glow */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-500 opacity-20 blur-2xl rounded-full"></div>
        </div>
      </div>

      {/* 🔥 Animation Styles */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s ease;
        }

        .slide-left {
          transform: translateX(-80px);
        }

        .slide-right {
          transform: translateX(80px);
        }

        .show {
          opacity: 1 !important;
          transform: translateX(0px) !important;
        }
      `}</style>
    </section>
  );
};

export default WelcomeSections;
