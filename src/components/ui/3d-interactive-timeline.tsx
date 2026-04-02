import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  category?: string;
  color?: string;
  link?: {
    url: string;
    text: string;
  };
}

interface Timeline3DProps {
  events: TimelineEvent[];
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  accentColor?: string;
  showImages?: boolean;
  className?: string;
}

const defaultColors = {
  background: "bg-slate-900",
  primary: "bg-indigo-600",
  secondary: "bg-violet-500",
  text: "text-white",
  accent: "bg-emerald-500",
};

const Timeline3D: React.FC<Timeline3DProps> = ({
  events,
  backgroundColor = defaultColors.background,
  primaryColor = defaultColors.primary,
  secondaryColor = defaultColors.secondary,
  textColor = defaultColors.text,
  accentColor = defaultColors.accent,
  showImages = true,
  className = "",
}) => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateBreakpoint = () => setIsDesktop(mediaQuery.matches);
    updateBreakpoint();
    mediaQuery.addEventListener("change", updateBreakpoint);

    return () => mediaQuery.removeEventListener("change", updateBreakpoint);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isDesktop]);

  return (
    <div
      className={`w-full ${backgroundColor} py-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${textColor} ${className}`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-20 ${i % 2 === 0 ? primaryColor : secondaryColor}`}
              animate={{
                x: [
                  `${20 + i * 10}%`,
                  `${30 + i * 8}%`,
                  `${15 + i * 12}%`,
                  `${20 + i * 10}%`,
                ],
                y: [
                  `${10 + i * 12}%`,
                  `${20 + i * 10}%`,
                  `${30 + i * 8}%`,
                  `${10 + i * 12}%`,
                ],
                scale: [1, 1.2, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                width: `${50 + i * 20}px`,
                height: `${50 + i * 20}px`,
                filter: "blur(8px)",
                zIndex: 0,
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 lg:mb-16 text-center tracking-tight">
            <span className="inline-block">
              <span className="relative inline-block">
                <span className={`absolute -inset-1 rounded-lg ${accentColor} blur opacity-30`} />
                <span className="relative">Interactive Timeline</span>
              </span>
            </span>
          </h2>

          <div className="relative">
            <div className={`absolute left-4 lg:left-1/2 lg:-translate-x-1/2 h-full w-1 ${primaryColor} rounded-full`} />

            {events.map((event, index) => {
              const isEven = index % 2 === 0;
             const colorMap = {
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  blue: "bg-blue-500",
};

const eventColor = event.color ? colorMap[event.color] : primaryColor;

              return (
                <motion.div
                  key={event.id}
                  className={`relative mb-12 lg:mb-24 pl-12 lg:pl-0 ${isEven ? "lg:ml-auto" : "lg:mr-auto"} lg:w-1/2 flex ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ amount: 0.25, once: false }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div
                    className={`absolute left-4 lg:left-auto ${
                      isEven ? "lg:left-0" : "lg:right-0"
                    } top-0 -translate-x-1/2 z-20`}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-full ${eventColor} flex items-center justify-center border-4 border-slate-900 cursor-pointer`}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
                      animate={{
                        boxShadow:
                          activeEvent === event.id
                            ? [
                                "0 0 0 rgba(255,255,255,0.5)",
                                "0 0 20px rgba(255,255,255,0.8)",
                                "0 0 0 rgba(255,255,255,0.5)",
                              ]
                            : "0 0 0 rgba(255,255,255,0)",
                      }}
                      transition={{
                        repeat: activeEvent === event.id ? Infinity : 0,
                        duration: 1.5,
                      }}
                    >
                      {event.icon || <span className="text-white font-bold">{index + 1}</span>}
                    </motion.div>
                  </div>

                  <motion.div
                    className={`relative z-10 bg-slate-800/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl w-full lg:w-[calc(100%-2rem)] ${
                      isEven ? "lg:ml-12" : "lg:mr-12"
                    } border border-slate-700`}
                    whileHover={{
                      y: -5,
                      x: isDesktop ? (isEven ? 5 : -5) : 0,
                      transition: { duration: 0.3 },
                    }}
                    style={{
                      transformStyle: isDesktop ? "preserve-3d" : "flat",
                      transform: isDesktop
                        ? `perspective(1000px) rotateY(${
                            mousePosition.x * (isEven ? -3 : 3)
                          }deg) rotateX(${mousePosition.y * -3}deg)`
                        : "none",
                    }}
                    onMouseEnter={() => setActiveEvent(event.id)}
                    onMouseLeave={() => setActiveEvent(null)}
                  >
                    {showImages && event.image && (
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{
                            scale: activeEvent === event.id ? 1.05 : 1,
                            y: activeEvent === event.id ? -10 : 0,
                          }}
                          transition={{ duration: 0.8 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                        {event.category && (
                          <div className="absolute top-4 right-4">
                            <span className={`${accentColor} px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase`}>
                              {event.category}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-sm font-mono ${accentColor.replace("bg-", "text-")} tracking-wider`}>
                          {event.date}
                        </span>

                        <motion.div
                          className={`w-3 h-3 rounded-full ${eventColor}`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            repeatType: "reverse",
                          }}
                        />
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold mb-2">{event.title}</h3>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: !isDesktop || activeEvent === event.id ? "auto" : 0,
                          opacity: !isDesktop || activeEvent === event.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-300 mt-3 leading-relaxed">{event.description}</p>

                        {event.link && (
                          <a
                            href={event.link.url}
                            className={`inline-block mt-4 px-4 py-2 ${primaryColor} hover:bg-opacity-80 rounded-lg font-medium transition-all duration-200 transform hover:-translate-y-1`}
                          >
                            {event.link.text}
                          </a>
                        )}
                      </motion.div>
                    </div>

                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 ${eventColor}`}
                      initial={{ width: "0%" }}
                      animate={{ width: activeEvent === event.id ? "100%" : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline3D;
