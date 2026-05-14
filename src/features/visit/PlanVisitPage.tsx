import { motion, useScroll, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import {
  ArrowRight,
  Calendar,
  Car,
  Clock,
  ExternalLink,
  MapPin,
  Users,
} from "lucide-react";

const displayFont = {
  fontFamily: '"Fraunces", "Iowan Old Style", serif',
};
const bodyFont = {
  fontFamily: '"Manrope", "Avenir", sans-serif',
};

const visitHighlights = [
  {
    title: "Sunday gatherings",
    detail:
      "7:00 AM - 8:30 AM | 9:00 AM - 10:30 AM | 5:00 PM - 6:30 PM | 7:00 PM - 8:30 PM",
    icon: Clock,
    accent: "#B30000",
  },
  {
    title: "Kids check-in",
    detail: "Opens 20 minutes early",
    icon: Users,
    accent: "#8C6B3E",
  },
  {
    title: "Easy parking",
    detail: "Street + overflow parking",
    icon: Car,
    accent: "#2E5E8C",
  },
];

const serviceMoments = [
  {
    title: "Worship + Word",
    time: "Sunday services",
    description:
      "Experience worship, preaching, and prayer in every gathering.",
    accent: "#B30000",
  },
  {
    title: "Family focus",
    time: "Kids + youth",
    description:
      "Families are welcomed with age-appropriate ministry and care.",
    accent: "#8C6B3E",
  },
  {
    title: "After-service prayer",
    time: "Prayer team",
    description: "Stay after service for personal prayer and encouragement.",
    accent: "#2E5E8C",
  },
];

const expectationSteps = [
  {
    title: "Arrive and be greeted",
    description:
      "Our welcome team is ready to help you find seating and answer questions.",
    accent: "#B30000",
  },
  {
    title: "Settle into worship",
    description:
      "We sing, pray, and lift our hearts together before the message.",
    accent: "#8C6B3E",
  },
  {
    title: "Connect after service",
    description: "Meet leaders, request prayer, and learn about small groups.",
    accent: "#2E5E8C",
  },
];

const arrivalChecklist = [
  "Come 15 minutes early",
  "Ask for the welcome desk",
  "Choose any open seat",
  "Stay after for prayer",
];

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14692.230018347711!2d120.92296893025836!3d14.30365253430226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d569d4cdd8bf%3A0xf1688fb66e5cf9b5!2sJesus%20Christ%20Savior%20Of%20All!5e0!3m2!1sen!2sph!4v1778142232357!5m2!1sen!2sph";

const mapLink =
  "https://maps.google.com/?q=Section%20D%20Block%2017%20Tropical%20Village%2C%20San%20Francisco%2C%20General%20Trias%2C%20Cavite%204107%20Philippines";

export function PlanVisitPage() {
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
    <div
      className="bg-[#0A0A0A] text-[#F3F3F3] min-h-screen selection:bg-[#B30000] selection:text-white"
      style={bodyFont}
    >
      <section className="relative overflow-hidden pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 opacity-60"
        >
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop"
            alt="Church sanctuary"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(179, 0, 0, 0.22), transparent 45%), radial-gradient(circle at 80% 30%, rgba(46, 94, 140, 0.18), transparent 55%)",
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-350 mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-[#8C6B3E]" /> Plan a Visit
              </p>
              <h1
                className="text-[11vw] md:text-[5.8vw] leading-[0.9] font-black uppercase tracking-tighter break-words"
                style={displayFont}
              >
                Step into a
                <span className="block text-transparent bg-clip-text bg-linear-to-br from-[#B30000] to-[#5a0000] italic">
                  worshiping
                </span>
                <span className="block">community.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed max-w-xl mt-8 border-l border-[#222] pl-6">
                We are excited to welcome you at Jesus Christ Savior Of All.
                Come early, settle in, and let us help you feel right at home.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#location"
                  onClick={handleAnchorScroll("#location")}
                  className="group relative overflow-hidden bg-[#F3F3F3] text-[#0A0A0A] py-5 px-7 uppercase tracking-[0.2em] text-xs font-bold transition-colors hover:text-[#F3F3F3]"
                >
                  <span className="absolute inset-0 bg-[#B30000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                  <span className="relative z-10 flex items-center gap-3">
                    See location <ArrowRight size={16} />
                  </span>
                </a>
                <a
                  href="#service-times"
                  onClick={handleAnchorScroll("#service-times")}
                  className="border border-[#333] py-5 px-7 uppercase tracking-[0.2em] text-xs font-bold text-[#F3F3F3] hover:bg-[#F3F3F3] hover:text-[#0A0A0A] transition-colors"
                >
                  View service times
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid gap-4"
            >
              {visitHighlights.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="bg-[#111] border border-[#222] p-6 flex items-start gap-4"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center"
                      style={{ backgroundColor: card.accent }}
                    >
                      <Icon size={20} className="text-[#0A0A0A]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#777]">
                        {card.title}
                      </p>
                      <p className="mt-3 text-lg font-bold uppercase tracking-tighter">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="service-times"
        className="py-20 border-y border-[#222] overflow-hidden bg-[#0A0A0A] relative"
      >
        <motion.div
          style={{ x: marquee }}
          className="whitespace-nowrap flex gap-12 px-6"
        >
          <h2 className="text-[7vw] font-black uppercase text-transparent bg-clip-text bg-linear-to-b from-[#222] to-[#111] tracking-tighter">
            WELCOME HOME PLAN YOUR FIRST SUNDAY FIND YOUR PEOPLE
          </h2>
        </motion.div>

        <div className="max-w-350 mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B30000]" />
              <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#A0A0A0]">
                Service moments
              </p>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
              style={displayFont}
            >
              What your Sunday looks like.
            </h2>
            <p className="text-[#A0A0A0] text-lg leading-relaxed mt-6">
              Whether you join the morning or afternoon service, every gathering
              is full of worship, prayer, and a message from God's word.
            </p>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-3 gap-6">
            {serviceMoments.map((moment, index) => (
              <motion.article
                key={moment.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="bg-[#111] border border-[#222] p-6 min-h-52"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-mono">
                  <span
                    className="h-px w-8"
                    style={{ backgroundColor: moment.accent }}
                  />
                  <span style={{ color: moment.accent }}>{moment.time}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black uppercase tracking-tighter">
                  {moment.title}
                </h3>
                <p className="mt-4 text-sm text-[#A0A0A0] leading-relaxed">
                  {moment.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="location"
        className="py-24 border-y border-[#222] bg-[#0A0A0A]"
      >
        <div className="max-w-350 mx-auto px-6 md:px-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div>
            <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
              <MapPin size={14} /> Find us
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
              style={displayFont}
            >
              Worship in General Trias, Cavite.
            </h2>
            <p className="text-[#A0A0A0] text-lg leading-relaxed mt-6">
              Section D Block 17 Tropical Village, San Francisco, General Trias,
              Cavite 4107 Philippines, Heneral Trias, 4107 Cavite.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#B30000]">
                  <MapPin size={20} className="text-[#0A0A0A]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#777]">
                    Landmark
                  </p>
                  <p className="text-lg font-bold">
                    Tropical Village, Block 17
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#2E5E8C]">
                  <Calendar size={20} className="text-[#0A0A0A]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#777]">
                    Open doors
                  </p>
                  <p className="text-lg font-bold">Sundays, 7:30 AM onward</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden bg-[#F3F3F3] text-[#0A0A0A] py-4 px-6 uppercase tracking-[0.2em] text-xs font-bold transition-colors hover:text-[#F3F3F3]"
              >
                <span className="absolute inset-0 bg-[#B30000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
                <span className="relative z-10 flex items-center gap-3">
                  Get directions <ExternalLink size={14} />
                </span>
              </a>
              <div className="border border-[#333] py-4 px-6 uppercase tracking-[0.2em] text-xs font-bold text-[#A0A0A0] flex items-center gap-3">
                <Clock size={14} /> Arrive 15 minutes early
              </div>
            </div>
          </div>

          <div className="bg-[#111] border border-[#222] p-4 md:p-6">
            <div className="aspect-4/3 w-full overflow-hidden">
              <iframe
                src={mapEmbedUrl}
                title="Jesus Christ Savior Of All map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-350 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-[#8C6B3E] font-mono text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <Users size={14} /> What to expect
            </p>
            <h2
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
              style={displayFont}
            >
              Your first visit, made easy.
            </h2>
          </div>
          <p className="text-[#A0A0A0] max-w-md uppercase text-sm tracking-widest font-mono">
            A welcoming environment, clear next steps, and space to worship.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="space-y-6">
            {expectationSteps.map((step, index) => (
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
                  <span className="text-[#0A0A0A] font-black text-lg">
                    0{index + 1}
                  </span>
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
            ))}
          </div>

          <div className="bg-[#111] border border-[#222] p-8 h-full">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#777]">
              Arrival checklist
            </p>
            <h3 className="mt-4 text-3xl font-black uppercase tracking-tighter">
              Simple steps before you arrive.
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-[#A0A0A0] uppercase tracking-[0.2em] font-mono">
              {arrivalChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#B30000]" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3 text-sm text-[#A0A0A0]">
              <Clock size={16} /> Most guests arrive 10-15 minutes early.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3] text-[#0A0A0A] py-24 px-6">
        <div className="max-w-350 mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#8C6B3E] mb-4">
              Stay connected
            </p>
            <h2
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
              style={displayFont}
            >
              Follow us for weekly updates.
            </h2>
            <p className="text-[#555] mt-6 text-lg">
              We share testimonies, service reminders, and community moments on
              our Facebook page.
            </p>
          </div>
          <div className="bg-[#0A0A0A] text-[#F3F3F3] p-10 border border-[#222]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 flex items-center justify-center bg-[#2E5E8C]">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-[#0A0A0A]"
                >
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#777]">
                  Facebook
                </p>
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  Jesus Christ Savior Of All
                </h3>
              </div>
            </div>
            <a
              href="https://facebook.com/jcsaviorofall"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden bg-[#2E5E8C] text-[#0A0A0A] py-5 px-6 uppercase tracking-[0.2em] text-xs font-bold transition-colors hover:text-[#F3F3F3] w-full inline-flex items-center justify-between"
            >
              <span className="absolute inset-0 bg-[#B30000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1]" />
              <span className="relative z-10 flex items-center gap-3">
                Follow on Facebook
              </span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
