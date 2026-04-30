import FadeIn from "./FadeIn";

const stats = [
  { label: "Projects", val: "1200+" },
  { label: "Clients", val: "500+" },
  { label: "States", val: "12+" },
  { label: "Experience", val: "10+" },
];

const StatsSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 text-center">
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 100}>
            <h3 className="text-3xl text-[#e5792b]">{s.val}</h3>
            <p className="text-gray-400">{s.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
