import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Lightbulb, Globe, DollarSign ,UserCheck} from "lucide-react";
import CommitteeCard from "@/components/CommitteeCard";
import heroBg from "@/assets/hero-bg.jpg";
import { TechOrbit } from "@/components/ui/stack-feature-section";
import { AnimatedFolder, type Project } from "@/components/ui/3d-folder";
//Executive
import member1 from "@/assets/SA.png";
import member2 from "@/assets/WOROD.png";
import member3 from "@/assets/MA.png";
import member4 from "@/assets/L.png";
// Techincal
import member5 from "@/assets/MOHMAD.png";
import member6 from "@/assets/AHMAD.png";
import member7 from "@/assets/ABD (1).png";
import member8 from "@/assets/TALA.png";
import member9 from "@/assets/08.01.2026_23.00.39_REC.png";
//
import member10 from "@/assets/SAMA.png"
//PR
import member11 from "@/assets/08.01.2026_23.01.22_REC.png"
import member12 from "@/assets/ABD.png"
import member13 from "@/assets/M.png"
import member14 from "@/assets/PUBLIC.png"
import member15 from "@/assets/08.01.2026_23.00.13_REC.png"
import member16 from "@/assets/08.01.2026_23.01.22_REC.png"
//Membership
import member17 from "@/assets/08.01.2026_23.01.51_REC.png"
import member18 from "@/assets/R.png"
import member19 from "@/assets/TU.png"
import member20 from "@/assets/Y.png"
import member21 from "@/assets/اغ.png"
//Program
import member22 from "@/assets/08.01.2026_22.59.16_REC.png"
import member23 from "@/assets/08.01.2026_22.59.39_REC.png"
import member24 from "@/assets/08.01.2026_22.59.56_REC.png"
import member25 from "@/assets/AHM.png"
import member26 from "@/assets/Green Professional Manager ID Card - 1.png"
import member27 from "@/assets/M (1).png"
import member28 from "@/assets/MM.png"
import member29 from "@/assets/OLA.png"
import member30 from "@/assets/TASNEEM.png"
//supervisors
import adv1 from "@/assets/Committees/Advicer/zaid.jpg"
import adv2 from "@/assets/Committees/Advicer/saif.jpg"
//Finance
import member31 from "@/assets/RAMA.png"
import member32 from "@/assets/Green Professional Manager ID Card.png"


const committees = [
  { title: "Membership Committee", description: "Dedicated to expanding our community and supporting members through active outreach and engagement initiatives.", icon: <Users size={20} /> },
  { title: "Public Relations Committee", description: "Manages the branch's public image, handles external communications, and builds strategic professional partnerships.", icon: <Globe size={20} /> },
  { title: "Executive Committee", description: " Responsible for high-level strategic leadership, ensuring smooth operations and oversight across all branch activities.", icon: <Lightbulb size={20} /> },
  { title: "Media Committee", description: " Creates compelling visual content and manages our digital identity across all social media and online platforms.", icon: <Calendar size={20} /> },
  { title: "Program Committee", description: "Specializes in planning and executing educational workshops, seminars, and professional development events.", icon: <Calendar size={20} /> },
  { title: "Technical Committee", description: " Leads hands-on technical projects, organizes hackathons, and delivers practical engineering-focused workshops.", icon: <Lightbulb size={20} /> },
    { title:"Branch supervisors", description: " Faculty advisors providing academic mentorship, strategic direction, and professional guidance to the branch.", icon: <UserCheck size={20} /> },
  { title: "Finance Committee", description: "Manages the branch’s financial resources, including budgeting, funding, and financial planning for all activities.", icon: <DollarSign size={20} /> },
];

const committeeMembers: Record<string, Project[]> = {
  "Membership Committee": [
    { id: "mem-1", title: "Member 01", image: member17 },
    { id: "mem-2", title: "Member 02", image: member18 },
    { id: "mem-3", title: "Member 03", image: member19 },
    { id: "mem-4", title: "Member 04", image: member20 },
    { id: "mem-5", title: "Member 05", image: member21 },
  ],
  "Public Relations Committee": [
    { id: "pr-1", title: "Member 01", image: member11 },
    { id: "pr-2", title: "Member 02", image: member12 },
    { id: "pr-3", title: "Member 03", image: member13 },
    { id: "pr-4", title: "Member 04", image: member14 },
    { id: "pr-5", title: "Member 05", image: member15 },
    { id: "pr-5", title: "Member 05", image: member16 },
  ],
  "Executive Committee": [
    { id: "ex-1", title: "Chair", image: member1 },
    { id: "ex-2", title: "Vice Chair", image: member2 },
    { id: "ex-3", title: "Secretary", image: member3 },
    { id: "ex-4", title: "Treasurer", image: member4 },
  ],
  "Media Committee": [
    { id: "md-1", title: "Member 01", image: member10 },
    { id: "md-2", title: "Member 02", image: member4 },
    { id: "md-3", title: "Member 03", image: member27},
    { id: "md-4", title: "Member 04", image: member2},
    
  ],
  "Program Committee": [
    { id: "pg-1", title: "Member 01", image: member22 },
    { id: "pg-2", title: "Member 02", image: member23 },
    { id: "pg-3", title: "Member 03", image: member24 },
    { id: "pg-4", title: "Member 04", image: member25 },
    { id: "pg-5", title: "Member 05", image: member26 },
    { id: "pg-6", title: "Member 06", image: member27 },
    { id: "pg-7", title: "Member 07", image: member28 },
    { id: "pg-8", title: "Member 08", image: member29 },
    { id: "pg-9", title: "Member 09", image: member30 },
  ],
  "Technical Committee": [
    { id: "tc-1", title: "Member 01", image: member5 },
    { id: "tc-2", title: "Member 02", image: member6 },
    { id: "tc-3", title: "Member 03", image: member7 },
    { id: "tc-4", title: "Member 04", image: member8 },
    { id: "tc-5", title: "Member 05", image: member9 },
    { id: "tc-6", title: "Member 06", image: member9 },
    { id: "tc-6", title: "Member 06", image: member9 },
  ],

   // 🔥 Adviser
  "Branch supervisors": [
    { id: "tc-1", title: "Member 01", image: adv1 },
    { id: "tc-2", title: "Member 02", image: adv2},
  ],

  // 🔥 Finance
  "Finance Committee": [
    { id: "fin-1", title: "Finance 01", image: member31 },
    { id: "fin-2", title: "Finance 02", image:  member32 },
    { id: "fin-1", title: "Finance 01", image: member14 },
    { id: "fin-2", title: "Finance 02", image:  member17 },
  ],

  
  
  
};
const Home = () => (
  <div>
  {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* Background */}
  <motion.div
    className="absolute inset-0"
    initial={{ scale: 1.1, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <img
      src={heroBg}
      alt=""
      className="w-full h-full object-cover opacity-20"
    />
    <div className="absolute inset-0 mesh-gradient" />
  </motion.div>

  {/* Floating blobs */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-accent/10 blur-3xl"
        style={{
          width: 220,
          height: 220,
          left: `${10 + i * 15}%`,
          top: `${20 + (i % 3) * 20}%`,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 10 + i * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>

  {/* Content */}
  <div className="relative container mx-auto px-6 py-24 sm:py-28 lg:py-32">
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

      {/* Text Content */}
      <motion.div
        className="text-center lg:text-left max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Subtitle */}
        <motion.p
          className="mb-4 leading-tight"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="block text-lg sm:text-xl lg:text-2xl font-bold">
            Institute of Electrical <br /> and Electronics Engineers
          </span>
          <span className="block text-base sm:text-lg text-muted-foreground">
            at Irbid National University
          </span>
        </motion.p>

        {/* Main Title */}
       <motion.h1
  className="mb-6 leading-tight font-bold text-3xl sm:text-4xl lg:text-5xl"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }}
>
  <motion.span
    className="inline-block mr-3"
    variants={{
      hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
    }}
  >
    IEEE INU
  </motion.span>

  <motion.span
    className="inline-block text-accent text-4xl sm:text-5xl lg:text-6xl"
    variants={{
      hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
    }}
  >
    Student Branch
  </motion.span>
</motion.h1>










        {/* Description */}
        <motion.p
          className="body-text mb-10 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Empowering students through technical workshops, professional
          networking, and community impact at Irbid National University.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
          >
            Join Us <ArrowRight size={16} />
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl glass glass-hover font-medium text-foreground transition-all hover:scale-105 active:scale-95"
          >
            Learn More
          </Link>
        </motion.div>

      </motion.div>

      {/* Right Side Animation */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-[18rem] sm:h-[22rem] lg:h-[26rem]">
        <TechOrbit />
      </div>

    </div>
  </div>
</section>

    {/* About IEEE Section */}
    <section className="py-24 mesh-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="label-text mb-3">About IEEE</p>
          <h2 className="heading-lg mb-6">What is IEEE?</h2>
          <p className="body-text mx-auto text-lg">
            IEEE is the world's largest technical professional organization
            dedicated to advancing technology for the benefit of humanity. At
            INU Student Branch, we empower students through technical
            workshops, professional networking, and community impact.
          </p>
        </motion.div>

        {/* Cards with Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <Users size={24} />,
              title: "50+ Members",
              desc: "A growing community of passionate engineering students.",
            },
            {
              icon: <Calendar size={24} />,
              title: "50+ Events",
              desc: "Workshops, hackathons, and networking sessions every year.",
            },
            {
              icon: <Globe size={24} />,
              title: "Global Network",
              desc: "Connected to 400,000+ IEEE members worldwide.",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <motion.div
        className="p-6 rounded-2xl glass card-shadow text-center cursor-pointer flex flex-col justify-between min-h-[220px]"
        whileHover={{
          scale: 1.05,
          rotate: 1,
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
          {stat.icon}
        </div>
        <h3 className="heading-md text-lg mb-2">{stat.title}</h3>
        <p className="text-sm text-muted-foreground">{stat.desc}</p>
      </motion.div>
    </motion.div>
  ))}
</div>
      </div>
    </section>

    {/* Committees Preview Section */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="label-text mb-3">Our Teams</p>
          <h2 className="heading-lg mb-4">Committees</h2>
          <p className="body-text mx-auto">
            Six dedicated teams driving innovation and impact.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="relative group">
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <CommitteeCard
                    {...c}
                    onViewMembers={() => {}}
                  />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <AnimatedFolder
                    title={c.title}
                    projects={committeeMembers[c.title] ?? []}
                    subtitle="Hover to preview members"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/committees"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Explore all committees <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;