/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  Share2,
  X,
 
  Mail,
  Check,
  Link2,
  MessageCircle,
} from "lucide-react";
import OtherBlogs from "./OtherBlog";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { blogs } from "../../services/data/blogData";

// ───────── STATIC BLOG DATA (API READY) ─────────
    // const blogData = [
    //   {
    //     url: "solar-benefits",
    //     heading: "Benefits of Solar Energy for Homes",
    //     mainImage:
    //       "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    //     createdAt: "2026-04-20",
    //     details: `
    //       <p>Solar energy is one of the most efficient renewable energy sources available today.</p>
    //       <p>It helps reduce electricity bills, supports sustainability, and provides long-term savings.</p>
    //       <ul>
    //         <li>Save electricity cost</li>
    //         <li>Environment friendly</li>
    //         <li>Low maintenance</li>
    //       </ul>
    //     `,
    //   },
    // ];

// ───────── COMPONENT ─────────
const BlogDetail = () => {
  const { url } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // COMMENTS STATE
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      message: "Very useful blog 🔥",
      date: "2026-04-20",
    },
    {
      id: 2,
      name: "Ankit Verma",
      message: "Loved this explanation!",
      date: "2026-04-21",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

 useEffect(() => {
   const foundBlog = blogs.find((b) => b.url === url);
   setBlog(foundBlog);
 }, [url]);

  // COPY LINK
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // ADD COMMENT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.message) return;

    const newComment = {
      id: Date.now(),
      ...form,
      date: new Date(),
    };

    setComments([newComment, ...comments]);
    setForm({ name: "", message: "" });
  };

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* HEADER */}
      <header className="relative h-[300px] bg-black text-white flex items-center justify-center">
        <img
          src={blog.mainImage}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="text-3xl md:text-5xl font-bold z-10">Blog Details</h1>
      </header>

      {/* MAIN */}
      <section className="w-[90%] max-w-7xl mx-auto py-16 grid lg:grid-cols-12 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-8">
          {/* IMAGE */}
          <img
            src={blog.mainImage}
            className="w-full h-[350px] object-cover rounded-2xl mb-6"
          />

          {/* META */}
          <div className="flex gap-6 text-gray-500 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> {blog.createdAt}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> 10:30 AM
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold mb-6">{blog.heading}</h2>

          {/* CONTENT */}
          <div
            className="prose max-w-none mb-10"
            dangerouslySetInnerHTML={{ __html: blog.details }}
          />

          {/* COMMENTS */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">
              Comments ({comments.length})
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* LIST */}
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {comments.map((c) => (
                  <div key={c.id} className="p-4 bg-white rounded-xl shadow">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">{c.name}</h4>
                      <span className="text-xs text-gray-400">
                        {new Date(c.date).toDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{c.message}</p>
                  </div>
                ))}
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow space-y-4"
              >
                <h4 className="text-lg font-semibold">Leave a Comment</h4>

                <input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border p-3 rounded-lg"
                />

                <textarea
                  rows={4}
                  placeholder="Your Comment"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border p-3 rounded-lg"
                />

                <button className="bg-red-500 text-white py-3 w-full rounded-lg">
                  Submit Comment
                </button>
              </form>
            </div>
          </div>

          {/* SHARE */}
          <div className="mt-12 border-t pt-6">
            <button
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-2 text-red-500 font-semibold"
            >
              <Share2 /> Share Article
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <OtherBlogs currentBlogId={blog.url} />
      </section>

      {/* SHARE MODAL */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md">
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-bold">Share</h3>
              <X onClick={() => setIsShareOpen(false)} />
            </div>

            <div className="flex gap-3 mb-4">
              <input
                value={window.location.href}
                readOnly
                className="border p-2 flex-1"
              />
              <button
                onClick={handleCopyLink}
                className="bg-red-500 text-white px-4 rounded"
              >
                {copySuccess ? <Check /> : <Link2 />}
              </button>
            </div>

            <div className="flex gap-3">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
