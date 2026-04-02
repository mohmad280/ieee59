import { motion } from "framer-motion";
import { Target, Eye, Award, BookOpen } from "lucide-react";
import AboutArcGalleryDemo from "@/components/AboutArcGalleryDemo";
import Blogs from "@/components/ui/blogs";





const About = () => (
  <div className="pt-20">
    {/* Arc gallery hero */}
    <AboutArcGalleryDemo />

    {/* IEEE INU description + cards */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="label-text mb-3">About Us</p>
          <h1 className="heading-lg mb-6">IEEE INU Student Branch</h1>
          <p className="body-text mx-auto text-lg">
            IEEE is the world's largest technical professional organization
            dedicated to advancing technology for the benefit of humanity. Our
            student branch at Irbid National University bridges the gap between
            academic learning and industry practice.
          </p>
        </motion.div>

        {/* 🔥 Cards with SAME Home Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Target size={24} />,
              title: "Our Mission",
              desc: "To empower students at INU with the knowledge, skills, and opportunities needed to excel in the field of technology, by fostering innovation, leadership, and continuous learning.",
            },
            {
              icon: <Eye size={24} />,
              title: "Our Vision",
              desc: "To be a leading student branch that inspires creativity and innovation, shaping future engineers and leaders who contribute to technological advancement locally and globally.",
            },
            {
              icon: <Award size={24} />,
              title: "Our Values",
              desc: "We are driven by excellence, teamwork, integrity, and a passion for innovation. We believe in creating impact through collaboration and serving our community through technology.",
            },
            {
              icon: <BookOpen size={24} />,
              title: "What We Do",
              desc: "We deliver hands-on workshops, technical sessions, competitions, and community initiatives that bridge the gap between academic learning and real-world industry skills.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <motion.div
                className="p-8 rounded-2xl glass card-shadow text-center cursor-pointer flex flex-col justify-between min-h-[220px]"
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary mx-auto">
                  {item.icon}
                </div>

                <h3 className="heading-md mb-3">{item.title}</h3>

                <p className="body-text text-sm">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Blogs />
  </div>
);

export default About;