import React, { useEffect, useState } from "react";
// import value from "../assets/Banner 4.jpg";
import { Sparkles, CheckCircle } from "lucide-react";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white bg-cover bg-center"
        
      >
        {/* STRONG DARK OVERLAY (MAIN FIX) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Glow blobs */}
        <div className="absolute inset-0 opacity-25 pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-400 rounded-full blur-3xl" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-28">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur text-xs font-semibold tracking-widest uppercase mb-6">
              <Sparkles
                className="w-4 h-4 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              A Journey of Taste, Trust & Tradition
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-[600]  mb-4 leading-tight">
              About Us
            </h2>

            <p className="text-white text-sm font-medium">
              <a href="#">Home</a> <span className="mx-2">{">"} </span>{" "}
              <span className="text-primary"> About Us</span>
            </p>
          </div>
        </div>
      </section>
      {/* fgf */}

      {/* Welcome Section - Left Aligned */}
      <div className="container w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 py-6 md:px-8 py-8 md:py-20">
        <section className="animate-fadeIn">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT (Text) */}
            <div className="order-2 lg:order-1">
              {/* Label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-0.5 bg-primary"></div>
                <p className="text-primary font-bold text-lg uppercase tracking-wider">
                  Welcome to solar energy
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight ">
                About <span className="text-primary">solar energy</span>
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p
                  className="animate-fadeInUp"
                  style={{ animationDelay: "100ms" }}
                >
                  solar energy has established itself as a trusted name in the
                  spice industry. Born in India's spice capital, we take pride
                  in being an authentic spice & salt supplier that delivers
                  spices with unmatched quality, freshness, and taste. Our
                  commitment to sourcing the finest ingredients has made us a
                  preferred choice among households and commercial
                  establishments alike.
                </p>

                <p
                  className="animate-fadeInUp"
                  style={{ animationDelay: "200ms" }}
                >
                  We are also one of the finest ingredients processor and
                  exporter which excels in processing and packaging of
                  raw/processed spices. The products have been approved by
                  buyers and exporters around the world.
                </p>

                <p
                  className="animate-fadeInUp"
                  style={{ animationDelay: "300ms" }}
                >
                  The secret of our success lies in our uncompromised dedication
                  to preserving traditional spice blends while embracing modern
                  processing techniques.
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT (Images) */}
            <div className="relative w-full h-[420px] sm:h-[460px] md:h-[500px] order-1 lg:order-2">
              {/* Top Right Image */}
              <div
                className="group absolute top-6 sm:top-8 md:top-10 right-4 sm:right-8 md:right-12
      w-60 h-72 sm:w-64 sm:h-80 md:w-72 md:h-88 rounded-3xl overflow-hidden shadow-2xl"
              >
               
              </div>

              {/* Bottom Left Image */}
              <div
                className="group absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-8 md:left-12
      w-60 h-72 sm:w-64 sm:h-80 md:w-72 md:h-88 rounded-3xl overflow-hidden shadow-2xl"
              >
               
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* our products   */}
      <section className="bg-gray-50 py-8 md:py-20">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* IMAGE */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-400 rounded-2xl blur-2xl opacity-20" />
             
            </div>

            {/* CONTENT */}
            <div className="space-y-6 order-1 md:order-2">
              {/* Label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-0.5 bg-primary"></div>
                <p className="text-primary font-bold text-lg uppercase tracking-wider">
                  Our Products & Services
                </p>
              </div>

              <h5 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight ">
                Grounded <span className="text-primary">Spices</span>
              </h5>

              <p className="text-gray-600 text-justify text-lg">
                We supply premium quality whole and ground spices in bulk
                quantities to hotels, restaurants, caterers, and food processing
                units. Our range includes turmeric, red chilli powder,
                coriander, cumin, garam masala, and various blended masalas
                perfect for large-scale operations.
              </p>

              <h5 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight">
                Blended <span className="text-primary">Spices</span>
              </h5>

              <p className="text-gray-600 text-justify text-lg">
                Blended out of the finest ingredients like coriander,
                high-quality food spices include kitchen essentials like sambhar
                masala, pav bhaji masala, chana masala, meat masala, chicken
                masala, and authentic regional spice blends. Our products have
                been meticulously crafted to deliver authentic taste while
                maintaining modern hygiene standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-8 md:py-20">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Content */}
            <div className="space-y-6">
              {/* Label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-0.5 bg-primary"></div>
                <p className="text-primary font-bold text-lg uppercase tracking-wider">
                  Our Mission
                </p>
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight ">
                Our <span className="text-primary"> Commitment to Quality</span>
              </h3>

              <p className="text-gray-600 text-justify text-lg">
                Our mission is to provide hygiene and first-rate quality
                products to our valued customers. We are striving to deliver
                top-notch products to India, beyond, and into the future, where
                we have a promise of making our customer satisfied by providing
                them with exceptional taste, meeting their expectations,
                ensuring on-time delivery, offering competitive pricing, and
                delivering unparalleled excellence in all aspects.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  Integrity
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  Honesty
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  Teamwork
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                  Discipline Over Hype & Execution
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-100 rounded-2xl blur-2xl opacity-20" />
             
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className=" py-8 md:py-20">
        <div className="container w-full md:w-[85%] 2xl:w-[75%]  mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <p className="text-primary font-bold text-sm uppercase tracking-widest">
                Why Choose Us
              </p>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight ">
              What Makes <span className="text-primary">solar energy</span> The
              Flavor Of Every Home
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pure Ingredients, Real Taste",
                desc: "We use only the finest and freshest spices, sourced directly from trusted farms. No added colors or chemicals — just natural goodness in every pinch. Experience the true taste of Indian tradition with every dish you cook.",
                image:
                  "https://img.icons8.com/external-icongeek26-outline-icongeek26/a81e23/external-spices-india-icongeek26-outline-icongeek26.png",
              },
              {
                title: "Made With Love & Expertise",
                desc: "Our masalas are hand-blended using age-old methods and modern hygiene standards. Each pack is a result of passion, care, and deep knowledge of Indian flavors.",
                image:
                  "https://img.icons8.com/pastel-glyph/a81e23/two-hearts--v6.png",
              },
              {
                title: "India’s Trust, Generations’ Love",
                desc: "From bustling cities to quiet villages, Indian families have chosen us with pride. Join the countless kitchens that trust solar energy every single day.",
                image:
                  "https://img.icons8.com/external-outline-design-circle/a81e23/external-Trust-logistic-outline-design-circle.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 mb-6 group-hover:scale-110 transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Quality Assurance */}
      <section className="bg-gray-50 py-8 md:py-20">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* IMAGE */}
            {/* <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-400 rounded-2xl blur-2xl opacity-20" />
              <img
                src="https://i.pinimg.com/736x/cd/a2/9a/cda29ab072ad27c3d410256920531533.jpg"
                alt="Indian Grounded Spices"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[420px]"
              />
            </div> */}

            {/* CONTENT */}
            <div className="space-y-6 order-1 md:order-2">
              {/* Label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-0.5 bg-primary"></div>
                <p className="text-primary font-bold text-lg uppercase tracking-wider">
                  Quality Assurance
                </p>
              </div>

              <h5 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight ">
                Quality<span className="text-primary"> Assurance</span>
              </h5>

              <p className="text-gray-600 text-justify text-lg">
                Our commitment to quality begins right from the sourcing of raw
                materials. We follow strict quality regulations at every stage
                of the preparation process. Every ingredient is tested for
                purity and authenticity. We ensure hygienic processing and
                storage conditions to maintain the freshness and potency of our
                spices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership & Management Team */}
      <section className="bg-white py-8 md:py-20">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Content */}
            <div className="space-y-6">
              {/* Label */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-0.5 bg-primary"></div>
                <p className="text-primary font-bold text-lg uppercase tracking-wider">
                  Ownership & Management Team
                </p>
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight ">
                Ownership{" "}
                <span className="text-primary">& Management Team</span>
              </h3>

              <p className="text-gray-600 text-justify text-lg">
                solar energy operates as a professionally managed enterprise, led
                by an experienced team passionate about preserving authentic
                flavors and delivering excellence at every level. Excellence is
                nothing but delivering our offering. Our management brings
                together traditional knowledge of spices and modern business
                practices. The leadership ensures strict quality control while
                staying innovative with product development. We take pride in
                our team's dedication to customer satisfaction and their
                continuous efforts to maintain our reputation for excellence.
              </p>
            </div>

            {/* Image */}
            {/* <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-100 rounded-2xl blur-2xl opacity-20" />
              <img
                src="https://i.pinimg.com/736x/39/7e/0f/397e0f6867c2443ea093523d617698d2.jpg"
                alt="Grounded Spices"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[420px]"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      {/* <section className="text-left text-black md:p-12 transform hover:scale-105 transition-transform duration-300 mb-15">
        <p className="text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
          <span className="font-bold text-red-800">
            Stay faithful and your taste will be the beginning of a happy color
            fest
          </span>{" "}
          with us to securely profitable and satisfying for both of us way both
          of us now and even more beyond as a new warrior.
        </p>
      </section> */}
    </div>
  );
};

export default About;
