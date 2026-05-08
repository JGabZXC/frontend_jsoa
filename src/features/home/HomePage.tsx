import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Calendar,
  Clock,
  Heart,
  Globe,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../app/routes";

export function HomePage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [activeAnnouncement, setActiveAnnouncement] = useState<number | null>(
    null,
  );
  const announcements = [
    {
      title: "Prayer and Fasting Week",
      date: "May 13-17",
      time: "6:30 PM",
      type: "Prayer Focus",
      description:
        "Evening gatherings for worship, guided prayer, and testimonies of breakthrough.",
      color: "#B30000",
      image:
        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Family Dedication",
      date: "June 2",
      time: "After 2nd Service",
      type: "Family",
      description:
        "Parents and leaders stand together to pray over the next generation.",
      color: "#8C6B3E",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Community Outreach Day",
      date: "June 15",
      time: "8:00 AM",
      type: "Outreach",
      description:
        "Serve our neighborhoods through compassion projects and prayer walks.",
      color: "#2E5E8C",
      image:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  const activeAnnouncementItem =
    activeAnnouncement === null ? null : announcements[activeAnnouncement];

  return (
    <div className="bg-[#0A0A0A] text-[#F3F3F3] font-sans selection:bg-[#B30000] selection:text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col justify-end p-6 md:p-12 overflow-hidden bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 opacity-50"
        >
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
            alt="Church Sanctuary"
            className="w-full h-full object-cover filter contrast-[1.2] grayscale pt-20"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </motion.div>

        <div className="relative z-10 w-full max-w-350 mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-4xl"
          >
            <p className="text-[#8C6B3E] font-mono text-sm md:text-base uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
              <span className="w-12 h-px bg-[#8C6B3E]" />
              Est. 1996 • General Trias, Cavite
            </p>
            <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter text-[#F3F3F3]">
              JESUS <br /> CHRIST{" "}
              <span className="inline-block pr-2 text-transparent bg-clip-text bg-linear-to-br from-[#B30000] to-[#5a0000] italic">
                SAVIOR
              </span>{" "}
              <br /> OF ALL.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:max-w-xs"
          >
            <p className="text-lg font-light leading-relaxed text-[#A0A0A0] border-l border-[#222] pl-6 py-2">
              A Christ-centered community devoted to worship, fellowship, and
              the great commission since 1996.
            </p>
            <button
              onClick={() => navigate(appRoutes.prayerRequest)}
              className="group relative w-full overflow-hidden bg-[#F3F3F3] text-[#0A0A0A] py-6 px-8 rounded-none font-bold uppercase tracking-widest text-sm transition-all hover:text-[#F3F3F3]"
            >
              <div className="absolute inset-0 bg-[#B30000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
              <span className="relative z-10 flex items-center justify-between">
                Prayer Request{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* TYPOGRAPHY MARQUEE & MANIFESTO */}
      <section className="py-20 border-y border-[#222] overflow-hidden bg-[#0A0A0A] relative">
        <motion.div
          style={{ x: y1 }}
          className="whitespace-nowrap flex gap-12 px-6"
        >
          <h2 className="text-[8vw] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#222] to-[#111] tracking-tighter">
            ROOTED IN SCRIPTURE DRIVEN BY LOVE FOUNDATIONS OF FAITH
          </h2>
        </motion.div>

        <div className="max-w-350 mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-3/4 w-full bg-[#111] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1544427928-c49cdfebf194?q=80&w=1974&auto=format&fit=crop"
                alt="Community"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
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
          </div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-6 flex flex-col justify-center space-y-12">
            <div className="bg-[#111] p-10 border-l-4 border-[#B30000]">
              <div className="flex items-center gap-6 mb-6">
                <Heart size={32} className="text-[#B30000]" />
                <h4 className="font-black text-3xl uppercase tracking-tighter">
                  The Vision.
                </h4>
              </div>
              <p className="text-[#A0A0A0] text-lg font-light leading-relaxed">
                Transforming lives through the relentless pursuit of Christ's
                presence.
              </p>
            </div>
            <div className="bg-[#111] p-10 border-l-4 border-[#8C6B3E]">
              <div className="flex items-center gap-6 mb-6">
                <Globe size={32} className="text-[#8C6B3E]" />
                <h4 className="font-black text-3xl uppercase tracking-tighter">
                  The Mission.
                </h4>
              </div>
              <p className="text-[#A0A0A0] text-lg font-light leading-relaxed">
                To reach every soul with the Gospel and equip believers for
                spiritual maturity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="py-24 border-y border-[#222] overflow-hidden bg-[#0A0A0A] relative">
        <motion.div
          style={{ x: y2 }}
          className="whitespace-nowrap flex gap-12 px-6"
        >
          <h2 className="text-[7vw] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#222] to-[#111] tracking-tighter">
            ANNOUNCEMENTS UPCOMING MOMENTS LATEST UPDATES
          </h2>
        </motion.div>

        <div className="max-w-350 mx-auto px-6 md:px-12 mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                <Bell size={14} /> Latest Announcements
              </p>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
                What's Happening.
              </h2>
            </div>
            <p className="text-[#A0A0A0] max-w-md uppercase text-sm tracking-widest font-mono">
              Calendar highlights and gatherings you won't want to miss.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="group relative bg-[#111] border border-[#222] p-8 md:p-10 min-h-72"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: item.color }}
                />
                <div className="relative w-full aspect-square overflow-hidden bg-[#0A0A0A] mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] font-mono">
                  <span style={{ color: item.color }}>{item.type}</span>
                  <span className="text-[#777] flex items-center gap-2">
                    <Calendar size={14} /> {item.date}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-black uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-[#A0A0A0] leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-8 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] font-bold text-[#A0A0A0]">
                  <span className="flex items-center gap-2">
                    <Clock size={14} /> {item.time}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveAnnouncement(i)}
                    className="flex items-center gap-2 hover:text-[#F3F3F3] transition-colors"
                  >
                    See Details <ArrowRight size={12} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {activeAnnouncementItem ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10"
            onClick={() => setActiveAnnouncement(null)}
          >
            <div
              className="relative w-full max-w-3xl h-[80vh] bg-[#0A0A0A] border border-[#222] overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${activeAnnouncementItem.title} details`}
            >
              <button
                type="button"
                onClick={() => setActiveAnnouncement(null)}
                className="absolute right-6 top-6 z-10 text-[#A0A0A0] hover:text-[#F3F3F3]"
                aria-label="Close announcement details"
              >
                <X size={20} />
              </button>
              <div className="w-full overflow-hidden bg-[#111] border-b border-[#222]">
                <img
                  src={activeAnnouncementItem.image}
                  alt={activeAnnouncementItem.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] font-mono">
                  <span style={{ color: activeAnnouncementItem.color }}>
                    {activeAnnouncementItem.type}
                  </span>
                  <span className="text-[#777] flex items-center gap-2">
                    <Calendar size={14} /> {activeAnnouncementItem.date}
                  </span>
                  <span className="text-[#777] flex items-center gap-2">
                    <Clock size={14} /> {activeAnnouncementItem.time}
                  </span>
                </div>
                <h3 className="mt-6 text-3xl md:text-4xl font-black uppercase tracking-tighter">
                  {activeAnnouncementItem.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-[#A0A0A0] leading-relaxed">
                  {activeAnnouncementItem.description}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      {/* SCHEDULE */}
      <section className="py-32 px-6 md:px-12 max-w-350 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-[#222] pb-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Gatherings.
          </h2>
          <p className="text-[#A0A0A0] max-w-sm uppercase text-sm tracking-widest font-mono">
            Experience the presence of God in community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              title: "Lord's Day Worship",
              time: "4 Dynamic Sessions",
              date: "Every Sunday",
              type: "Main Worship",
              color: "#B30000",
              img: "https://images.unsplash.com/photo-1544427928-c49cdfebf194?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "Youth Ignition",
              time: "6:00 PM - 8:00 PM",
              date: "Every Wednesday",
              type: "Youth Ministry",
              color: "#2E5E8C",
              img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
            },
          ].map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group relative bg-[#111] overflow-hidden min-h-125 flex flex-col justify-end p-8 md:p-12"
            >
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <img
                  src={event.img}
                  className="w-full h-full object-cover grayscale mix-blend-overlay scale-105 group-hover:scale-100 transition-transform duration-1000"
                  alt={event.title}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
              </div>

              <div className="relative z-10 w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="h-px w-8"
                    style={{ backgroundColor: event.color }}
                  />
                  <span
                    className="text-xs font-mono uppercase tracking-[0.2em]"
                    style={{ color: event.color }}
                  >
                    {event.type}
                  </span>
                </div>
                <h4 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
                  {event.title}
                </h4>
                <div className="flex flex-col sm:flex-row gap-6 text-[#A0A0A0] text-sm font-mono tracking-widest uppercase mb-10">
                  <span className="flex items-center gap-3">
                    <Clock size={16} /> {event.time}
                  </span>
                  <span className="flex items-center gap-3">
                    <Calendar size={16} /> {event.date}
                  </span>
                </div>

                <button className="w-full border border-[#333] py-5 px-6 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#F3F3F3] hover:text-[#0A0A0A] transition-colors flex justify-between items-center">
                  Details & RSVP <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA ZONE STRIPPED */}
      <section className="bg-[#F3F3F3] text-[#0A0A0A] py-32 px-6">
        <div className="max-w-350 mx-auto text-center flex flex-col items-center">
          <Globe size={48} className="text-[#B30000] mb-8" />
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 max-w-4xl">
            Join The Movement.
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#555] mb-12 max-w-2xl">
            A place to belong, a place to grow. Connect with us this week.
          </p>
          <button
            onClick={() => navigate(appRoutes.ministries)}
            className="bg-[#0A0A0A] text-[#F3F3F3] py-6 px-12 uppercase tracking-[0.2em] font-bold text-sm hover:bg-[#B30000] transition-colors flex items-center gap-4"
          >
            Explore Ministries <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
