import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { FaDatabase, FaCloud, FaServer, FaBuilding, FaGlobe } from "react-icons/fa";

const logos = [
  {
    name: "Enterprise ERP",
    icon: FaDatabase,
  },
  {
    name: "Cloud Platforms",
    icon: FaCloud,
  },
  {
    name: "On-Premise",
    icon: FaServer,
  },
  {
    name: "Enterprise",
    icon: FaBuilding,
  },
  {
    name: "Global",
    icon: FaGlobe,
  },
];

export default function Logos() {
  return (
    <motion.div
      className="mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants} className="text-center">
        <p className="text-sm text-muted-foreground">
          Trusted by enterprises worldwide
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="mt-8 flex flex-wrap items-center justify-center gap-8">
        {logos.map((logo) => (
          <motion.div
            key={logo.name}
            variants={itemVariants}
            className="flex items-center justify-center">
            <logo.icon className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-8 text-center text-sm text-muted-foreground">
        <p>Seamlessly integrates with your existing systems</p>
      </motion.div>
    </motion.div>
  );
}
