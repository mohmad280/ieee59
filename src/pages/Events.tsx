import { useEffect, useRef, useState } from "react";
import { BookOpen, Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../assets/events_phote/ababneh_n8n.jpg";
import image2 from "../assets/events_phote/nadoa.jpg";
import image3 from "../assets/events_phote/bothh.jpg"
import image4 from "../assets/events_phote/IFTAR_Ramdan.jpg"

import image8 from "../assets/events_phote/momen_DA.jpg"
import image9 from "../assets/events_phote/html&css.jpg"
import image10 from "../assets/events_phote/branch_open.jpg"
import image11 from "../assets/events_phote/IMG_1230.JPG.jpeg"

import m1 from "../assets/events_phote/im1.jpg"
import m2 from "../assets/events_phote/im2.jpg"
import m3 from "../assets/events_phote/im3.jpg"
import m4 from "../assets/events_phote/im4.jpg"
import m5 from "../assets/events_phote/im5.jpg"
import m6 from "../assets/events_phote/im6.jpg"






const allEvents = [
  {
    id: "1",
    type: "",
    title: "IEEE MegaMeet",
    description: "We look back at the highlights of the IEEE MegaMeet, the largest gathering of technology enthusiasts, students, and professionals at Irbid National University. This conference provided an exceptional opportunity to connect, share experiences, and celebrate our community's technical achievements together.",
    date: " May 9, 2026",
    time: "11:00 AM - 4:00 PM",
    location: "Irbid National University",
    image: image11,
    link: "#",
  },
  {
    id: "2",
    type: "Workshop",
    title: "Workshop: AI Automation With n8n",
    description: "Looking for a way to make AI work for you? Join our AI Automation with n8n workshop with engineer Ahmad Ababneh to learn how to build smart systems that save time and effort.",
    date: "April 4, 2026",
    time: "11:30 AM - 2:00 PM",
    location: "Irbid National University - Faculty of Information Technology - Smart Room",
    image: image1,
    link: "#",
  },
  {
    id: "3",
    type: "Awareness Session",
    title: "Awareness Session: “Start Your Journey with IEEE-INU",
    description: "We launched the “Start Your Journey with IEEE-INU” session to outline the path and open doors to technical and professional opportunities for our students. The journey has just begun, and the future awaits you.",
    date: "March  29, 2026",
    time: "12:00 AM - 1:00 PM",
    location: "Irbid National University - King Abdullah Fund",
    image: image2,
    link: "#",
  },
  {
    id: "4",
    type: "Awareness",
    title: "IEEE Awareness Booth",
    description: "The IEEE INU booth, where technology meets passion.",
    date: "March  5, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Irbid National University - Faculty of Information Technology",
    image: image3,
    link: "#",
  },
  {
    id: "5",
    type: "IEEE TechSpark Iftar",
    title: "Participation in Buslat Al-Qiyam (IEEE TechSpark Iftar 2026)",
    description: "As part of “Buslat Al-Qiyam 2”, the IEEE TechSpark Iftar 2026 was not just an event, but a knowledge bridge and a magical gateway through which children explored the world of technology.",
    date: "May 24-25, 2026",
    time: "3:00 AM - 8:30 PM",
    location: "Petra Street Park - Irbid",
    image: image4,
    link: "#",
  },
  
  {
    id: "6",
    type: "Workshop",
    title: "Data Analysis Using Python Workshop",
    description: "Join us for an introductory workshop on data analysis using Python and take your first step into the world of data analysis.",
    date: "February  4, 2026",
    time: "8:00 PM - 10:00 PM",
    location: "Online",
    image: image8,
    link: "#",
  },
  {
    id: "7",
    type: "Workshop",
    title: "HTML & CSS Fundamentals Workshop",
    description: "Are you ready to enter the world of web development? Join our HTML & CSS Fundamentals workshop and build a strong foundation for creating websites from scratch.",
    date: "January   4, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Irbid National University - Faculty of Information Technology - Smart Room",
    image: image9,
    link: "#",
  },
  {
    id: "8",
    type: "Branch Opening",
    title: "IEEE-INU Branch Opening",
    description: "Under the patronage of the President of Irbid National University, Prof. Majed Abu Zreig, the IEEE branch at the university was officially opened on Wednesday, December 17, 2025.",
    date: "December  17, 2025",
    time: "8:30 AM - 3:00 PM",
    location: "Canadian Coliseum",
    image: image10,
    link: "#",
  },
];

const pastHighlights = [
  {
    id: "h1",
    
    
    image: m1,
  },
  {
    id: "h2",
    
    
    image: m2,
  },
  {
    id: "h3",
    
    
    image: m3,
  },
  {
    id: "h4",
    
    
    image: m4,
  },
  {
    id: "h5",
    
    
    image: m5,
  },
  {
    id: "h6",
    
    image: m6,
  },
];

const EVENTS_PER_PAGE = 5;

const Events = () => {
  const [page, setPage] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(allEvents.length / EVENTS_PER_PAGE);
  const startIndex = (page - 1) * EVENTS_PER_PAGE;
  const currentEvents = allEvents.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  return (
    <div className="pt-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden">
      <section className="py-24 mesh-gradient">
        <div className="container mx-auto px-6 text-center">
          <p className="label-text mb-3 dark:text-slate-300">What's Happening</p>
          <h1 className="heading-lg mb-4 dark:text-white">Upcoming Events</h1>
          <p className="body-text mx-auto dark:text-slate-300">Workshops, hackathons, and networking events for our community.</p>
        </div>
      </section>

      <section ref={sectionRef} className="container mx-auto px-6 pb-12">        <div className="space-y-6">
          {currentEvents.map((event) => (
            <article key={event.id} className="flex flex-col md:flex-row items-stretch gap-4 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 shadow-lg dark:shadow-slate-900/50 rounded-2xl overflow-hidden hover:shadow-2xl transition h-[360px]">
              <div className="relative w-full md:w-1/3 h-56 md:h-full overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover object-center" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-2 bg-red-500/90 text-white rounded-full px-3 py-1 text-xs font-semibold shadow-lg">
                  <BookOpen className="w-3.5 h-3.5" /> {event.type}
                </span>
              </div>
              <div className="w-full md:w-2/3 p-5 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{event.title}</h3>
                  <p className="text-base text-muted-foreground dark:text-slate-300 mb-4">{event.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-600 dark:text-slate-300 mb-4">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {event.date}</div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {event.time}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</div>
                  </div>
                </div>
                <a href={event.link} className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 dark:from-indigo-500 dark:to-blue-500 text-white text-sm font-semibold hover:opacity-90 transition">
                  Register Now
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-sm font-medium disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-sm font-medium disabled:opacity-50"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setPage(index + 1)}
                className={`w-8 h-8 rounded-full text-sm font-semibold ${page === index + 1 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="mb-8 text-center">
          <p className="label-text mb-2 dark:text-slate-300">Looking Back</p>
          <h2 className="heading-lg dark:text-white">Past Highlights</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastHighlights.map((highlight) => (
            <article key={highlight.id} className="relative overflow-hidden rounded-2xl shadow-lg">
              <img src={highlight.image} alt={highlight.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{highlight.title}</h3>
                <div className="flex items-center justify-between mt-1 text-sm opacity-90">
                  <span>{highlight.date}</span>
                  
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
