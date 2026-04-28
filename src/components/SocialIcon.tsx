"use client";

import { Github, Linkedin, Mail, Phone, ExternalLink, Code2 } from "lucide-react";
import type { SocialLink } from "@/data/config";

const map = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  twitter: ExternalLink,
  mail: Mail,
  phone: Phone,
  external: ExternalLink,
} as const;

export default function SocialIcon({
  link,
  size = 17,
}: {
  link: SocialLink;
  size?: number;
}) {
  const Icon = map[link.icon] ?? ExternalLink;
  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={link.label}
      className="icon-btn group/icon"
    >
      <Icon
        size={size}
        strokeWidth={1.7}
        className="transition-transform duration-300 ease-out-expo group-hover/icon:scale-110"
      />
    </a>
  );
}
