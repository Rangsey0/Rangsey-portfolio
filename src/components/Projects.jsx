import { motion } from "framer-motion";

const projectData = [
  {
    title: "Novel Reading Website",
    desc: "Frontend website for novel reading using React and Tailwind.",
    link: "https://github.com/Rangsey0/novel-reading-website.git",
  },
  {
    title: "Online Restaurant Ordering Website",
    desc: "Full-stack web application built with Laravel and Blade.",
    link: "https://github.com/pechpenhchey/PP-Y4.git",
  },
  {
    title: "Employee Attrition Prediction",
    desc: "Built a Random Forest model to predict employee attrition using HR analytics data.",
    link: "https://github.com/Rangsey0/Employee_Attrition_Predict.git",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16 px-6 sm:px-20 bg-white dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <h3 className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
        Projects
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectData.map((p, i) => (
          <motion.div
            key={i}
            className="
              relative group rounded-xl overflow-hidden border 
              border-gray-200 bg-gray-50 
              dark:border-white/10 dark:bg-[#111] 
              hover:bg-gray-100 dark:hover:bg-[#181818] 
              transition-all duration-300
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="p-7 flex flex-col h-full">
              {/* Title */}
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {p.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed flex-grow">
                {p.desc}
              </p>

              {/* Button */}
              <a
                href={p.link}
                className="
                  self-start px-5 py-2 text-sm font-medium rounded-lg 
                  bg-gray-900 text-white 
                  hover:bg-gray-800 
                  dark:bg-white/10 dark:text-white 
                  dark:hover:bg-white/20 
                  transition-colors
                "
              >
                View More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
