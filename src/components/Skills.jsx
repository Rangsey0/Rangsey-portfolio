import { motion } from "framer-motion";

const skills = [
  "React",
  "Tailwind CSS",
  "HTML/CSS",
  "Git/Github",
  "MySQL",
  "Laravel",
  "Jupyter Notebook",
  "Python",
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 px-6 sm:px-20 bg-white dark:bg-black text-gray-900 dark:text-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 tracking-tight">
        Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-semibold text-center shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800">
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
