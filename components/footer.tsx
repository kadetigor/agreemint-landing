import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/agreemint-logo-dark.png" : "/agreemint-logo.png";

  return (
    <motion.footer
      className="mt-24 w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
        <div className="flex items-center space-x-2">
          <img src={logoSrc} alt="Agreemint Logo" className="h-6 w-6" />
          <span className="text-sm font-medium">© 2024 Agreemint. All rights reserved.</span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://x.com/agreemint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground">
            <FaXTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/company/agreemint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
