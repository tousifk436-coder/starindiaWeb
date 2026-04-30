import React from "react";
import { useNavigate } from "react-router-dom";
import PageBanner from "../components/sections/PageBanner";
import {
  MessageCircle,
  ArrowRight,
  Sun,
  Zap,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { blogs } from "../services/data/blogData";

const marqueeItems = [
  { icon: Sun, label: "Clean Solar Energy" },
  { icon: Zap, label: "Power Backup Solution" },
  { icon: Leaf, label: "Eco-Friendly System" },
  { icon: TrendingUp, label: "Reduce Electricity Bills" },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <PageBanner />

      {/* MARQUEE */}
      <div className="bg-[#008235] text-white py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 mx-8 text-sm font-semibold"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <section className="w-full md:w-[90%] xl:w-[85%] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post, i) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.url}`)}
              className="group cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image}
                  className="h-56 w-full object-cover rounded-t-2xl"
                />

                {/* COMMENT COUNT */}
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs flex gap-1 items-center">
                  <MessageCircle size={14} />
                  {post.comments.length}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#008235]">
                  {post.title}
                </h3>

                <button className="flex items-center gap-2 text-[#008235] text-sm font-semibold">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .marquee-container { overflow:hidden; white-space:nowrap }
        .marquee-content { display:inline-flex; animation:marquee 18s linear infinite }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>
    </div>
  );
};

export default Blog;
