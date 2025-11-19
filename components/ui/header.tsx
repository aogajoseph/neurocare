"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 w-full pt-5 bg-[#f5f5f5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/contact-form"
                className="btn-sm relative bg-gray-800 bg-opacity-60 py-[5px] px-4 text-gray-300 transition duration-200 hover:bg-transparent hover:text-white border border-gray-600 rounded"
              >
                Connect
              </Link>
            </li>
            <li>
              <Link
                href="/donation-form"
                className="btn-sm bg-[#df0a92] py-[5px] px-4 text-white rounded shadow-sm transition duration-200 hover:bg-transparent border border-[#df0a92]"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
