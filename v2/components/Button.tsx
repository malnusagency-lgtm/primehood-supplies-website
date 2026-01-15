"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  icon?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  icon = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-4 font-heading font-bold uppercase tracking-wider rounded-full transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] hover:-translate-y-1",
    secondary:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-dark hover:-translate-y-1",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-1",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
      )}
    </>
  );

  const combinedClassName = clsx(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={combinedClassName}
    >
      {content}
    </motion.button>
  );
}
