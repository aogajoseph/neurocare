export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#374151,#6366f1,#4b5563,#6366f1,#374151)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-bold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Neuro Care Foundation
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-700"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We are a non-profit committed to promoting awareness and prevention 
                of neurological conditions while mobilizing support for affected individuals.
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn relative mb-4 w-full bg-gray-800 text-gray-100 border border-gray-700 transition duration-200 hover:bg-gray-700 hover:text-gray-100 sm:mb-0 sm:w-auto"
                    href="/under-construction"
                  >
                    Learn More
                  </a>
                </div>

                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn group w-full bg-[#df0a92] text-white border border-[#aa2078] transition duration-200 hover:bg-[#c90983] hover:text-white sm:ml-4 sm:w-auto"
                    href="https://www.youtube.com/@NeuroCareFoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      Neuro Connect
                      <span className="ml-1 tracking-normal text-white/70 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
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
                src="https://www.youtube.com/embed/3Ecojxcu0D4?si=MTLHcdjxJoD3YayF"
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
