"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    {href: "/dashboard/projects", label: "Projects"},
    {href: "/dashboard/about", label: "About"},
    {href: "/dashboard/contact", label: "Contact"},
];

export default function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
                Jennifer Joseph<span aria-hidden="true">.</span>
            </Link>
            <button
                className="menu-toggle"
                aria-expanded={open}
                aria-controls="site-navigation"
                aria-label={open ? "Close navigation" : "Open navigation"}
                onClick={() => setOpen(!open)}
            >
                {open ? <X /> : <Menu />}
            </button>
            <nav
                id="site-navigation"
                aria-label="Main navigation"
                className={open ? "site-nav is-open" : "site-nav"}
            >
                {links.map(({ href, label}) => (
                    <Link
                        key={href}
                        href={href}
                        aria-current={pathname.startsWith(href) ? "page" : undefined}
                        onClick={() => setOpen(false)}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}