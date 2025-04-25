import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/agreemint-logo-dark.png" : "/agreemint-logo.png";

  return (
    <motion.header
      className="flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <a href="/" className="flex items-center space-x-2">
          <img src={logoSrc} alt="Agreemint Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">Agreemint</span>
        </a>
      </motion.div>

      <motion.nav variants={itemVariants}>
        <ul className="flex items-center space-x-8">
          <li>
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-accent">
              Features
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-sm text-muted-foreground transition-colors hover:text-accent">
              FAQ
            </a>
          </li>
          <li>
            <a
              href="mailto:contact@agreemint.com"
              className="text-sm text-muted-foreground transition-colors hover:text-accent">
              Contact
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
}
