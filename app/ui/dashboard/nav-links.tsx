"use client";

import {
  HomeModernIcon,
  UserIcon,
  EnvelopeIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeModernIcon },
  { name: "About", href: "/dashboard/about", icon: UserIcon },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: CodeBracketSquareIcon,
  },
  { name: "Contact", href: "/dashboard/contact", icon: EnvelopeIcon },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jennifer-joseph-18006356",
    icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/jnycolej", icon: Github },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-brand md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
