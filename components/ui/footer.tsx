import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">The Foundation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Constitution
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Strategic plan
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Advisory Board
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Educational Materials
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Online Communities
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Support Groups
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Child Protection
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Data Protection
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://www.youtube.com/feed/you"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NeuroConnect
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://forms.gle/WXKzJEReHojMt21j9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/donation-form"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-left">
            <div className="mb-1">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-2 text-indigo-200/65">
                ©2025
                <span className="text-gray-700"> · </span>
                Neuro Care Africa
                <span className="text-gray-700"> · </span>
                <br />
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="mailto:info@neurocare.africa"
                >
                  info@neurocare.africa
                </a>
                <br />
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="tel:+254713939393"
                >
                  0713 939393
                </a>
              </p>
              <ul className="inline-flex gap-3 items-center">
                <li>
                  <a
                    className="flex items-center justify-center text-[#aa2078] transition hover:text-[#7d0451]"
                    href="https://wa.me/254713939393"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-8 fill-current"
                      viewBox="0 0 408 312"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M380.9 97.1C339-3.4 239.2-32 148.1 10.7c-88.5 40.6-121.6 
                        143.5-76.6 231.6l-35.5 103.7c-3.7 10.7 6.9 20.5 17.5 
                        17.1l99.5-33.4c82.4 43.5 184.7 10.3 225.8-76.7 35.5-76.8 
                        7.9-166.5-58.9-205.9zM221.3 342c-41.7 0-80.3-16.3-109.7-45.7S66 
                        233 66 191.3s16.3-80.3 45.7-109.7S179.7 36 221.3 36s80.3 
                        16.3 109.7 45.7S377 148.3 377 190s-16.3 80.3-45.7 
                        109.7S263 342 221.3 342zm79.2-122.1c-1.2-1.9-4.3-3-9-5.1s-26.3-12.9-30.4-14.4c-4.1-1.5-7.1-2.2-10.1 
                        2.2s-11.6 14.4-14.2 17.4c-2.6 2.9-5.1 3.3-9.3 1.1-4.2-2.2-17.7-6.5-33.7-20.7-12.5-11-20.9-24.6-23.4-28.7-2.5-4.1-.3-6.4 
                        1.9-8.6 2-2 4.5-5.1 6.6-7.7 2.1-2.6 2.9-4.3 4.4-7.2s.7-5.4-.4-7.7c-1.1-2.2-10.1-24.3-13.9-33.2-3.7-8.9-7.4-7.6-10.1-7.7-2.6-.1-5.4-.1-8.3-.1s-7.6 
                        1.1-11.5 5.4c-3.9 4.3-15.1 14.7-15.1 35.7s15.5 41.4 17.7 44.3c2.2 2.9 30.5 46.6 74 65.4 10.3 4.4 18.3 7 24.6 8.9 
                        10.3 3.3 19.7 2.8 27.1 1.7 8.3-1.3 26-10.6 29.7-20.8s3.7-18.9 2.6-20.7z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-[#aa2078] transition hover:text-[#7d0451]"
                    href="https://www.youtube.com/feed/you"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-8 h-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.498 6.186a2.996 2.996 0 0 0-2.112-2.112C19.37 3.5 12 3.5 12 3.5s-7.37 0-9.386.574A2.996 2.996 0 0 0 .502 6.186 31.13 31.13 0 0 0 0 12a31.13 31.13 0 0 0 .502 5.814 2.996 2.996 0 0 0 2.112 2.112C4.63 20.5 12 20.5 12 20.5s7.37 0 9.386-.574a2.996 2.996 0 0 0 2.112-2.112A31.13 31.13 0 0 0 24 12a31.13 31.13 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.75 12l-6 3.02Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-[#aa2078] transition hover:text-[#7d0451]"
                    href="https://www.linkedin.com/in/josephaoga/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-8 h-5 fill-current"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.6 108 0 83.4 0 52.4A52.39 52.39 0 0152.36 0c28.8 0 52.36 23.6 52.36 52.4s-23.56 55.6-51.88 55.6zM447.9 448h-92.6V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6V448H158.6V148.9h88.9v40.8h1.3c12.4-23.5 42.5-48.3 87.5-48.3 93.6 0 110.7 61.6 110.7 141.7V448z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-[#aa2078] transition hover:text-[#7d0451]"
                    href="https://web.facebook.com/profile.php?id=61576275885197/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-3 h-4 fill-current"
                      viewBox="0 0 320 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 
                        12.42-50.06 52.24-50.06h40.42V6.26S293.3 
                        0 262.36 0c-73.22 0-121 44.38-121 
                        124.72v70.62H89.09V288h52.27v224h100.2V288z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
