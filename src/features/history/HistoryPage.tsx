import { motion, useScroll, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Landmark,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../app/routes";

export function HistoryPage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const marqueeLeft = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const marqueeRight = useTransform(scrollYProgress, [0, 1], [0, 220]);

  const stats = [
    { value: "1996", label: "Established" },
    { value: "28+", label: "Years of Grace" },
    { value: "Citywide", label: "Outreach Rhythm" },
    { value: "Multi-Service", label: "Sundays" },
  ];

  const timeline = [
    {
      year: "1996",
      title: "Prayer in a Living Room",
      description:
        "A small gathering in Bacoor began weekly prayer and worship, believing for a Christ-centered community.",
      accent: "#B30000",
    },
    {
      year: "2005",
      title: "A Recognized Fellowship",
      description:
        "We joined the Assemblies of God council, strengthening leadership, accountability, and discipleship.",
      accent: "#8C6B3E",
    },
    {
      year: "2012",
      title: "Neighborhood to Nation",
      description:
        "Outreach teams formed, youth discipleship launched, and families began leading cell groups across Cavite.",
      accent: "#2E5E8C",
    },
    {
      year: "2018",
      title: "Sanctuary Expansion",
      description:
        "An expanded sanctuary opened for multiple services, making room for a growing church family.",
      accent: "#B30000",
    },
    {
      year: "Today",
      title: "Planting the Future",
      description:
        "We are raising leaders, sending teams, and planting churches across new communities in faith.",
      accent: "#8C6B3E",
    },
  ];

  const pillars: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
    tone: string;
  }> = [
    {
      title: "Scripture First",
      description:
        "Every gathering anchored in the Word, with worship that keeps Jesus at the center.",
      icon: BookOpen,
      tone: "#B30000",
    },
    {
      title: "People Before Programs",
      description:
        "We build family through discipleship, mentoring, and shared table fellowship.",
      icon: Users,
      tone: "#8C6B3E",
    },
    {
      title: "House to Sanctuary",
      description:
        "From living rooms to a growing sanctuary, we make space for the city to encounter God.",
      icon: Landmark,
      tone: "#2E5E8C",
    },
    {
      title: "Sent and Serving",
      description:
        "We go beyond the walls, planting churches and serving neighbors with compassion.",
      icon: MapPin,
      tone: "#B30000",
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-[#F3F3F3] font-sans selection:bg-[#B30000] selection:text-white min-h-screen overflow-x-hidden">
      <section className="relative min-h-[85vh] w-full flex items-end overflow-hidden bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 opacity-60"
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
            alt="Sunrise over the city"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 w-full max-w-350 mx-auto px-6 md:px-12 pb-16 pt-28">
          <p className="text-[#8C6B3E] font-mono text-xs md:text-sm uppercase tracking-[0.35em] mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-[#8C6B3E]" />
            Est. 1996 • General Trias, Cavite
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h1 className="text-[12vw] md:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter">
                Our
                <span className="block text-transparent bg-clip-text bg-linear-to-br from-[#B30000] to-[#5a0000] italic">
                  Legacy
                </span>
              </h1>
              <p className="mt-6 text-[#A0A0A0] text-lg md:text-xl leading-relaxed max-w-xl">
                A story of prayer, perseverance, and a people called to build
                the church across generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#111] border border-[#222] p-5 md:p-6"
                >
                  <p className="text-3xl md:text-4xl font-black text-[#F3F3F3]">
                    {item.value}
                  </p>
                  <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#777] font-mono mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => navigate(appRoutes.prayerRequest)}
              className="group relative overflow-hidden bg-[#F3F3F3] text-[#0A0A0A] py-5 px-8 uppercase tracking-[0.2em] text-xs font-bold transition-all hover:text-[#F3F3F3]"
            >
              <div className="absolute inset-0 bg-[#B30000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
              <span className="relative z-10 flex items-center gap-4">
                Share a Prayer <ArrowRight size={16} />
              </span>
            </button>
            <button
              onClick={() => navigate(appRoutes.ministries)}
              className="border border-[#333] py-5 px-8 uppercase tracking-[0.2em] text-xs font-bold text-[#F3F3F3] hover:bg-[#F3F3F3] hover:text-[#0A0A0A] transition-colors"
            >
              Explore Ministries
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-[#222] overflow-hidden bg-[#0A0A0A] relative">
        <motion.div
          style={{ x: marqueeLeft }}
          className="whitespace-nowrap flex gap-12 px-6"
        >
          <h2 className="text-[8vw] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#222] to-[#111] tracking-tighter">
            LEGACY BUILT ON PRAYER • STORY OF FAITH • CALLED TO SERVE
          </h2>
        </motion.div>

        <div className="max-w-350 mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-3/4 w-full bg-[#111] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1974&auto=format&fit=crop"
                alt="Worship gathering"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#8C6B3E] text-[#0A0A0A] p-10 hidden md:block border-4 border-[#0A0A0A]">
              <p className="text-6xl font-black mb-1 font-serif">28</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Years of
                <br />
                Grace
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-1" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center space-y-10"
          >
            <div className="bg-[#111] p-10 border-l-4 border-[#B30000]">
              <div className="flex items-center gap-6 mb-6">
                <Sparkles size={32} className="text-[#B30000]" />
                <h4 className="font-black text-3xl uppercase tracking-tighter">
                  How It Began.
                </h4>
              </div>
              <p className="text-[#A0A0A0] text-lg font-light leading-relaxed">
                A few families gathered in faith, believing God for a house of
                worship that would impact cities.
              </p>
            </div>
            <div className="bg-[#111] p-10 border-l-4 border-[#8C6B3E]">
              <div className="flex items-center gap-6 mb-6">
                <MapPin size={32} className="text-[#8C6B3E]" />
                <h4 className="font-black text-3xl uppercase tracking-tighter">
                  Where We Are.
                </h4>
              </div>
              <p className="text-[#A0A0A0] text-lg font-light leading-relaxed">
                Rooted in General Trias, we serve the region and send teams to
                new mission fields.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-350 mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
          >
            <div>
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-4">
                Timeline
              </p>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
                Moments of Faithfulness.
              </h2>
            </div>
            <p className="text-[#A0A0A0] max-w-md uppercase text-sm tracking-widest font-mono">
              From living rooms to a growing movement, each season points to the
              faithfulness of God.
            </p>
          </motion.div>

          <div className="relative mt-16">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1.5 bg-[#222] rounded-full" />

            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, i) => (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-10 md:gap-0`}
                >
                  <div
                    className="absolute left-5 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-2xl border-4 border-[#0A0A0A] shadow-xl z-10"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div
                    className={`w-full md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    } pl-12 md:pl-0`}
                  >
                    <div className="bg-[#111] border border-[#222] p-8 md:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span
                          className="text-4xl md:text-5xl font-black italic"
                          style={{ color: item.accent }}
                        >
                          {item.year}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#777]">
                          Milestone
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[#A0A0A0] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-[#222] bg-[#0A0A0A]">
        <motion.div
          style={{ x: marqueeRight }}
          className="whitespace-nowrap flex gap-12 px-6"
        >
          <h2 className="text-[7vw] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#222] to-[#111] tracking-tighter">
            PILLARS OF OUR HOUSE • SCRIPTURE • COMMUNITY • MISSION • WORSHIP
          </h2>
        </motion.div>

        <div className="max-w-350 mx-auto px-6 md:px-12 mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className="bg-[#111] border border-[#222] p-8 md:p-9 min-h-72"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full mb-6"
                    style={{ backgroundColor: `${item.tone}20` }}
                  >
                    <Icon size={22} style={{ color: item.tone }} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] text-[#0A0A0A] py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-350 mx-auto text-center flex flex-col items-center"
        >
          <Sparkles size={44} className="text-[#B30000] mb-8" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 max-w-4xl">
            Write the Next Chapter.
          </h2>
          <p className="text-lg md:text-2xl font-light text-[#555] mb-10 max-w-2xl">
            Join us in prayer, worship, and mission as we step into what God is
            building next.
          </p>
          <button
            onClick={() => navigate(appRoutes.prayerRequest)}
            className="bg-[#0A0A0A] text-[#F3F3F3] py-5 px-12 uppercase tracking-[0.2em] font-bold text-xs hover:bg-[#B30000] transition-colors flex items-center gap-4"
          >
            Partner in Prayer <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
