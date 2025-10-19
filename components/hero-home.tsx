export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Neuro Care Foundation
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We are a non-profit foundation dedicated to raising awareness of neurological conditions, advancing prevention and supporting affected individuals and families.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-[#df0a92] text-white border border-[#aa2078] transition duration-200 hover:bg-transparent sm:mb-0 sm:w-auto"
                    href="https://www.youtube.com/feed/you"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      Neuro Connect
                      <span className="ml-1 tracking-normal text-white/50 group-hover:text-[#aa2078] transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gray-800 text-gray-300 border border-gray-600 transition duration-200 hover:bg-transparent hover:text-white sm:ml-4 sm:w-auto"
                    href="https://forms.gle/WXKzJEReHojMt21j9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Our Mission
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded YouTube Video */}
          <div className="flex justify-center px-4">
            <div
              className="w-full max-w-4xl aspect-video"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/HXHphpDJ9T0?si=2OnLzsdxQC7QeX5U"
                title="Neuro Care Africa Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
