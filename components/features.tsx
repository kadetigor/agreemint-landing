import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { CheckCircle2, Shield, Clock, FileSearch, Globe, Server } from "lucide-react";
import { useTheme } from "next-themes";

const features = [
  {
    title: "Automated Document Analysis",
    description: "Upload your contracts, invoices, and delivery logs. Agreemint extracts all key terms using AI.",
    icon: FileSearch,
  },
  {
    title: "Cross-Reference Everything",
    description: "We cross-reference every document to check for violations and discrepancies.",
    icon: CheckCircle2,
  },
  {
    title: "Real-Time Alerts",
    description: "Get instant notifications whenever something doesn't match your agreements.",
    icon: Clock,
  },
  {
    title: "Multilingual Support",
    description: "Works in English, Czech, Slovak, German, French, Spanish, Russian, and Italian.",
    icon: Globe,
  },
  {
    title: "Enterprise Security",
    description: "Runs securely inside your company's infrastructure - on-premise or private cloud.",
    icon: Shield,
  },
  {
    title: "Full Data Control",
    description: "Your data never leaves your infrastructure. Complete control and privacy.",
    icon: Server,
  },
];

export default function Features() {
  const { theme } = useTheme();

  return (
    <motion.div
      className="mt-24 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How <span className="text-green-400">Agreemint</span> Works
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Stop losing money to supplier discrepancies. Start catching them automatically.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="relative rounded-lg border bg-card/10 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-400/10">
              <feature.icon className={`h-6 w-6 ${theme === "dark" ? "text-green-400" : "text-green-400"}`} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-16 rounded-lg border bg-card/10 p-8 text-center backdrop-blur-sm">
        <h3 className="text-xl font-semibold">Who is Agreemint for?</h3>
        <div className="mt-4 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
          <div>Procurement & Supply Chain Managers</div>
          <div>CFOs / Finance Teams</div>
          <div>Operations Managers at distribution companies</div>
          <div>Accounts Payable departments</div>
        </div>
      </motion.div>
    </motion.div>
  );
} 