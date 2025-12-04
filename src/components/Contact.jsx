import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-28 px-6 pt-24 bg-white text-gray-900 dark:bg-black dark:text-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-4xl font-extrabold mb-6 text-center tracking-tight">
        Contact
      </h3>
      <p className="text-center text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Want to reach out? Email me at sarangseykol@gmail.com or dm me on my
        instagram.
      </p>

      <div className="flex justify-center">
        <a
          href="https://www.instagram.com/rangsey0/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-2xl
                     bg-white dark:bg-black
                     border border-gray-300 dark:border-gray-600
                     shadow-sm hover:shadow-lg hover:scale-110
                     transition-all duration-300"
        >
          <Instagram
            size={28}
            className="text-black dark:text-white transition-colors duration-300"
          />
        </a>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Rangsey. All rights reserved.
      </div>
    </motion.section>
  );
}
