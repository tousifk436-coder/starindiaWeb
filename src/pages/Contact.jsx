import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChefHat,
  UtensilsCrossed,
} from "lucide-react";
import toast from "react-hot-toast";
import PageBanner from "../components/sections/PageBanner";
import contactImg from "../assets/images/about/about-page-img1.png"; // 👉 apni image
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Static Contact Data
  const message = encodeURIComponent(
    "Hello, I am seeking treatment and would like to know the further process. Please reply as per your convenience.",
  );

  const contactData = [
    {
      icon: Phone,
      title: "Call Us",
      info: [
        {
          text: "+91 9616664333",
          link: `https://wa.me/919616664333?text=${message}`,
          type: "whatsapp",
        },
        {
          text: "+91 9454994229",
          link: "tel:+919454994229",
          type: "call",
        },
      ],
      subinfo: "Mon-Sat, 09:45 am - 05 pm",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: {
        text: "info@kalyanihomeopathy.com",
        link: "mailto:info@kalyanihomeopathy.com",
      },
      subinfo: "We reply within 24hrs",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: {
        text: "E-3/37, Vijayipur, Vishesh Khand 3, Gomti Nagar, Lucknow",
        link: "https://maps.app.goo.gl/mso5EmJt4E17GyRL6",
      },
    },
  ];

  // ✅ Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ✅ Submit (STATIC)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    toast.success("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Banner */}
      <PageBanner />

      <div className="w-full lg:w-[85%] md:w-[85%] 2xl:w-[85%]  mx-auto px-4 py-12 md:py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            Get In <span className="text-[#008235]">Touch</span>
          </h2>
          <p className="text-gray-600">We'd love to hear from you</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-[#008235] rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-white" />
              </div>

              <h3 className="text-xl font-semibold text-center">
                {item.title}
              </h3>

              <div className="text-center text-gray-700 font-medium mt-2 space-y-1">
                {Array.isArray(item.info) ? (
                  item.info.map((infoItem, i) => (
                    <div
                      key={i}
                      className="flex justify-center items-center gap-2"
                    >
                      {/* 🔹 Conditional Icon */}
                      {infoItem.type === "whatsapp" ? (
                        <FaWhatsapp className="text-green-500" />
                      ) : (
                        <Phone className="text-blue-500 w-4 h-4" />
                      )}

                      {/* 🔹 Clickable Link */}
                      <a
                        href={infoItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {infoItem.text}
                      </a>
                    </div>
                  ))
                ) : (
                  <a
                    href={item.info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.info.text}
                  </a>
                )}
              </div>

              {item.subinfo && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  {item.subinfo}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FORM + IMAGE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full h-full object-cover min-h-[400px]"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">We’re Here to Help</h3>
              <p className="text-sm">Contact us anytime</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <Send className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-green-600">
                  Message Sent!
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 🔹 Heading */}
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#008235]">
                    Send us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    We’ll get back to you as soon as possible
                  </p>
                </div>

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#008235] 
focus:border-[#008235]
 transition"
                />
                {errors.name && (
                  <p className="text-[#e5792b] text-sm">{errors.name}</p>
                )}

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#2c408c] 
focus:border-[#2c408c] transition"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#2c408c] 
focus:border-[#2c408c] transition"
                  />
                </div>

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#2c408c] 
focus:border-[#2c408c] transition"
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#2c408c] 
focus:border-[#2c408c] transition"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-[#008235] text-white py-3 rounded-xl hover:bg-[#006b2c]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* MAP (Same as yours) */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1639312725906!2d81.0178889!3d26.8665323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be292f9509067%3A0xdcb8b6d65f923bce!2sKalyani%20Classical%20Homeopathic%20Clinic!5e0!3m2!1sen!2sin!4v1774440811181!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
