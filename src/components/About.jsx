import { Monitor, BookOpen, Server } from "lucide-react";
import { motion } from "framer-motion";
import linuxBg from "../assets/linux-bg2.jpg"; // Change path to your bg image

export default function About() {
  const skills = [
    {
      icon: <Monitor size={40} className="text-blue-500" />,
      title: "Linux Basics",
      desc: "Master the essential Linux commands to navigate and manage systems efficiently.",
    },
    {
      icon: <BookOpen size={40} className="text-green-500" />,
      title: "Download Cheatsheet",
      desc: "Get your quick-reference Linux Cheatsheet — all essential commands at your fingertips.",
    },
    {
      icon: <Server size={40} className="text-purple-500" />,
      title: "Advanced Topics with Diagrams",
      desc: "Explore advanced Linux concepts with clear, diagram-driven explanations for better understanding.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 px-6 text-center text-white"
    >
      {/* Background image */}
      <img
        src={linuxBg}
        alt="Linux Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative container mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Intro Text */}
        <motion.p
        className="max-w-3xl mx-auto text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        >
        Hi, I'm <span className="font-semibold">Kowshik J S</span>, a Computer Science
        Engineering graduate from SDM Institute of Technology, Ujire. I am passionate
        about technology, open-source systems, and love sharing the small things I
        learn along my journey.
        </motion.p>


        <motion.p
          className="max-w-3xl mx-auto mb-12 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          This site covers all the essential Linux topics — from basic commands to
          advanced operations. Each section is written to be easy to understand,
          with real-world examples. Some topics even include helpful images for
          visual learners. You’ll also find a downloadable Linux cheatsheet to make
          your learning journey smoother and faster.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-200">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
