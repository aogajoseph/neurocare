import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.jpg";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-[#aa2078] to-[#fffff0] bg-clip-text text-transparent">
                Our Vision
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              An Informed & Compassionate Society
            </h2>
            <p className="text-lg text-indigo-200/65">
              We envision an informed and compassionate society that responds to the real needs of individuals living with neurological conditions and other disabilities.
            </p>
          </div>
          <div className="flex justify-center pb-0 md:pb-0 -mb-2" data-aos="fade-up">
            <Image
              className="inline-flex rounded-xl"
              src={FeaturesImage}
              alt="Features"
              width={760}
              height={268}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-2 text-center md:pb-6">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-[#aa2078] to-[#fffff0] bg-clip-text text-transparent">
                Our Values
              </span>
            </div>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3"
                style={{ fill: "#df0a92" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-6 18v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
                <path d="M17.5 6.5a2.5 2.5 0 0 1 3.54 3.54l-3.54 3.54-3.54-3.54a2.5 2.5 0 1 1 3.54-3.54z" fillOpacity=".48" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Dignity First
              </h3>
              <p className="text-indigo-200/65">
                We uphold the inherent worth of every individual affected by neurological conditions, ensuring they are treated with respect, empathy and humanity.
              </p>
            </article>
            <article>
              <svg
                className="mb-3"
                style={{ fill: "#df0a92" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2zm-5 9a7.002 7.002 0 0 0 6.93-6H18a5 5 0 0 1-9.9 0H5.07A7.002 7.002 0 0 0 12 20z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Authentic Voices
              </h3>
              <p className="text-indigo-200/65">
                We believe in listening to and amplifying real stories, centering the lived experiences of individuals and families affected by conditions like Spina Bifida and Hydrocephalus.
              </p>
            </article>
            <article>
              <svg
                className="mb-3"
                style={{ fill: "#df0a92" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4
                        -4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4
                        v2h16v-2c0-2.66-5.33-4-8-4zM5.5 11a2.5 2.5 0 1 0 0-5
                        2.5 2.5 0 0 0 0 5zm13 0a2.5 2.5 0 1 0 0-5
                        2.5 2.5 0 0 0 0 5zM5.5 13c-1.96 0-3.68.8-4.5 2
                        v2h4.5v-1.5c0-.52.14-1.01.39-1.43
                        .33-.56.89-1.01 1.61-1.22-.43-.27-.97-.41-1.5-.41zm13 0
                        c-.53 0-1.07.14-1.5.41.72.21 1.28.66 1.61 1.22
                        .25.42.39.91.39 1.43V17h4.5v-2
                        c-.82-1.2-2.54-2-4.5-2z"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Collaborative Action
              </h3>
              <p className="text-indigo-200/65">
                Change is stronger together. We welcome partnerships, shared efforts, and community-driven solutions that bring lasting impact.
              </p>
            </article>
            <article>
              <svg
                className="mb-3"
                style={{ fill: "#df0a92" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path d="M12 1.75L3 5.5v6c0 5.25 3.66 9.93 9 11.25
                        5.34-1.32 9-6 9-11.25v-6L12 1.75zm0 17.55
                        c-4.14-1.12-7-5.04-7-9.3V6.3l7-2.67 7 2.67v3.7
                        c0 4.26-2.86 8.18-7 9.3zm-1.12-4.67L8.4 12.1l-1.06 1.06
                        3.54 3.54 6.36-6.36-1.06-1.06-5.3 5.3z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Transparency & Trust
              </h3>
              <p className="text-indigo-200/65">
                We commit to honesty, accountability, and clear communication in all that we do — from advocacy to partnerships.
              </p>
            </article>
            <article>
              <svg
                className="mb-3"
                style={{ fill: "#df0a92" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Equity & Inclusion
              </h3>
              <p className="text-indigo-200/65">
                We champion a world where everyone, regardless of ability or background, has equal opportunity to thrive and contribute.
              </p>
            </article>
            <article>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#aa2078"   /* Indigo-500 stroke */
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Central circle transparent (no fill) */}
                <circle cx="12" cy="12" r="5" fill="none" />

                {/* Rays filled indigo */}
                <line x1="12" y1="1" x2="12" y2="4" stroke="#df0a92" />
                <line x1="12" y1="20" x2="12" y2="23" stroke="#df0a92" />
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="#df0a92" />
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="#df0a92" />
                <line x1="1" y1="12" x2="4" y2="12" stroke="#df0a92" />
                <line x1="20" y1="12" x2="23" y2="12" stroke="#df0a92" />
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="#df0a92" />
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="#df0a92" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Hope in Motion
              </h3>
              <p className="text-indigo-200/65">
                We are future-focused, driven by a belief that awareness, compassion and action can create a better reality for affected individuals.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
