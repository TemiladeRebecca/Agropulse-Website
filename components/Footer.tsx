"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  const year = 2026;

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
                <div className="relative h-[60px] w-[60px] shrink-0">
                  <Image
                    src="/images/agropulse_logo.jpg"
                    alt="Agropulse360 logo"
                    fill
                    sizes="60px"
                    className="object-contain"
                  />
                </div>
              <div>
                <p className="text-base font-semibold text-foreground">Agropulse360</p>
                <p className="text-xs text-muted-foreground">Livestock Management</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              Agropulse360 is building a more connected approach to livestock management — helping
              farmers organise animal records, support responsible veterinary care, and build trusted
              relationships with livestock buyers.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#home" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-primary">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Get Involved</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#contact" className="hover:text-primary">
                  Partner With Us
                </Link>
              </li>
              <li className="text-muted-foreground">Grant Collaborations</li>
              <li className="text-muted-foreground">Veterinary Partnerships</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {year} Agropulse360. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
