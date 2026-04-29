import { Sparkles } from "lucide-react";
import React from "react";
import heroBg from "../assets/images/hero/hero-4-img1.jpg";
const galleryImages = [
  {
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    title: "Solar Panel Installation",
    desc: "High-quality rooftop solar panel installations for homes and businesses.",
  },
  {
    img: "https://images.unsplash.com/photo-1581091870627-3c0f3e44d3f5",
    title: "Site Inspection",
    desc: "Detailed site analysis to determine optimal solar capacity and placement.",
  },
  {
    img: "https://images.unsplash.com/photo-1592833159057-5c8b98e8c6c3",
    title: "System Design",
    desc: "Customized solar system designs for maximum efficiency and savings.",
  },
  {
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    title: "Professional Installation Team",
    desc: "Certified technicians ensuring safe and efficient system setup.",
  },
  {
    img: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
    title: "Commercial Solar Solutions",
    desc: "Large-scale solar solutions tailored for industries and businesses.",
  },
  {
    img: "https://images.unsplash.com/photo-1584270354949-1d3a7b0c98b2",
    title: "Residential Solar Systems",
    desc: "Affordable solar energy solutions for homes with long-term savings.",
  },
  {
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    title: "Solar Maintenance",
    desc: "Regular maintenance services to ensure peak system performance.",
  },
  {
    img: "https://images.unsplash.com/photo-1599422314070-7b98b6df6f68",
    title: "Energy Monitoring",
    desc: "Real-time monitoring systems to track energy production and savings.",
  },
  {
    img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d",
    title: "Sustainable Energy",
    desc: "Promoting clean, renewable energy for a greener future.",
  },
  {
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
    title: "Solar Power Plant",
    desc: "Utility-scale solar power solutions for large energy demands.",
  },
  {
    img: "https://images.unsplash.com/photo-1581093588401-22a3c9c7e0c5",
    title: "Quality Assurance",
    desc: "Strict quality checks for durability and long-lasting performance.",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "End-to-End Support",
    desc: "Complete solar solutions from consultation to after-sales service.",
  },
];


const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur text-xs font-semibold tracking-widest uppercase">
              <Sparkles
                className="w-4 h-4 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              Gallery & Highlights
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-[600]  mb-4 leading-tight">
              Gallery & Highlights
            </h2>

            <p className="text-white text-sm font-medium">
              <a href="#">Home</a> <span className="mx-2">{">"}</span>{" "}
              <span className="text-primary"> Gallery </span>
            </p>
          </div>
        </div>
      </section>
      {/* GALLERY GRID SECTION */}
      <section className="lg:max-w-[1400px]  mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 cursor-pointer">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight ">
            Inside{" "}
            <span className="text-green-600">Star India Energy Solutions</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            A visual journey through our solar projects, installation process,
            and commitment to clean energy solutions.
          </p>
        </div>

        {/* Responsive Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-xl
        ${index === 0 || index === 4 ? "row-span-2" : ""}`}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Caption */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h4 className="text-white font-semibold text-lg">
                  {item.title}
                </h4>
                <p className="text-red-100 text-sm mt-1">{item.desc}</p>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
