"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D").then((m) => m.Scene3D), {
  ssr: false,
  loading: () => null,
});

export function PageBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.8 }}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <Scene3D />
    </motion.div>
  );
}
