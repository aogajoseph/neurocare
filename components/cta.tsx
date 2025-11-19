import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      {/* Blurred background shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* Full-width CTA background */}
      <div className="bg-linear-to-r from-gray-900/70 via-gray-900/99 to-gray-900/70 py-12 md:py-20">
        {/* Centered content */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#f5f5f5,#6366f1,#e0e0e0,#6366f1,#f5f5f5)] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Be the reason someone finds Hope
            </h2>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4">
              {/* Left button: Support Our Causes */}
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn relative w-full bg-gray-800 text-gray-300 shadow-md transition-all duration-300 hover:bg-transparent hover:border hover:border-gray-300 hover:text-gray-300 sm:w-auto"
                  href="/donation-form"
                >
                  Support Our Causes
                </a>
              </div>

              {/* Right button: Watch Our Stories */}
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn group mb-4 w-full bg-[#df0a92] text-white shadow-md transition-all duration-300 hover:bg-transparent hover:border hover:border-[#df0a92] sm:mb-0 sm:w-auto"
                  href="https://www.youtube.com/@NeuroCareFoundation "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Watch Our Stories
                    <span className="ml-1 tracking-normal text-white/70 group-hover:text-[#df0a92] transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
