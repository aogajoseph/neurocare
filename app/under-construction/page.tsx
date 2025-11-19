export const metadata = {
  title: "Under Construction - Neuro Care Foundation",
  description: "This page is currently being built.",
};

export default function UnderConstruction() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 flex flex-col items-center">

          {/* Illustration */}
          <img
  src="images/under-construction.png"
  alt="Under Construction"
  className="w-full max-w-md mb-10 opacity-90"
/>


          {/* Section header */}
          <div className="pb-8 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-900),var(--color-indigo-900),var(--color-gray-900),var(--color-indigo-900),var(--color-gray-900))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              UNDER CONSTRUCTION
            </h1>

            <p className="mt-2 px-30 text-sm text-gray-800">
              This page is currently being built. Please check again soon!
            </p>

            {/* Animated build line */}
            <div className="mt-6 h-[3px] w-32 bg-[#df0a92] animate-pulse mx-auto rounded-full"></div>
          </div>

          {/* Button */}
          <a
            href="/"
            className="btn bg-[#df0a92] py-[10px] px-6 text-white rounded shadow-sm transition duration-200 hover:bg-transparent hover:text-black border border-[#df0a92]"
          >
            Go to Home Page
          </a>

        </div>
      </div>
    </section>
  );
}
