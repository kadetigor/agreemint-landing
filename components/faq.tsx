import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Agreemint secure?",
    answer:
      "Yes, Agreemint is designed with enterprise-grade security. It can be deployed on-premise or in a private cloud, ensuring your data never leaves your infrastructure. We use industry-standard encryption and security practices.",
  },
  {
    question: "What languages does Agreemint support?",
    answer:
      "Agreemint supports multiple languages including English, Czech, Slovak, German, French, Spanish, Russian, and Italian. We're constantly adding support for more languages based on customer needs.",
  },
  {
    question: "How does Agreemint handle different document formats?",
    answer:
      "Agreemint can process various document formats including PDFs, Word documents, Excel spreadsheets, and scanned documents. Our AI-powered system extracts and normalizes data from these formats for consistent analysis.",
  },
  {
    question: "Can Agreemint integrate with our existing systems?",
    answer:
      "Yes, Agreemint is designed to integrate with common ERP, procurement, and accounting systems. We provide APIs and standard integration methods to ensure seamless data flow with your existing infrastructure.",
  },
  {
    question: "How long does it take to implement Agreemint?",
    answer:
      "Implementation time varies based on your specific needs and infrastructure. Typically, basic implementation takes 2-4 weeks. We provide full support during the setup process to ensure a smooth transition.",
  },
];

export default function FAQ() {
  return (
    <motion.div
      className="mt-24 w-full max-w-3xl px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know about Agreemint
        </p>
      </motion.div>

      <motion.div variants={containerVariants} className="mt-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} variants={itemVariants}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
} 