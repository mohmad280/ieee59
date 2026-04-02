import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Globe, Lightbulb, Camera, Calendar, Cpu, ArrowLeft, Linkedin, UserCheck , DollarSign  , X } from "lucide-react";
import CommitteeCard from "@/components/CommitteeCard";

import def from "../assets/download.jpg"

//PR
import abdbaniisa from "../assets/Committees/PR/abd_baniIsa.jpg"
import gufran from "../assets/Committees/PR/gufran.jpg"
import khald from "../assets/Committees/PR/khald.jpg"
import malik from "../assets/Committees/PR/malik.jpg"
import momane from "../assets/Committees/PR/momane.jpg"
import saib from "../assets/Committees/PR/saib.jpg"

//Membership
import awad from "../assets/Committees/Membership/awad.jpg"
import tuqa from "../assets/Committees/Membership/tuqa.jpg"
import diala from "../assets/Committees/Membership/diala.jpg"
import raghad from "../assets/Committees/Membership/raghad.jpg"
import yazen from "../assets/Committees/Membership/yazen.jpg"

//Technical
import tala from "../assets/Committees/Technical/tala.jpg"
import mohmad_ghanem from "../assets/Committees/Technical/mohmad_ghanem.jpg"
import abd_shdefat from "../assets/Committees/Technical/abd_shdefat.jpg"
import ababneh from "../assets/Committees/Technical/ahmad.jpg"
import momen from "../assets/Committees/Technical/momen.jpg"
import saif from "../assets/Committees/Technical/saif.jpg"
import majli from "../assets/Committees/Technical/majli.jpg"
import mansi from "../assets/Committees/Technical/mansi.jpg"
// Program 
import mhmud from "../assets/Committees/Program/mahmud.jpg"
import hadel from "../assets/Committees/Program/hadel.jpg"
import janida from "../assets/Committees/Program/janida.jpg"
import joly from "../assets/Committees/Program/joly.jpg"
import ola from "../assets/Committees/Program/ola.jpg"
import sama from "../assets/Committees/Program/sama.jpg"
// The Finance Committee
import nada from "../assets/Committees/Finance/nada.jpg"
import rama from "../assets/Committees/Finance/rama.jpg"

// Executive
import salsabel from "../assets/Committees/Executive/salsabell.jpg"
import worod from "../assets/Committees/Executive/worod.jpg"
import lujin from "../assets/Committees/Executive/lujian.jpg"
import marym from "../assets/Committees/Executive/marym.jpg"

//Branch supervisors
import adv1 from "@/assets/Committees/Advicer/zaid.jpg"
import adv2 from "@/assets/Committees/Advicer/saif.jpg"



const committeesData = [
  {
    title: "Membership Committee",
    description: "Dedicated to expanding our community and supporting members through active outreach and engagement initiatives.",
    icon: <Users size={20} />,
    members: [
      { name: "Tuqa Rababa'a", role: "Committee Head", avatar: tuqa, linkedin: " https://www.linkedin.com/in/tuqa-rabab’ah-92b757352?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Awad Awadallah", role: "Deputy Head Committee", avatar: awad, linkedin: "https://www.linkedin.com/in/awad-awadallah-a59073382?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Raghad Hlalat", role: "Member", avatar: raghad, linkedin: "https://www.linkedin.com/in/raghad-hlalat-ab74a7392?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Diala Awwad", role: "Member", avatar: diala, linkedin: "https://www.linkedin.com/in/diala-belal-a70997326?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Yazan Al Talahmeh", role: "Member", avatar: yazen, linkedin: "https://www.linkedin.com/in/yazan-talahmeh-7a8243347?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Doha abu awwad", role: "Member", avatar:def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Ahmad Alomari", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
    ],
  },



  {
    title: "Public Relations Committee",
    description: "Manages the branch's public image, handles external communications, and builds strategic professional partnerships.",
    icon: <Globe size={20} />,
    members: [
      { name: "Abdelrahman Bani Issa", role: "Committee Head", avatar: abdbaniisa, linkedin: "https://www.linkedin.com/in/abdelrahman-bani-issa-454bb9365?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Malik Al-omari", role: "Deputy Head Committee", avatar: malik, linkedin: "https://www.linkedin.com/in/malik-alomari-b31256369?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Ghufran Dorgham ", role: "Member", avatar: gufran, linkedin: "https://www.linkedin.com/in/ghufran-dorgham-b49a29377?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "KHALED ALAZZAM", role: "Member", avatar: khald, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Ahmad Almomani", role: "Member", avatar: momane, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Saeb jad", role: "Member", avatar: saib, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Sarah Al Ali", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Waseel Almomani", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Tawfik Salem", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Bahaa alazzam", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Amro Alrousan", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Abd Alrahman", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
    ],
  },



  {
    title: "Executive Committee",
    description: " Responsible for high-level strategic leadership, ensuring smooth operations and oversight across all branch activities.",
    icon: <Lightbulb size={20} />,
    members: [
      { name: "Salsaabiel Derbas", role: "Chair", avatar: salsabel, linkedin: "https://www.linkedin.com/in/salsder?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Worod Obeidat", role: "Vice Chair", avatar: worod, linkedin: "https://www.linkedin.com/in/worod-obeidat-367728351?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Lujain Akour", role: "Secretary", avatar: lujin, linkedin: "https://www.linkedin.com/in/lujain-okour-06903b313?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Maryam Ali", role: "Truasurer", avatar: marym, linkedin: "https://www.linkedin.com/in/maryam-ali-1069ba328?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    ],
  },


  {
    title: "Media Committee",
    description: "Creates compelling visual content and manages our digital identity across all social media and online platforms.",
    icon: <Camera size={20} />,
    members: [
      { name: "Mahmoud Sallam", role: "Audio production", avatar: mhmud, linkedin: "https://www.linkedin.com/in/mahmoud-sallam-78387a363?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "جنی الشديفات", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "نور انجادات", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      
    ],
  },
  {
    title: "Program Committee",
    description: "Specializes in planning and executing educational workshops, seminars, and professional development events.",
    icon: <Calendar size={20} />,
    members: [
      { name: "Mahmoud Sallam", role: "Committee Head", avatar: mhmud, linkedin: "https://www.linkedin.com/in/mahmoud-sallam-78387a363?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Mohammad Janaideh", role: "Deputy Head Committee", avatar: janida, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Hadeel  Abu Zaroro", role: "Member", avatar: hadel, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Jouly Bawab", role: "Member", avatar: joly, linkedin: "https://www.linkedin.com/in/jouly-bawab-7b1b2535b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Sama Al Abdallat", role: "Member", avatar: sama, linkedin: "https://www.linkedin.com/in/sama-alabdallat?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Ola AL-Dalala'h", role: "Member", avatar: ola, linkedin: "https://www.linkedin.com/in/jouly-bawab-7b1b2535b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Mahmoud Ababneh", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Ahmad Mustafa", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Ammar Shatat", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Dema aiat", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/deema-aiat-59aa10385?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Osama Nemrawi", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Moneer", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Dania ", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Hashem", role: "Member", avatar:def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Ibrahim ", role: "Member", avatar: def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      
    ],
  },



  {
    title: "Technical Committee",
    description: "Leads hands-on technical projects, organizes hackathons, and delivers practical engineering-focused workshops.",
    icon: <Cpu size={20} />,
    members: [
      
      { name: "Abdullah Al-Shadifat", role: "Member", avatar: abd_shdefat, linkedin: "https://www.linkedin.com/in/abdullah-alshdefat-a1152a2b4?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Mohmad Ghanem", role: "Member", avatar: mohmad_ghanem, linkedin: "https://www.linkedin.com/in/mohmad-ghanem-459324365/" },
      { name: "Ahmad Ababneh ", role: "Member", avatar: ababneh , linkedin: "https://www.linkedin.com/in/ahmad-ababneh-648299396?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Mo'men Bashtawi", role: "Member", avatar: momen, linkedin: "https://www.linkedin.com/in/moomen-bashtawi?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Saif Naser", role: "Member", avatar: saif, linkedin: "https://www.linkedin.com/in/saif-naser-b1aa64326?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Majli", role: "Member", avatar: majli, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "tala", role: "Member", avatar: tala, linkedin: "https://www.linkedin.com/in/tala-baninaser-تالا-بني-نصر-99615234a?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Ahmad Mansi", role: "Member", avatar: mansi, linkedin: "https://www.linkedin.com/in/ahmad300974?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Salma alahmad", role: "Member", avatar:def , linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      
      
      
    ],
  },
  {
    title: "Finance Committee",
    description: "Manages the branch’s financial resources, including budgeting, funding, and financial planning for all activities.",
    icon: <DollarSign  size={20} />,
    members: [
      { name: "Maryam Ali", role: "Committee Head", avatar: marym, linkedin: "https://www.linkedin.com/in/maryam-ali-1069ba328?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Rama Rjoob", role: "Member", avatar:rama, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Nada Ahmad", role: "Member", avatar: nada, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      { name: "Abdullah Bawaaneh", role: "Member", avatar:def, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      
      
    ],
  },
  {
    title: "Branch supervisors",
    description: "Faculty advisors providing academic mentorship, strategic direction, and professional guidance to the branch.",
    icon: <UserCheck size={20} />,
    members: [
      { name: "Dr. Zaid Jawasreh", role: "Advisor", avatar: adv1, linkedin: "https://www.linkedin.com/in/dr-zaid-jawasreh-38a946158/" },
      { name: "Dr. Saif Akour", role: "Counselor", avatar: adv2, linkedin: "https://www.linkedin.com/in/ieee-inu-5a333a3a1/" },
      
    ],
  },
];

const Committees = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const stats = [
  {
    value: "7",
    label: "Committees",
    icon: (
      <div className="p-5 rounded-full" style={{ backgroundColor: "#006399" }}>
        <Users size={20} className="text-white" />
      </div>
    ),
  },
  {
    value: "50+",
    label: "Total Members",
    icon: (
      <div className="p-5 rounded-full" style={{ backgroundColor: "#006399" }}>
        <Users size={20} className="text-white" />
      </div>
    ),
  },
  {
    value: "30+",
    label: "Events/Year",
    icon: (
      <div className="p-5 rounded-full" style={{ backgroundColor: "#006399" }}>
        <Calendar size={20} className="text-white" />
      </div>
    ),
  },
  {
    value: "15+",
    label: "Annual Workshops",
    icon: (
      <div className="p-5 rounded-full" style={{ backgroundColor: "#006399" }}>
        <Lightbulb size={20} className="text-white" />
      </div>
    ),
  },
];

  const selectedCommittee = selected !== null ? committeesData[selected] : null;

  return (
    <div className="pt-20">
      <section className="py-24 mesh-gradient">
        <div className="container mx-auto px-6 text-center">
          <p className="label-text mb-3">Our Teams</p>
          <h1 className="heading-lg mb-4">Committees</h1>
          <p className="body-text mx-auto">Six dedicated teams working together to advance technology at INU.</p>
        </div>
      </section>


      <section className="py-8">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item) => (
        <motion.div
          key={item.label}
          className="p-6 rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm cursor-pointer text-center"
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex items-center justify-center mb-3">
            {item.icon}
          </div>

          <h3 className="text-3xl font-bold mb-1">{item.value}</h3>
          <p className="text-sm text-muted-foreground">{item.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {committeesData.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <CommitteeCard
                  title={c.title}
                  description={c.description}
                  icon={c.icon}
                  members={c.members}
                  showMemberCount
                  onViewMembers={() => setSelected(i)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCommittee && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-stretch"
          >
            <motion.button
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              aria-label="Close members panel"
            />
            <motion.aside
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="relative ml-auto h-full w-full max-w-md bg-white text-slate-900 shadow-2xl border-l border-slate-200 dark:bg-slate-900 dark:text-slate-100"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h2 className="text-xl font-semibold">{selectedCommittee.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{selectedCommittee.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{selectedCommittee.members.length} team members</p>
                </div>
                <button onClick={() => setSelected(null)} className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <X size={18} />
                </button>
              </div>

              <div className="p-5 overflow-y-auto h-[calc(100%-80px)]">
                <div className="space-y-3">
                  {selectedCommittee.members.map((member) => (
                    <div key={member.name} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                      <div className="flex items-center gap-3">
                        {member.avatar ? (
                          <img src={member.avatar} alt={member.name} className="w-11 h-11 rounded-full object-cover" />
                        ) : (
                          <div className="w-11 h-11 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                            {member.name
                              .split(" ")
                              .map((segment) => segment[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-sm">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-md text-primary hover:bg-primary/10"
                          aria-label={`Open ${member.name} LinkedIn`}
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Committees;
