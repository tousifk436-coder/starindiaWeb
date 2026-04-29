/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/refs */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { getRequest } from "../../Helpers";

// ── Swiper CSS ──
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ─────────────────────────────────────────
// Static fallback data
// ─────────────────────────────────────────
const staticTestimonials = [
  {
    title: "Rahul Sharma",
    description:
      "Excellent service and great experience. Highly recommended! The team was incredibly professional throughout.",
    rating: 5,
    role: "One Year With Us",
    profileImage:
      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png",
  },
  {
    title: "Neha Verma",
    description:
      "Very professional team and smooth process. Everything was handled with great care and attention to detail.",
    rating: 4,
    role: "One Year With Us",
    profileImage:
      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png",
  },
  {
    title: "Amit Singh",
    description:
      "Affordable and reliable service. Loved every bit of it. Would definitely recommend to friends and family.",
    rating: 5,
    role: "One Year With Us",
    profileImage:
      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png",
  },
  {
    title: "Priya Mehta",
    description:
      "Outstanding support and quick response. Made the whole process seamless and stress-free for us.",
    rating: 5,
    role: "Two Years With Us",
    profileImage:
      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png",
  },
  {
    title: "Vikram Joshi",
    description:
      "Great value for money. The team truly understands customer needs and delivers beyond expectations.",
    rating: 4,
    role: "Six Months With Us",
    profileImage:
      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png",
  },
  {
    title: "Anjali Gupta",
    description:
      "Smooth, reliable and very professional. I would not hesitate to recommend this to anyone around.",
    rating: 5,
    role: "One Year With Us",
    profileImage:
      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png",
  },
  {
    title: "Saurabh Tiwari",
    description:
      "Exceptional quality and timely delivery. Every step was communicated clearly. Truly a 5-star experience.",
    rating: 5,
    role: "Eight Months With Us",
    profileImage:
      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png",
  },
  {
    title: "Divya Rao",
    description:
      "I was skeptical at first, but the results exceeded my expectations. Will definitely use again!",
    rating: 4,
    role: "Three Months With Us",
    profileImage:
      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png",
  },
];

// ─────────────────────────────────────────
// Rating Stars
// ─────────────────────────────────────────
const RatingStars = ({ rating = 0 }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-colors duration-300 ${
          rating >= i
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300 fill-gray-200"
        }`}
      />
    ))}
  </div>
);

// ─────────────────────────────────────────
// Single Card
// ─────────────────────────────────────────
function TestimonialCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative h-full rounded-2xl p-5 sm:p-6 border cursor-pointer
        transition-all duration-300 ease-in-out select-none
        ${
          hovered
            ? "bg-[#008235] border-[#008235] -translate-y-2 shadow-2xl shadow-green-300"
            : "bg-white border-gray-100 translate-y-0 shadow-md"
        }
      `}
    >
      {/* Quote Icon */}
      <div
        className={`
          absolute top-4 right-4 w-7 h-7 rounded-full
          flex items-center justify-center transition-colors duration-300
          ${hovered ? "bg-[#e5792b]" : "bg-[#008235]"}
        `}
      >
        <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mb-4 pr-10">
        <img
          src={
            item.profileImage ||
            "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png"
          }
          alt={item.title}
          className={`
            w-11 h-11 rounded-full object-cover flex-shrink-0 border-2
            transition-colors duration-300
            ${hovered ? "border-[#e5792b]" : "border-gray-200"}
          `}
        />
        <div>
          <p
            className={`text-sm font-semibold leading-tight transition-colors duration-300
              ${hovered ? "text-white" : "text-gray-900"}`}
          >
            {item.title}
          </p>
          <p
            className={`text-xs transition-colors duration-300
              ${hovered ? "text-green-200" : "text-gray-400"}`}
          >
            {item.role || "Our Client"}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-3">
        <RatingStars rating={item.rating} />
      </div>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed transition-colors duration-300
          ${hovered ? "text-green-50" : "text-gray-500"}`}
      >
        "{item.description}"
      </p>
    </div>
  );
}

// ─────────────────────────────────────────
// Skeleton Card
// ─────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-md animate-pulse">
    <div className="flex gap-3 mb-4">
      <div className="w-11 h-11 rounded-full bg-gray-200 flex-shrink-0" />
      <div className="flex-1 space-y-2 pt-1">
        <div className="h-3.5 bg-gray-200 rounded-full w-3/4" />
        <div className="h-3 bg-gray-200 rounded-full w-1/2" />
      </div>
    </div>
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
      ))}
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-200 rounded-full" />
      <div className="h-3 bg-gray-200 rounded-full w-5/6" />
      <div className="h-3 bg-gray-200 rounded-full w-4/6" />
    </div>
  </div>
);

// ─────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────
export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // API fetch → fallback to static
  useEffect(() => {
    setLoading(true);
    const query = new URLSearchParams({
      search: "",
      page: 1,
      limit: 10,
    }).toString();

    getRequest(`testimonials?${query}`)
      .then((res) => {
        const data = res?.data?.data?.testimonials;
        setTestimonials(data && data.length > 0 ? data : staticTestimonials);
      })
      .catch(() => setTestimonials(staticTestimonials))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* ── Custom Swiper CSS (bullet + button overrides) ── */}
      <style>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 99px;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          width: 32px;
          background: #008235;
          border-radius: 99px;
        }
        .testimonial-swiper .swiper-slide {
          height: auto;
        }
        .testimonial-swiper {
          padding-bottom: 48px !important;
        }
        .swiper-btn-prev,
        .swiper-btn-next {
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .swiper-btn-prev:hover,
        .swiper-btn-next:hover {
          background: #008235 !important;
          color: white !important;
          border-color: #008235 !important;
        }
      `}</style>

      <section className=" relative bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto w-full md:w-[85%] 2xl:w-[75%] px-4 sm:px-6 lg:px-8 ">
          {/* ── Header ── */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3">
              <span className="text-green-600 font-semibold uppercase tracking-widest text-sm">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              What Our <span style={{ color: "#008235" }}>Clients Say</span> 
            </h2>
          </div>

          {/* ── Loading Skeletons ── */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[...Array(3)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* ── Swiper ── */}
          {!loading && testimonials.length > 0 && (
            <div className="relative">
              {/* Custom Nav Buttons */}
              <button
                ref={prevRef}
                className="
                  swiper-btn-prev
                  hidden sm:flex
                  absolute left-0 top-[40%] -translate-y-1/2 z-10
                  -translate-x-4 md:-translate-x-6
                  w-9 h-9 md:w-10 md:h-10
                  items-center justify-center
                  bg-white border border-gray-200 rounded-full shadow-md
                  text-[#008235] cursor-pointer
                "
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                ref={nextRef}
                className="
                  swiper-btn-next
                  hidden sm:flex
                  absolute right-0 top-[40%] -translate-y-1/2 z-10
                  translate-x-4 md:translate-x-6
                  w-9 h-9 md:w-10 md:h-10
                  items-center justify-center
                  bg-white border border-gray-200 rounded-full shadow-md
                  text-[#008235] cursor-pointer
                "
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Swiper */}
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                className="testimonial-swiper"
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                speed={600}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
              >
                {testimonials.map((item, i) => (
                  <SwiperSlide key={i}>
                    <TestimonialCard item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* ── No Data ── */}
          {!loading && testimonials.length === 0 && (
            <div className="text-center bg-white rounded-2xl shadow p-10 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Testimonials Found
              </h3>
              <p className="text-gray-500 text-sm">
                Please check back later ✨
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
