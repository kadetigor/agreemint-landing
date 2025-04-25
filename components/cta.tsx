import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { useTheme } from "next-themes";

export default function CTA() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/agreemint-logo-dark.png" : "/agreemint-logo.png";

  return (
    <motion.div
      className="flex w-full max-w-4xl flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-accent/10 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming Soon</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src={logoSrc}
        alt="Agreemint Logo"
        className="mx-auto h-24 w-24"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter text-foreground sm:text-5xl"
          text="Automatically compare supplier agreements, deliveries, and invoices"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[32rem] pt-1.5 text-center text-base text-muted-foreground sm:text-lg"
          text="If it's missing, mispriced, or late — Agreemint finds it."
          duration={0.8}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[40rem] pt-4 text-center text-sm text-muted-foreground/80 sm:text-base"
          text="Catch costly discrepancies before they hit your bottom line"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
