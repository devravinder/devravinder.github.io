import { Outlet, ScrollRestoration } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { motion } from "framer-motion";

export default function Section() {
  return (
    <section className="z-0 bg-muted">
      <div className="px-4 py-4 md:px-16 md:py-8 max-w-7xl mx-auto relative flex flex-col gap-4 md:flex-row">
        <ProfileCard />
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="min-w-xs grow pb-12">
            <Outlet />
        </motion.div>
        <ScrollRestoration />
      </div>
    </section>
  );
}
