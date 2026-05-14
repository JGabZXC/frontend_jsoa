import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, MapPin, Users } from "lucide-react";

const displayFont = {
  fontFamily: '"Fraunces", "Iowan Old Style", serif',
};

const bodyFont = {
  fontFamily: '"Manrope", "Avenir", sans-serif',
};

type CellGroup = {
  name: string;
  leader: string;
  schedule: string;
  location: string;
  banner: string;
  badge: string;
};

type CellGroupCategory = {
  id: string;
  label: string;
  tagline: string;
  description: string;
  accent: string;
  glow: string;
  groups: CellGroup[];
};

const cellGroupCategories: CellGroupCategory[] = [
  {
    id: "youth-boys",
    label: "Youth Boys",
    tagline: "Courage in brotherhood",
    description:
      "A rhythm of Scripture, accountability, and real friendships for young men who want to grow strong in faith.",
    accent: "#2E5E8C",
    glow: "rgba(46, 94, 140, 0.45)",
    groups: [
      {
        name: "Lionhearts",
        leader: "Jay Manuel",
        schedule: "Fridays · 6:30 PM",
        location: "Youth Hall",
        banner:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
        badge: "LH",
      },
      {
        name: "Anchor Crew",
        leader: "Paolo Cruz",
        schedule: "Saturdays · 4:00 PM",
        location: "Unit 3A",
        banner:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
        badge: "AC",
      },
      {
        name: "Armor Bearers",
        leader: "Nico Reyes",
        schedule: "Wednesdays · 7:00 PM",
        location: "Prayer Room",
        banner:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop",
        badge: "AB",
      },
    ],
  },
  {
    id: "youth-girls",
    label: "Youth Girls",
    tagline: "Confidence with grace",
    description:
      "A space for young women to grow in identity, leadership, and joy through prayer and mentorship.",
    accent: "#C75B4E",
    glow: "rgba(199, 91, 78, 0.45)",
    groups: [
      {
        name: "Crowned",
        leader: "Maya Santos",
        schedule: "Thursdays · 6:00 PM",
        location: "Fellowship Hall",
        banner:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
        badge: "CR",
      },
      {
        name: "Daughters of Light",
        leader: "Tricia Lazo",
        schedule: "Saturdays · 3:00 PM",
        location: "Studio Room",
        banner:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
        badge: "DL",
      },
      {
        name: "Joyful Hearts",
        leader: "Aira Lopez",
        schedule: "Sundays · 2:00 PM",
        location: "Room 2",
        banner:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
        badge: "JH",
      },
    ],
  },
  {
    id: "mens",
    label: "Men's",
    tagline: "Built to lead",
    description:
      "Men gathering for truth, strength, and faithful leadership at home, work, and church.",
    accent: "#B30000",
    glow: "rgba(179, 0, 0, 0.45)",
    groups: [
      {
        name: "Iron + Oak",
        leader: "Pastor Noel",
        schedule: "Tuesdays · 7:30 PM",
        location: "Main Lounge",
        banner:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
        badge: "IO",
      },
      {
        name: "Builders",
        leader: "Adrian Dela Cruz",
        schedule: "Saturdays · 7:00 AM",
        location: "Cafe Area",
        banner:
          "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1600&auto=format&fit=crop",
        badge: "BD",
      },
      {
        name: "Faith & Fire",
        leader: "Jonas Mateo",
        schedule: "Fridays · 8:00 PM",
        location: "Men's Hall",
        banner:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop",
        badge: "FF",
      },
    ],
  },
  {
    id: "womens",
    label: "Women's",
    tagline: "Rooted, radiant, resilient",
    description:
      "A circle of prayer, wisdom, and support where women uplift one another in every season.",
    accent: "#8C6B3E",
    glow: "rgba(140, 107, 62, 0.45)",
    groups: [
      {
        name: "Grace Table",
        leader: "Ellen Ramos",
        schedule: "Mondays · 6:30 PM",
        location: "Room 4",
        banner:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
        badge: "GT",
      },
      {
        name: "Bold & Bloom",
        leader: "Cynthia Flores",
        schedule: "Wednesdays · 9:30 AM",
        location: "Garden Room",
        banner:
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
        badge: "BB",
      },
      {
        name: "Mercy Circle",
        leader: "Lara Agustin",
        schedule: "Saturdays · 5:00 PM",
        location: "Prayer Chapel",
        banner:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
        badge: "MC",
      },
    ],
  },
];

export function CellGroupsPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    cellGroupCategories[0]?.id ?? "youth-boys",
  );

  const activeCategory = useMemo(() => {
    return (
      cellGroupCategories.find((category) => category.id === activeCategoryId) ??
      cellGroupCategories[0]
    );
  }, [activeCategoryId]);

  if (!activeCategory) {
    return null;
  }

  return (
    <div
      className="min-h-screen text-[#F6F1E6] selection:bg-[#B30000] selection:text-white"
      style={{
        ...bodyFont,
        backgroundColor: "#0A0A0A",
        backgroundImage:
          "radial-gradient(circle at 10% 15%, rgba(179, 0, 0, 0.18), transparent 50%), radial-gradient(circle at 80% 20%, rgba(46, 94, 140, 0.16), transparent 50%), radial-gradient(circle at 40% 90%, rgba(140, 107, 62, 0.2), transparent 45%)",
      }}
    >
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-40 right-10 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute top-24 left-10 h-72 w-72 rounded-full border border-white/10" />
        </div>

        <div className="relative z-10 max-w-350 mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#C9A46A] font-mono mb-5">
              Cell Group Community Map
            </p>
            <h1
              className="text-[12vw] md:text-[6vw] leading-[0.9] font-black uppercase tracking-tighter"
              style={displayFont}
            >
              Find your
              <span className="block text-transparent bg-clip-text bg-linear-to-br from-[#B30000] to-[#5a0000] italic">
                people.
              </span>
            </h1>
            <p
              className="mt-6 text-lg md:text-xl text-[#CBBFB0] leading-relaxed border-l border-white/10 pl-6"
              style={bodyFont}
            >
              Cell groups meet in homes, halls, and prayer rooms all week long.
              Choose your community and see the groups ready to welcome you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-350 mx-auto px-6 md:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#0F0F0F]/80 border border-white/10 p-8 md:p-10"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#A08B72]">
              {activeCategory.label}
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight">
              {activeCategory.tagline}
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#CBBFB0] leading-relaxed">
              {activeCategory.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {activeCategory.groups.map((group) => (
                <span
                  key={group.name}
                  className="text-[11px] uppercase tracking-[0.2em] border border-white/10 px-3 py-2 text-[#CBBFB0]"
                >
                  {group.name}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4" role="tablist" aria-label="Cell group categories">
            {cellGroupCategories.map((category, index) => {
              const isActive = category.id === activeCategoryId;
              return (
                <motion.button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  aria-pressed={isActive}
                  className="text-left border px-6 py-5 transition-all duration-300"
                  style={{
                    borderColor: isActive ? category.accent : "#222",
                    boxShadow: isActive
                      ? `0 22px 50px -30px ${category.glow}`
                      : "none",
                    background: isActive
                      ? `linear-gradient(135deg, ${category.glow}, rgba(10, 10, 10, 0.9))`
                      : "rgba(12, 12, 12, 0.8)",
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-[#BFAE9B] font-mono">
                        {category.label}
                      </p>
                      <p className="mt-2 text-xl font-black uppercase tracking-tight">
                        {category.tagline}
                      </p>
                    </div>
                    <span
                      className="h-10 w-10 flex items-center justify-center border"
                      style={{ borderColor: category.accent, color: category.accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="groups" className="py-16 border-t border-white/10">
        <div className="max-w-350 mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#A08B72] font-mono">
                Selected category
              </p>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                {activeCategory.label} Cell Groups
              </h3>
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-[#CBBFB0]">
              {activeCategory.groups.length} groups available
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {activeCategory.groups.map((group) => (
                <article
                  key={group.name}
                  className="group overflow-hidden border border-white/10 bg-[#0F0F0F]/80"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={group.banner}
                      alt={`${group.name} banner`}
                      className="h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent" />
                    <div
                      className="absolute top-4 left-4 h-12 w-12 border border-white/40 text-xs font-black flex items-center justify-center"
                      style={{ backgroundColor: activeCategory.accent }}
                    >
                      {group.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-black uppercase tracking-tight">
                      {group.name}
                    </h4>
                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#A08B72]">
                      Led by {group.leader}
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-[#CBBFB0]">
                      <div className="flex items-center gap-3">
                        <CalendarClock size={16} />
                        <span>{group.schedule}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={16} />
                        <span>{group.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users size={16} />
                        <span>Open seats available</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
