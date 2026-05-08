import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Heart,
  Mail,
  Phone,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../app/routes";

const displayFont = {
  fontFamily: '"Fraunces", "Iowan Old Style", serif',
};
const bodyFont = {
  fontFamily: '"Manrope", "Avenir", sans-serif',
};

const prayerCare = [
  {
    title: "Confidential care",
    description: "Shared only with trusted intercessors.",
    icon: Shield,
    accent: "#8C6B3E",
  },
  {
    title: "Weekly covering",
    description: "Lifted in gathered prayer throughout the week.",
    icon: Heart,
    accent: "#B30000",
  },
  {
    title: "Pastoral follow-up",
    description: "Include contact details if you want a response.",
    icon: Users,
    accent: "#2E5E8C",
  },
];

const prayerRhythm = [
  {
    title: "Sanctuary covering",
    tag: "Sunday prayer",
    time: "After each gathering",
    description: "Our team prays over every request after worship services.",
    accent: "#B30000",
  },
  {
    title: "Midweek watch",
    tag: "Wednesday focus",
    time: "Evening prayer room",
    description: "Intercessors gather to pray through urgent requests.",
    accent: "#8C6B3E",
  },
  {
    title: "Daily lift",
    tag: "Staff devotion",
    time: "Morning devotion",
    description: "Requests are covered during daily staff prayer.",
    accent: "#2E5E8C",
  },
];

const prayerCategories = [
  "Healing and restoration",
  "Family and relationships",
  "Provision and work",
  "Spiritual strength",
  "Guidance and decisions",
];

export function PrayerPage() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const marquee = useTransform(scrollYProgress, [0, 1], [0, -220]);

  return (
    <div
      className="bg-[#0A0A0A] text-[#F3F3F3] min-h-screen selection:bg-[#B30000] selection:text-white"
      style={bodyFont}
    >
      <section className="relative overflow-hidden pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
            alt="Sanctuary worship"
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(179, 0, 0, 0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(46, 94, 140, 0.18), transparent 50%)",
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-350 mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-[#8C6B3E]" /> Prayer Request
              </p>
              <h1
                className="text-[11vw] md:text-[5.5vw] leading-[0.9] font-black uppercase tracking-tighter"
                style={displayFont}
              >
                We carry <span className="text-[#B30000]">your name</span> in
                prayer.
              </h1>
              <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed max-w-xl mt-8 border-l border-[#222] pl-6">
                "Cast all your anxiety on him because he cares for you." - 1
                Peter 5:7
              </p>

              <div className="mt-10 grid md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Confidential",
                    detail: "Shared with intercessors only",
                  },
                  {
                    title: "Covered",
                    detail: "Prayed through all week",
                  },
                  {
                    title: "Personal",
                    detail: "Follow-up when requested",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#111] border border-[#222] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C6B3E]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm text-[#A0A0A0]">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-6">
                {prayerCare.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5 border border-[#222] bg-[#0F0F0F]/80 p-6"
                  >
                    <div
                      className="h-12 w-12 flex items-center justify-center"
                      style={{ color: item.accent }}
                    >
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#A0A0A0] mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="bg-[#111] border border-[#222] p-8 md:p-10 relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#B30000]" />

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#B30000]/15 text-[#B30000] mx-auto mb-6 flex items-center justify-center">
                      <Heart size={36} fill="currentColor" />
                    </div>
                    <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#8C6B3E]">
                      Received
                    </p>
                    <h3
                      className="text-3xl md:text-4xl font-black uppercase tracking-tighter mt-4"
                      style={displayFont}
                    >
                      We are praying.
                    </h3>
                    <p className="text-[#A0A0A0] mt-4">
                      Your request is now in the hands of our intercessory team.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-xs uppercase tracking-[0.3em] font-bold text-[#F3F3F3] border-b border-[#333] hover:text-white"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C6B3E]"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="mt-2 w-full bg-[#0A0A0A] border border-[#222] px-5 py-4 text-sm uppercase tracking-[0.15em] placeholder:text-[#555] focus:border-[#B30000] focus:ring-2 focus:ring-[#B30000]/30 outline-none transition-colors"
                        placeholder="Full name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C6B3E]"
                        >
                          Email (optional)
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="mt-2 w-full bg-[#0A0A0A] border border-[#222] px-5 py-4 text-sm placeholder:text-[#555] focus:border-[#B30000] focus:ring-2 focus:ring-[#B30000]/30 outline-none transition-colors"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C6B3E]"
                        >
                          Phone (optional)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="mt-2 w-full bg-[#0A0A0A] border border-[#222] px-5 py-4 text-sm placeholder:text-[#555] focus:border-[#B30000] focus:ring-2 focus:ring-[#B30000]/30 outline-none transition-colors"
                          placeholder="Mobile number"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C6B3E]"
                      >
                        Request category
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="mt-2 w-full bg-[#0A0A0A] border border-[#222] px-5 py-4 text-sm uppercase tracking-[0.1em] focus:border-[#B30000] focus:ring-2 focus:ring-[#B30000]/30 outline-none transition-colors appearance-none"
                      >
                        {prayerCategories.map((category) => (
                          <option key={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="details"
                        className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C6B3E]"
                      >
                        Prayer details
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={5}
                        required
                        className="mt-2 w-full bg-[#0A0A0A] border border-[#222] px-5 py-4 text-sm placeholder:text-[#555] focus:border-[#B30000] focus:ring-2 focus:ring-[#B30000]/30 outline-none transition-colors resize-none"
                        placeholder="Share what you would like us to pray for"
                      />
                    </div>

                    <label className="flex items-start gap-3 text-sm text-[#A0A0A0]">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 border border-[#333] bg-[#0A0A0A] text-[#B30000] focus:ring-[#B30000]/30"
                      />
                      Keep this request confidential within our prayer team.
                    </label>

                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden bg-[#F3F3F3] text-[#0A0A0A] py-5 px-6 uppercase tracking-[0.2em] text-xs font-bold transition-all hover:text-[#F3F3F3]"
                    >
                      <div className="absolute inset-0 bg-[#B30000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                      <span className="relative z-10 flex items-center justify-between">
                        Send prayer request
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-2"
                        />
                      </span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="bg-[#0A0A0A] border border-[#222] p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-mono text-[#8C6B3E]">
                    <Phone size={14} /> Immediate care
                  </div>
                  <p className="text-sm text-[#A0A0A0] mt-3">
                    If this is urgent, connect with a pastor or leader after
                    service.
                  </p>
                </div>
                <div className="bg-[#0A0A0A] border border-[#222] p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-mono text-[#8C6B3E]">
                    <Mail size={14} /> Follow-up
                  </div>
                  <p className="text-sm text-[#A0A0A0] mt-3">
                    Leave contact details if you would like a response from our
                    team.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-[#222] overflow-hidden bg-[#0A0A0A]">
        <motion.div
          style={{ x: marquee }}
          className="whitespace-nowrap flex gap-12 px-6"
        >
          <h2 className="text-[7vw] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#222] to-[#111] tracking-tighter">
            PRAYER • COVERING • HEALING • RESTORATION • FAITH
          </h2>
        </motion.div>
      </section>

      <section className="py-24 border-y border-[#222] bg-[#0A0A0A]">
        <div className="max-w-350 mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div>
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                <Clock size={14} /> Prayer rhythm
              </p>
              <h2
                className="text-5xl md:text-6xl font-black uppercase tracking-tighter"
                style={displayFont}
              >
                How we pray together.
              </h2>
            </div>
            <p className="text-[#A0A0A0] max-w-md uppercase text-sm tracking-widest font-mono">
              We gather through the week to lift each request with faith.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {prayerRhythm.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#111] border border-[#222] p-8 min-h-60"
              >
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-mono">
                  <span
                    className="h-px w-8"
                    style={{ backgroundColor: item.accent }}
                  />
                  <span style={{ color: item.accent }}>{item.tag}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black uppercase tracking-tighter">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-[#A0A0A0] leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-mono text-[#777]">
                  <Sparkles size={12} /> {item.time}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] text-[#0A0A0A] py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-350 mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C6B3E] mb-4">
              Join us in person
            </p>
            <h2
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
              style={displayFont}
            >
              Let us pray with you face to face.
            </h2>
            <p className="text-[#555] mt-6 text-lg">
              You are always welcome at our gatherings. Come early or stay after
              service so we can pray with you and your family.
            </p>
          </div>
          <button
            onClick={() => navigate(appRoutes.planVisit)}
            className="bg-[#0A0A0A] text-[#F3F3F3] py-5 px-10 uppercase tracking-[0.2em] font-bold text-xs hover:bg-[#B30000] transition-colors flex items-center gap-4"
          >
            Plan a visit <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
