"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useTheme } from "next-themes";
import CTA from "@/components/cta";
import Form from "@/components/form";
import Logos from "@/components/logos";
import Particles from "@/components/ui/particles";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Features from "@/components/features";
import FAQ from "@/components/faq";

export default function Home() {
  const { theme } = useTheme();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [volume, setVolume] = useState<string>("");
  const [isBetaTester, setIsBetaTester] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const handleIndustryChange = (value: string) => {
    setIndustry(value);
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const handleVolumeChange = (value: string) => {
    setVolume(value);
  };

  const handleBetaTesterChange = (checked: boolean) => {
    setIsBetaTester(checked);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email || !company || !industry || !language || !volume) {
      toast.error("Please fill in all required fields 😠");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid work email address 😠");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // First, attempt to send the email
        const mailResponse = await fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: name,
            email,
            company,
            industry,
            language,
            volume,
            isBetaTester,
          }),
        });

        if (!mailResponse.ok) {
          if (mailResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Email sending failed");
          }
          return;
        }

        // If email sending is successful, proceed to insert into Notion
        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            company,
            industry,
            language,
            volume,
            isBetaTester,
          }),
        });

        if (!notionResponse.ok) {
          if (notionResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Notion insertion failed");
          }
        } else {
          resolve({ name });
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        setCompany("");
        setIndustry("");
        setLanguage("");
        setVolume("");
        setIsBetaTester(false);
        return "Thank you for joining the waitlist 🎉";
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later";
        } else if (error === "Email sending failed") {
          return "Failed to send email. Please try again 😢.";
        } else if (error === "Notion insertion failed") {
          return "Failed to save your details. Please try again 😢.";
        }
        return "An error occurred. Please try again 😢.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <Header />

        <CTA />

        <Form
          name={name}
          email={email}
          company={company}
          industry={industry}
          language={language}
          volume={volume}
          isBetaTester={isBetaTester}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleCompanyChange={handleCompanyChange}
          handleIndustryChange={handleIndustryChange}
          handleLanguageChange={handleLanguageChange}
          handleVolumeChange={handleVolumeChange}
          handleBetaTesterChange={handleBetaTesterChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        <Logos />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <Footer />

      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={theme === "light" ? "#39c458" : "#7ee695"}
        size={theme === "light" ? 1.5 : 0.7}
        refresh
      />
    </main>
  );
}
