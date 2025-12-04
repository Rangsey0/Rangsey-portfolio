import { useState, useEffect } from "react";
import { Home, Sun, Moon, Github } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(savedMode === "true");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const navItems = [
    { icon: <Home size={24} />, label: "Home", id: "home" },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      link: "https://github.com/Rangsey0",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (item) => {
    if (item.link) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    } else if (item.id) {
      scrollToSection(item.id);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full w-20 flex-col justify-between bg-white dark:bg-black shadow-lg z-50">
        <div className="flex flex-col items-center py-6">
          <h1
            className={`text-2xl font-bold select-none ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            R
          </h1>
        </div>

        <ul className="flex flex-col items-center mt-10 space-y-6">
          {navItems.map((item, idx) => (
            <li key={idx} className="group relative w-full flex justify-center">
              <button
                onClick={() => handleClick(item)}
                className="flex items-center justify-center w-12 h-12 rounded-xl text-gray-900 dark:text-white 
                           hover:text-indigo-500 hover:bg-gray-100 dark:hover:bg-gray-800 
                           transition-all duration-300 transform hover:scale-110"
              >
                {item.icon}
              </button>

              <span
                className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap 
                           bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 
                           text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100
                           transition-all duration-300 translate-x-2 group-hover:translate-x-0"
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-900" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-black shadow-inner z-50">
        <ul className="flex justify-around items-center py-2">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleClick(item)}
                className="flex flex-col items-center justify-center text-gray-900 dark:text-white 
                     hover:text-indigo-500 transition-all duration-300"
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <li>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {darkMode ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-gray-900" />
                )}
              </button>
              <span className="text-xs mt-1 text-gray-900 dark:text-white">
                Mode
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
