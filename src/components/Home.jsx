import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="min-h-[85vh] flex items-center justify-center px-6 sm:px-20 bg-white dark:bg-black text-gray-900 dark:text-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl text-center">
        {/* Tagline */}
        <motion.span
          className="inline-block mb-4 px-3 py-1 text-sm font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400 tracking-wide"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Developer • Designer • Human Debugger
        </motion.span>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-snug text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi, I’m <span className="text-gray-900 dark:text-white">Rangsey</span>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I turn caffeine into code. Sometimes it works. Sometimes I just need
          more coffee.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* You can add buttons here */}
        </motion.div>
      </div>
    </motion.section>
  );
}
