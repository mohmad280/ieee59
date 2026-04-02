import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";



const fallbackUrls = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=200&q=80",
];

type OrbitIcon = {
  id: string;
  color: string;
  Icon?: React.ComponentType<{ className?: string }>;
  img?: string;
};

const iconConfigs: OrbitIcon[] = [
  { id: "reactive-ui", Icon: Sparkles, color: "#22d3ee" },
  { id: "cloud", Icon: Cloud, color: "#38bdf8" },
  { id: "api", Icon: Server, color: "#0f172a" },
  { id: "data", Icon: Database, color: "#4f46e5" },
  { id: "code", Icon: Code2, color: "#22c55e" },
  { id: "layers", Icon: Layers, color: "#6366f1" },
  { id: "cpu", Icon: Cpu, color: "#f97316" },
  { id: "branch", Icon: GitBranch, color: "#e11d48" },
  { id: "global", Icon: Globe2, color: "#0ea5e9" },
  { id: "mobile", Icon: Smartphone, color: "#14b8a6" },
  { id: "fallback-1", color: "#0f172a", img: fallbackUrls[0] },
  { id: "fallback-2", color: "#0f172a", img: fallbackUrls[1] },
];

const orbitCount = 3;
const orbitGapRem = 8;
const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

export function TechOrbit() {
  return (
    <div className="relative w-full h-full flex items-center justify-center lg:justify-start overflow-hidden">
      <div className="relative w-[26rem] h-[26rem] sm:w-[32rem] sm:h-[32rem] lg:w-[42rem] lg:h-[42rem] lg:translate-x-[35%] flex items-center justify-center">
        <motion.div
          className="w-24 h-24 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-xl flex items-center justify-center border border-slate-200/80 dark:border-slate-700"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Sparkles className="w-10 h-10 text-accent" />
        </motion.div>

        {[...Array(orbitCount)].map((_, orbitIdx) => {
          const size = `${12 + orbitGapRem * (orbitIdx + 1)}rem`;
          const angleStep = (2 * Math.PI) / iconsPerOrbit;

          return (
            <motion.div
              key={orbitIdx}
              className="absolute rounded-full border border-dashed border-slate-200 dark:border-slate-700"
              style={{
                width: size,
                height: size,
                animation: `orbit-spin-${orbitIdx} ${
                  16 + orbitIdx * 6
                }s linear infinite`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 * orbitIdx }}
            >
              {iconConfigs
                .slice(
                  orbitIdx * iconsPerOrbit,
                  orbitIdx * iconsPerOrbit + iconsPerOrbit,
                )
                .map((cfg, iconIdx) => {
                  const angle = iconIdx * angleStep;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);

                  return (
                    <motion.div
                      key={cfg.id}
                      className="absolute rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      whileHover={{
                        scale: 1.15,
                        y: -4,
                      }}
                      transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    >
                      {cfg.Icon ? (
                        <cfg.Icon
                          className="w-8 h-8"
                          style={{ color: cfg.color }}
                        />
                      ) : (
                        <img
                          src={cfg.img}
                          alt="orbit icon"
                          className="w-8 h-8 object-cover rounded-full"
                        />
                      )}
                    </motion.div>
                  );
                })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default TechOrbit;

