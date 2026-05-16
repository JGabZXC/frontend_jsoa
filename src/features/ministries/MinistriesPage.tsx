import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  Flame,
  Heart,
  Leaf,
  MapPin,
  Music,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../app/routes";
import { MarqueeBand } from "../../shared";

type Highlight = {
  label: string;
  value: string;
  detail: string;
};

type Ministry = {
  title: string;
  summary: string;
  rhythm: string;
  focus: string;
  accent: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

type Rhythm = {
  day: string;
  time: string;
  location: string;
  focus: string;
  accent: string;
};

type ServeStep = {
  title: string;
  description: string;
  accent: string;
};

export function MinistriesPage() {
  const navigate = useNavigate();
  const highlights: Highlight[] = [
    {
      label: "Ministry Teams",
      value: "9",
      detail: "Volunteer-led teams serving weekly.",
    },
    {
      label: "Weekly Touchpoints",
      value: "18+",
      detail: "Gatherings and outreach moments.",
    },
    {
      label: "Years of Service",
      value: "28",
      detail: "Faithful stewardship since 1996.",
    },
  ];

  const ministries: Ministry[] = [
    {
      title: "Worship & Creative",
      summary:
        "Sound, music, and visual storytelling that draw hearts to the presence of God.",
      rhythm: "Sunday 3:30 PM",
      focus: "Gather + Prepare",
      accent: "#B30000",
      icon: Music,
    },
    {
      title: "Next Gen Ignite",
      summary:
        "Equipping kids and youth with Scripture, courage, and community to stand firm.",
      rhythm: "Wednesday 6:00 PM",
      focus: "Disciple + Equip",
      accent: "#2E5E8C",
      icon: Flame,
    },
    {
      title: "Care & Prayer",
      summary:
        "Intercession, counseling, and practical support for the church family.",
      rhythm: "Daily Rotation",
      focus: "Pray + Care",
      accent: "#8C6B3E",
      icon: Heart,
    },
    {
      title: "Biblical Formation",
      summary:
        "Small groups, studies, and mentorship designed for spiritual depth.",
      rhythm: "Friday 7:00 PM",
      focus: "Teach + Grow",
      accent: "#6D7C5B",
      icon: BookOpen,
    },
    {
      title: "Community Outreach",
      summary:
        "Local compassion projects and partnerships across Bacoor and beyond.",
      rhythm: "Monthly Saturdays",
      focus: "Serve + Send",
      accent: "#B30000",
      icon: Users,
    },
    {
      title: "Hospitality & Welcome",
      summary:
        "Creating a warm first impression for every guest and every family.",
      rhythm: "Every Gathering",
      focus: "Welcome + Guide",
      accent: "#2E5E8C",
      icon: Leaf,
    },
  ];

  const rhythms: Rhythm[] = [
    {
      day: "Sunday",
      time: "4 Dynamic Sessions",
      location: "Main Sanctuary",
      focus: "Worship, Word, and Altar Ministry.",
      accent: "#B30000",
    },
    {
      day: "Wednesday",
      time: "6:00 PM - 8:00 PM",
      location: "Youth Hall",
      focus: "Next Gen night with teaching and mentoring.",
      accent: "#2E5E8C",
    },
    {
      day: "Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Prayer Chapel",
      focus: "Intercession and healing services.",
      accent: "#8C6B3E",
    },
  ];

  const serveSteps: ServeStep[] = [
    {
      title: "Discover",
      description:
        "Find your gifting and your heartbeat through a guided orientation.",
      accent: "#B30000",
    },
    {
      title: "Train",
      description:
        "Serve alongside leaders who model excellence, humility, and care.",
      accent: "#2E5E8C",
    },
    {
      title: "Launch",
      description:
        "Step into your team with clarity, mentorship, and confidence.",
      accent: "#6D7C5B",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F3F3] font-sans selection:bg-[#B30000] selection:text-white">
      <section className="relative overflow-hidden pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 opacity-60"
        >
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2000&auto=format&fit=crop"
            alt="Ministry gathering"
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/80 to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 max-w-350 mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-[#8C6B3E]" />
                Ministry Atlas
              </p>
              <h1 className="text-5xl md:text-7xl leading-[0.9] font-black uppercase tracking-tighter">
                The Hands and Heart{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-br from-[#B30000] to-[#5a0000] italic">
                  of the House
                </span>
              </h1>
              <p className="mt-6 text-lg text-[#A0A0A0] max-w-xl">
                Every ministry is a doorway for people to encounter Jesus. These
                teams are the living pulse of our church, serving with humility,
                excellence, and holy fire.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("teams")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="group relative overflow-hidden bg-[#F3F3F3] text-[#0A0A0A] py-4 px-7 uppercase tracking-[0.3em] text-xs font-bold"
                >
                  <div className="absolute inset-0 bg-[#B30000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                  <span className="relative z-10 flex items-center gap-3">
                    Meet the Teams <ArrowUpRight size={14} />
                  </span>
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("serve")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="border border-[#333] py-4 px-7 uppercase tracking-[0.3em] text-xs font-bold text-[#F3F3F3] hover:bg-[#F3F3F3] hover:text-[#0A0A0A] transition-colors"
                >
                  Serve With Us
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative bg-[#111] border border-[#222] p-10"
            >
              <div className="absolute -top-4 right-8 bg-[#B30000] text-white text-[10px] uppercase tracking-[0.3em] font-black px-4 py-2">
                Ministry Snapshot
              </div>
              <div className="space-y-6 mt-6">
                {highlights.map((item) => (
                  <div key={item.label} className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl border border-[#222] bg-[#0A0A0A] flex items-center justify-center text-lg font-black text-[#F3F3F3]">
                      {item.value}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C6B3E]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm text-[#A0A0A0]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t border-[#222] pt-6 text-xs uppercase tracking-[0.3em] font-mono text-[#8C6B3E]">
                "Each part doing its work" - Ephesians 4:16
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-[#222] overflow-hidden bg-[#0A0A0A]">
        <MarqueeBand text="MINISTRIES • SERVE • DISCIPLE • WORSHIP • COMMUNITY" />
      </section>

      <section id="teams" className="py-24 border-t border-[#222]">
        <div className="max-w-350 mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-16"
          >
            <div>
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em]">
                Ministry Spectrum
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Where your calling meets the mission.
              </h2>
            </div>
            <p className="max-w-lg text-sm md:text-base text-[#A0A0A0]">
              Explore the primary teams that shepherd our people, disciple our
              next generation, and serve our city.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <motion.article
                  key={ministry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="group relative bg-[#111] border border-[#222] p-8 md:p-10 min-h-72"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: ministry.accent }}
                  />
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: ministry.accent,
                        color: "white",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className="text-xs uppercase tracking-[0.2em] font-mono"
                      style={{ color: ministry.accent }}
                    >
                      {ministry.focus}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl md:text-3xl font-black uppercase tracking-tighter">
                    {ministry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#A0A0A0]">
                    {ministry.summary}
                  </p>
                  <div className="mt-8 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] font-bold text-[#A0A0A0]">
                    <span className="flex items-center gap-2">
                      <Clock size={14} /> {ministry.rhythm}
                    </span>
                    <span className="flex items-center gap-2">
                      Join Team <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#222]">
        <div className="max-w-350 mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-12"
          >
            <div>
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em]">
                Weekly Rhythm
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">
                The pulse of our calendar.
              </h2>
            </div>
            <p className="max-w-lg text-sm md:text-base text-[#A0A0A0]">
              Core gatherings anchor our ministry teams so that every volunteer
              serves from overflow, not exhaustion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {rhythms.map((item, index) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111] border border-[#222] p-8"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs uppercase tracking-[0.3em] font-mono"
                    style={{ color: item.accent }}
                  >
                    {item.day}
                  </span>
                  <Calendar size={18} style={{ color: item.accent }} />
                </div>
                <h3 className="mt-6 text-2xl font-black uppercase tracking-tighter">
                  {item.time}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#A0A0A0]">
                  {item.focus}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-mono text-[#777]">
                  <MapPin size={14} /> {item.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="serve" className="py-24 border-t border-[#222]">
        <div className="max-w-350 mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em]">
                Serve Pathway
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tighter">
                We do not recruit. We release.
              </h2>
              <p className="mt-6 text-base md:text-lg text-[#A0A0A0]">
                Every ministry team is designed to develop people, not consume
                them. We walk with you as you discover your calling and step
                into fruitful service.
              </p>
              <div className="mt-10 space-y-6">
                {serveSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-5 items-start">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black"
                      style={{ backgroundColor: step.accent, color: "white" }}
                    >
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl uppercase tracking-tighter font-black">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm text-[#A0A0A0]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative bg-[#111] border border-[#222] p-10 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-40 bg-linear-to-br from-[#B30000]/40 via-transparent to-[#2E5E8C]/30" />
              <div className="relative">
                <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em]">
                  Next Step
                </p>
                <h3 className="mt-4 text-3xl md:text-4xl font-black uppercase tracking-tighter">
                  Let us help you find your place.
                </h3>
                <p className="mt-4 text-sm md:text-base text-[#D1D1D1]">
                  Our leaders will connect you to the right team, training, and
                  schedule. No pressure, just a clear path to serve.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate(appRoutes.prayerRequest)}
                    className="bg-[#F3F3F3] text-[#0A0A0A] py-4 px-6 uppercase tracking-[0.3em] text-xs font-bold flex items-center gap-3 hover:bg-[#B30000] hover:text-white transition-colors"
                  >
                    Talk With Us <ArrowUpRight size={14} />
                  </button>
                  <button
                    onClick={() =>
                      document
                        .getElementById("teams")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="border border-[#333] py-4 px-6 uppercase tracking-[0.3em] text-xs font-bold text-[#F3F3F3] hover:bg-[#F3F3F3] hover:text-[#0A0A0A] transition-colors"
                  >
                    View Teams
                  </button>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6 text-[11px] uppercase tracking-[0.3em] font-bold text-[#A0A0A0]">
                  <div className="flex items-center gap-2">
                    <Users size={14} /> Team Mentors
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} /> Flexible Schedules
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
