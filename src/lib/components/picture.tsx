"use client";

import { motion } from "motion/react";
import Image from "next/image";
import MyPicture from "@/assets/images/photo.jpg";

const Picture = () => {
  const width = 400;
  const height = 400;

  const cx = width / 2;
  const cy = height / 2;
  const r = Math.max(0, width / 2 - 2);

  return (
    <div className="bg-red-20 aspect-square w-full max-w-[400px] md:max-w-[400px] relative rounded-full overflow-clip hover:text-accent">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, transition: { duration: 1.4 } }}
        whileHover={{ scale: 0.95, transition: { duration: 0.4, delay: 0.2 } }}
      >
        <Image
          className="object-cover rounded-full"
          src={MyPicture}
          alt="Abdelhalim Riache, 4 years of experience front-end engineer"
        />
      </motion.div>

      <motion.svg
        className="h-full w-full absolute inset-0 duration-500 ease-in-out transition-colors pointer-events-none"
        fill="transparent"
        viewBox="0 0 400 400"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          initial={{ strokeDasharray: "24 10 0 0", strokeWidth: 4 }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.circle>
      </motion.svg>
    </div>
  );
};

export default Picture;
