import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto bg-orange-500 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          Start Your Solar Journey
        </h2>

        <p className="mb-8">Get a free consultation today.</p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-full flex items-center gap-2">
            <Phone /> Call
          </button>

          <button className="bg-black px-6 py-3 rounded-full flex items-center gap-2">
            <Mail /> Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
