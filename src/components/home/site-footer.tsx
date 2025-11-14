import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { sectionContainerClass } from "./section-container";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-700 bg-[#020F00] text-slate-300">
      <div className={`${sectionContainerClass} py-8 md:py-10`}>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block" aria-label="Página Inicial da VanguardIA">
              <Image
                src="/vanguardia-logo.png"
                alt="VanguardIA Logo"
                width={311}
                height={66}
                className="h-[66px] w-auto"
                priority={false}
              />
            </Link>
          </div>

          {/* Redes Sociais */}
          <nav className="flex flex-col items-center gap-4 md:flex-row" aria-label="Redes sociais">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100" id="social-links-heading">
              Siga-nos
            </h3>
            <div className="flex items-center gap-2" role="list" aria-labelledby="social-links-heading">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-slate-300 transition-colors hover:text-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                  data-track="true"
                  role="listitem"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Linha Inferior */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400">
            “VanguardIA — Inteligência Aplicada à Prosperidade.”
          </p>
        </div>
      </div>
    </footer>
  );
}