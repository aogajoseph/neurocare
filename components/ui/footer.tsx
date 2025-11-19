import FooterLogo from "./footer-logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 relative">
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
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-left">
            <div className="mb-1">
              <FooterLogo />
            </div>
            <div className="text-sm">
              <p className="mb-2 text-indigo-200/65">
                ©2025 Neuro Care Foundation
                <br />
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="tel:+254713939393"
                >
                  0713 939393
                </a>
                <br />
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="mailto:info@neurocare.africa"
                >
                  info@neurocare.foundation
                </a>
              </p>
              <ul className="inline-flex gap-3 items-center">
                <li>
                  <a
                    className="flex items-center justify-center text-[#aa2078] transition hover:text-[#7d0451]"
                    href="https://www.youtube.com/@NeuroCareFoundation/"
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
                    href="https://wa.me/254713939393"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-7 fill-current"
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
                    href="https://www.linkedin.com/company/neurocarefoundation/?viewAsMember=true/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-5 fill-current"
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
                    href="https://www.facebook.com/profile.php?id=61576724788897"
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
                <li>
                  <a
                    className="flex items-center justify-center text-[#aa2078] transition hover:text-[#7d0451]"
                    href="https://www.tiktok.com/@neurocarefoundation"
                    aria-label="TikTok"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-6 h-4 fill-current"
                      viewBox="0 0 256 302"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M240.3 89.6c-22.2 0-43.2-7.2-60.3-19.5V203c0 54.6-44.2 99-99 99S-18 257.6-18 203s44.2-99 99-99c5.7 0 11.3.5 16.7 1.6V139c-5.4-1.7-11.1-2.6-17-2.6-32 0-58 26-58 58s26 58 58 58 58-26 58-58V0h42.8c2 20.8 12 39.6 27.5 53.2 13.8 12 31.6 19.2 51.3 19.2v42.4z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  Stories & Impact
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  Partners & Affiliations
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
            <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  Articles & Blog
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  Caregiver Guide
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  Support Services
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                >
                  Events & Trainings
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
                  href="/donation-form"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                  rel="noopener noreferrer"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/contact-form"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/under-construction"
                  rel="noopener noreferrer"
                >
                  Neuro Connect
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block — Newsletter */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-200">Newsletter</h3>
            <p className="text-sm text-indigo-200/65">
              Stay updated on the latest news and upcoming episodes.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md bg-[#df0a92]/20 border border-[#df0a92]/40 px-3 py-2 text-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#df0a92]"
              />
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-[#df0a92] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#b50875]"
              >
                Subscribe
              </button>
            </form>
          </div>          
        </div>
      </div>
    </footer>
  );
}
