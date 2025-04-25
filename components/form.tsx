import Link from "next/link";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormProps {
  name: string;
  email: string;
  company: string;
  industry: string;
  language: string;
  volume: string;
  isBetaTester: boolean;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCompanyChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleIndustryChange: (value: string) => void;
  handleLanguageChange: (value: string) => void;
  handleVolumeChange: (value: string) => void;
  handleBetaTesterChange: (checked: boolean) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  name,
  email,
  company,
  industry,
  language,
  volume,
  isBetaTester,
  handleNameChange,
  handleEmailChange,
  handleCompanyChange,
  handleIndustryChange,
  handleLanguageChange,
  handleVolumeChange,
  handleBetaTesterChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <motion.div
      className="mt-8 flex w-full max-w-[32rem] flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="email"
          placeholder="Work Email"
          value={email}
          onChange={handleEmailChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={handleCompanyChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Select onValueChange={handleIndustryChange} value={industry}>
          <SelectTrigger>
            <SelectValue placeholder="Select Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="distribution">Distribution</SelectItem>
            <SelectItem value="manufacturing">Manufacturing</SelectItem>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="wholesale">Wholesale</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Select onValueChange={handleLanguageChange} value={language}>
          <SelectTrigger>
            <SelectValue placeholder="Select Document Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="czech">Czech</SelectItem>
            <SelectItem value="slovak">Slovak</SelectItem>
            <SelectItem value="german">German</SelectItem>
            <SelectItem value="french">French</SelectItem>
            <SelectItem value="spanish">Spanish</SelectItem>
            <SelectItem value="russian">Russian</SelectItem>
            <SelectItem value="italian">Italian</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Select onValueChange={handleVolumeChange} value={volume}>
          <SelectTrigger>
            <SelectValue placeholder="Monthly Document Volume" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-50">0-50 documents</SelectItem>
            <SelectItem value="51-200">51-200 documents</SelectItem>
            <SelectItem value="201-500">201-500 documents</SelectItem>
            <SelectItem value="501-1000">501-1000 documents</SelectItem>
            <SelectItem value="1000+">1000+ documents</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div variants={itemVariants} className="flex items-center space-x-2">
        <Checkbox
          id="beta-tester"
          checked={isBetaTester}
          onCheckedChange={handleBetaTesterChange}
        />
        <label
          htmlFor="beta-tester"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          I want to be a beta tester
        </label>
      </motion.div>
      <motion.div variants={itemVariants}>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleSubmit}
          iconPlacement="right"
          className="mt-2 w-full"
          disabled={loading}>
          {loading ? "Loading..." : "Join the Waitlist"}
        </EnhancedButton>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground">
        <p>For any queries, reach out at </p>
        <Link
          href="https://x.com/agreemint"
          rel="noopener noreferrer"
          target="_blank">
          <FaXTwitter className="h-4 w-4 transition-all duration-200 ease-linear hover:text-yellow-200" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
