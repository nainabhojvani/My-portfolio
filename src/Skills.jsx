// src/components/SkillSection.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiMysql,
  SiPython,
  SiPostman,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 size={50} className="text-[#e34c26]" />,
    bg: "bg-[#fff3e3]",
  },
  {
    name: "CSS",
    icon: <SiCss3 size={50} className="text-[#264de4]" />,
    bg: "bg-[#e3f1ff]",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={50} className="text-[#f7df1e]" />,
    bg: "bg-[#fffddc]",
  },
  {
    name: "Python",
    icon: <SiPython size={50} className="text-[#3776AB]" />,
    bg: "bg-[#e9f4ff]",
  },
  {
    name: "React",
    icon: <SiReact size={50} className="text-[#61dafb]" />,
    bg: "bg-[#e3f8ff]",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={50} className="text-[#38bdf8]" />,
    bg: "bg-[#e0f7ff]",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={50} className="text-[#3c873a]" />,
    bg: "bg-[#e8ffe3]",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={50} className="text-[#47a248]" />,
    bg: "bg-[#e7ffe5]",
  },
  {
    name: "GitHub",
    icon: <SiGithub size={50} className="text-[#333]" />,
    bg: "bg-[#f2f2f2]",
  },
  {
    name: "MySQL",
    icon: <SiMysql size={50} className="text-[#00758f]" />,
    bg: "bg-[#e0f5ff]",
  },

  {
    name: "Postman",
    icon: <SiPostman size={50} className="text-[#ff6c37]" />,
    bg: "bg-[#fff2eb]",
  },
  {
    name: "Figma",
    icon: <SiFigma size={50} className="text-[#a259ff]" />,
    bg: "bg-[#f3eaff]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SkillSection = () => {
  return (
  <section id="skills" className="py-20 px-6 bg-transparent  text-white">
      <h2 className="text-4xl font-bold text-center mb-16">My Skills</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{
              rotate: [0, 2, -2, 0],
              scale: 1.1,
              boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
              transition: { duration: 0.4 },
            }}
            className={`rounded-xl p-6 flex flex-col items-center cursor-pointer ${skill.bg}`}
          >
            {skill.icon}
            <p className="text-lg font-semibold mt-4 text-black">
              {skill.name}
            </p>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
