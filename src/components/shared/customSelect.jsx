/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomSelect({
  label = "Select",
  options = [],
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  const dropdownRef = useRef(null);

  // 👉 Click outside close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ FIX: calculate position on click (NOT in useEffect)
  const handleToggle = () => {
    if (!dropdownRef.current) return;

    const rect = dropdownRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;

    setOpenUp(spaceBelow < 200); // ✅ no warning
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Label */}
      <label className="text-sm text-gray-400">{label}</label>

      {/* Button */}
      <div
        onClick={handleToggle}
        className="mt-2 cursor-pointer shadow bg-gray-100 p-3 rounded-lg text-gray-600 flex justify-between items-center"
      >
        <span className="text-sm">{value || "Select option"}</span>

        {/* Arrow */}
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: openUp ? -20 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: openUp ? -20 : 20 }}
            transition={{ duration: 0.25 }}
            className={`absolute w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden z-50 ${
              openUp ? "bottom-full mb-2" : "top-full mt-2"
            }`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 cursor-pointer transition"
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
