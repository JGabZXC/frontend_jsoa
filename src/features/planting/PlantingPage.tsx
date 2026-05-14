import { motion, useScroll, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowRight, Compass, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../app/routes";

const plantingMetrics = [
  {
    label: "Church Plants",
    value: "12",
    detail: "active communities",
  },
  {
    label: "Leadership Teams",
    value: "18",
    detail: "trained planters",
  },
  {
    label: "Target Regions",
    value: "05",
    detail: "new fields",
  },
  {
    label: "Prayer Partners",
    value: "240",
    detail: "intercessors",
  },
];

const strategy = [
  {
    title: "Discern the Field",
    description:
      "Prayer walks, research, and trusted relationships to hear where the Lord is opening doors.",
    accent: "#B30000",
    icon: Compass,
  },
  {
    title: "Send the Core",
    description:
      "Small, resilient teams embed in the community, serving and building trust month by month.",
    accent: "#8C6B3E",
    icon: Users,
  },
  {
    title: "Establish Presence",
    description:
      "Weekly gatherings, discipleship circles, and leadership development for sustainable growth.",
    accent: "#2E5E8C",
    icon: MapPin,
  },
];

const regions = [
  {
    name: "Northern Cavite Corridor",
    location: "Silang to Imus",
    phase: "Launch 2026",
    description:
      "Rapidly growing neighborhoods with minimal gospel presence and high family density.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    color: "#B30000",
    team: "3 core teams",
  },
  {
    name: "Coastal Communities",
    location: "Noveleta Belt",
    phase: "Relational stage",
    description:
      "Fishing communities seeking practical support, discipleship, and weekly worship hubs.",
    image:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200&auto=format&fit=crop",
    color: "#8C6B3E",
    team: "2 listening teams",
  },
  {
    name: "South Metro Edge",
    location: "Bacoor South",
    phase: "Launch 2027",
    description:
      "New housing clusters with young families and limited access to discipleship.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
    color: "#2E5E8C",
    team: "4 leaders in training",
  },
];

export function PlantingPage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const marquee = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const handleAnchorScroll =
    (targetId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", targetId);
      }
    };

  return (
    <div className="bg-[#0A0A0A] text-[#F3F3F3] font-sans selection:bg-[#B30000] selection:text-white min-h-screen">
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 opacity-55"
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            alt="Church planting teams"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 max-w-350 mx-auto px-6 md:px-12 pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-7"
            >
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-[#8C6B3E]" />
                Church Planting Network
              </p>
              <h1 className="text-[12vw] md:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter">
                Planting
                <br />
                Communities of
                <span className="text-transparent bg-clip-text bg-linear-to-br from-[#B30000] to-[#5a0000] italic">
                  Hope.
                </span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed">
                Establishing gospel-centered congregations that disciple
                leaders, serve neighborhoods, and multiply faith across the
                region.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate(appRoutes.prayerRequest)}
                  className="group relative overflow-hidden bg-[#F3F3F3] text-[#0A0A0A] py-5 px-7 uppercase tracking-[0.2em] text-xs font-bold transition-colors hover:text-[#F3F3F3]"
                >
                  <span className="absolute inset-0 bg-[#B30000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                  <span className="relative z-10 flex items-center gap-3">
                    Partner in Prayer <ArrowRight size={16} />
                  </span>
                </button>
                <a
                  href="#regions"
                  onClick={handleAnchorScroll("#regions")}
                  className="border border-[#333] py-5 px-7 uppercase tracking-[0.2em] text-xs font-bold text-[#F3F3F3] hover:bg-[#F3F3F3] hover:text-[#0A0A0A] transition-colors"
                >
                  View Target Regions
                </a>
              </div>
            </motion.div>

            <div className="lg:col-span-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {plantingMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    className="bg-[#111] border border-[#222] p-6 min-h-36 flex flex-col justify-between items-center text-center"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#777]">
                      {metric.label}
                    </p>
                    <h3 className="text-4xl font-black uppercase tracking-tight mt-4">
                      {metric.value}
                    </h3>
                    <p className="text-sm text-[#A0A0A0] uppercase tracking-[0.2em] mt-2 font-mono">
                      {metric.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-[#222] overflow-hidden bg-[#0A0A0A] relative">
        <motion.div
          style={{ x: marquee }}
          className="whitespace-nowrap flex gap-12 px-6"
        >
          <h2 className="text-[7vw] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#222] to-[#111] tracking-tighter">
            DISCIPLE LEADERS SEND TEAMS SERVE CITIES PLANT CHURCHES REPEAT
          </h2>
        </motion.div>

        <div className="max-w-350 mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[16/9] md:aspect-[16/10] lg:aspect-[4/5] w-full bg-[#111] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
                alt="Prayer walk"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#8C6B3E] text-[#0A0A0A] p-10 hidden md:block border-4 border-[#0A0A0A]">
              <p className="text-6xl font-black mb-1 font-serif">28</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Years of
                <br />
                Faithfulness
              </p>
            </div>
          </div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B30000]" />
              <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#A0A0A0]">
                Our Planting Rhythm
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              From Prayer to Presence.
            </h2>
            <p className="text-[#A0A0A0] text-lg leading-relaxed mb-10">
              Every church plant begins with intercession, grows through
              incarnational mission, and matures through local leadership
              development.
            </p>

            <div className="space-y-6">
              {strategy.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ delay: index * 0.15, duration: 0.7 }}
                    className="flex flex-col sm:flex-row gap-6 border border-[#222] bg-[#111] p-6"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: step.accent }}
                    >
                      <Icon size={26} className="text-[#0A0A0A]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#A0A0A0] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="regions" className="py-24 px-6 md:px-12 max-w-350 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#222] pb-10">
          <div>
            <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-4">
              Target Regions
            </p>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
              Where We Are Planting.
            </h2>
          </div>
          <p className="text-[#A0A0A0] max-w-md uppercase text-sm tracking-widest font-mono">
            Each location has a shepherding plan, local mentors, and clear
            discipleship goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {regions.map((region, index) => (
            <motion.article
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative bg-[#111] border border-[#222] overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                <div
                  className="absolute left-6 top-6 px-4 py-2 text-xs uppercase tracking-[0.3em] font-mono"
                  style={{ backgroundColor: region.color, color: "#0A0A0A" }}
                >
                  {region.phase}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] font-mono">
                  <span style={{ color: region.color }}>Active Field</span>
                  <span className="text-[#777] flex items-center gap-2">
                    <MapPin size={14} /> {region.location}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black uppercase tracking-tighter">
                  {region.name}
                </h3>
                <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">
                  {region.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] font-bold text-[#A0A0A0]">
                  <span>{region.team}</span>
                  <button
                    type="button"
                    className="flex items-center gap-2 hover:text-[#F3F3F3] transition-colors"
                  >
                    Plan Details <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F3F3] text-[#0A0A0A] py-28 px-6">
        <div className="max-w-350 mx-auto text-center flex flex-col items-center">
          <Users size={48} className="text-[#B30000] mb-8" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 max-w-4xl">
            Partner With the Mission.
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#555] mb-12 max-w-2xl">
            Pray, give, and go with us as we raise local leaders and establish
            worshiping communities.
          </p>
          <button
            onClick={() => navigate(appRoutes.prayerRequest)}
            className="bg-[#0A0A0A] text-[#F3F3F3] py-6 px-12 uppercase tracking-[0.2em] font-bold text-sm hover:bg-[#B30000] transition-colors flex items-center gap-4"
          >
            Submit Prayer Request <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
