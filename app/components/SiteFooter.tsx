import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <Link href="/" className="footer-name">
                Jennifer Joseph<span aria-hidden="true"> ↗</span>
            </Link>
            <p>Thoughtfully designed. Intentionally built.</p>
            <div>
                <a href="https://github.com/jnycolej">
                    GitHub <ArrowUpRight size={14} />
                </a>
                <a href="https://www.linkedin.com/in/jennifer-joseph-18006356">
                    LinkedIn <ArrowUpRight size={14} />
                </a>
            </div>
        </footer>
    );
}